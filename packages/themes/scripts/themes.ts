import { resolve } from 'node:path'
import { destr } from 'destr'
import { emptyDirSync, readJSONSync, writeFileSync } from 'fs-extra'
import { themes } from 'tm-themes'
import { camelCase, isArray } from 'usexx'

interface TextMateTheme {
  colors?: Record<string, string>
}

function genKV(key: string, value?: string | Array<string | undefined>) {
  if (!value) {
    return ''
  }

  if (isArray(value)) {
    for (let i = 0; i < value.length; i++) {
      if (value[i]) {
        return `${key}: "${value[i]}",`
      }
    }
    return ''
  }

  return `${key}: "${value}",`
}

function main() {
  const outputDir = resolve(__dirname, '../src/themes')
  emptyDirSync(outputDir)

  let indexFileExport = ''

  themes.forEach((theme) => {
    const data = destr<TextMateTheme>(readJSONSync(resolve(__dirname, `../../../node_modules/tm-themes/themes/${theme.name}.json`)))

    const codeMirrorThemeContent = `import { EditorView } from "@codemirror/view"
import { Extension } from "@codemirror/state"

export const ${camelCase(theme.name)} = EditorView.theme({
    "&": {
      ${genKV('color', [data.colors?.['editor.foreground'], data.colors?.foreground])}
      ${genKV('backgroundColor', data.colors?.['editor.background'])}
    },
    "& .cm-selectionBackground": {
      ${genKV('background', data.colors?.['editor.selectionHighlightBackground'])}
    },
}, {
    dark: ${theme.type === 'dark'}
})
`.split('\n').filter(line => !!line.trim()).join('\n')

    writeFileSync(resolve(outputDir, `${theme.name}.ts`), codeMirrorThemeContent, 'utf-8')

    indexFileExport += `export * from "./${theme.name}"\n`
  })

  writeFileSync(resolve(outputDir, 'index.ts'), indexFileExport, 'utf-8')
}

main()
