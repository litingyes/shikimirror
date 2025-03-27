import { resolve } from 'node:path'
import { destr } from 'destr'
import { emptyDirSync, readJSONSync, writeFileSync } from 'fs-extra'
import { themes } from 'tm-themes'
import { camelCase } from 'usexx'

interface TextMateTheme {
  colors?: {
    'editor.background'?: string
    'editor.foreground'?: string
  }
}

function main() {
  const outputDir = resolve(__dirname, '../src/themes')
  emptyDirSync(outputDir)

  let indexFileExport = ''

  themes.forEach((theme) => {
    const data = destr<TextMateTheme>(readJSONSync(resolve(__dirname, `../../../node_modules/tm-themes/themes/${theme.name}.json`)))

    const codeMirrorThemeContent = `import { EditorView } from "@codemirror/view"
import { Extension } from "@codemirror/state"

export const ${camelCase(theme.name)}Theme = EditorView.theme({
    "&": {
      color: "${data.colors?.['editor.foreground']}",
      backgroundColor: "${data.colors?.['editor.foreground']}"
    }
}, {
    dark: ${theme.type === 'dark'}
})
`

    writeFileSync(resolve(outputDir, `${theme.name}.ts`), codeMirrorThemeContent, 'utf-8')

    indexFileExport += `export * from "./${theme.name}"\n`
  })

  writeFileSync(resolve(outputDir, 'index.ts'), indexFileExport, 'utf-8')
}

main()
