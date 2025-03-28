<script setup lang="ts">
import { grammars } from 'tm-grammars'
import { themes } from 'tm-themes'
import Badge from './Badge.vue'
import {language, isDark, theme} from './state';
import { basicSetup } from "codemirror"
import { EditorView } from "@codemirror/view"
import { Compartment, Extension } from '@codemirror/state'
import {camelCase} from 'usexx'


const copied = ref(false)
const clipboard = useClipboard()

const params = useUrlSearchParams('history')

const searchInputLanguage = ref('')
const searchInputTheme = ref('')

const input = ref('')
const example = ref('')

const themeConfig = new Compartment()

const editorContainer = useTemplateRef('editorContainer')
const editor = ref<EditorView>()
onMounted(() => {
  editor.value = new EditorView({
    doc: input.value,
    parent: editorContainer.value!,
    extensions: [
      basicSetup,
      EditorView.updateListener.of((update) => {
        if (!update.docChanged) {
          return
        }


        input.value = update.state.doc.toString()
      }),
      themeConfig.of([])
    ]
  })
})

const isFetching = ref(false)

const filteredLanguage = computed(() => {
  const searchTerm = searchInputLanguage.value.trim().toLowerCase()
  return grammars.filter(g =>
    g.displayName.toLowerCase().includes(searchTerm),
  )
})

const filteredThemes = computed(() => {
  const searchTerm = searchInputTheme.value.trim().toLowerCase()
  return themes.filter(t =>
    t.displayName.toLowerCase().includes(searchTerm),
  )
})

if (params.theme && themes.some(t => t.name === params.theme))
  theme.value = params.theme as string
if (params.language && grammars.some(t => t.name === params.language))
  language.value = params.language as string
if (params.code?.length)
  input.value = params.code as string


let fetchingTimer: ReturnType<typeof setTimeout> | undefined

async function run(fetchInput = true) {
  if (fetchingTimer)
    clearTimeout(fetchingTimer)
  fetchingTimer = setTimeout(() => {
    isFetching.value = true
  }, 300)

  try {
    if (!fetchInput) {
      return
    }

    const sample = await import(`../../samples/${language.value}.sample?raw`)
      .then(m => m.default)
      .catch(() => `// No sample available for ${language.value}`)
    example.value = sample
    input.value = sample

    editor.value?.dispatch({
      changes: {
        from: 0,
        to: editor.value.state.doc.length,
        insert: sample
      }
    })
  }
  catch (e) {
    throw e
  }
  finally {
    if (fetchingTimer)
      clearTimeout(fetchingTimer)
    isFetching.value = false
  }
}

function openFile(filename: string) {
  if (import.meta.hot) {
    fetch(`/__open-in-editor?file=${filename}`)
  }
  else {
    const a = document.createElement('a')
    a.href = new URL(filename, 'https://github.com/shikijs/textmate-grammars-themes/tree/main/playground/').href
    a.target = '_blank'
    a.click()
  }
}
function openSample() {
  openFile(`../samples/${language.value}.sample`)
}
function openGrammar(name = language.value) {
  openFile(`../packages/tm-grammars/grammars/${name}.json`)
}
function openTheme() {
  openFile(`../packages/themes/src/themes/${theme.value}.ts`)
}

function random() {
  const g = grammars[Math.floor(Math.random() * grammars.length)]
  const t = themes[Math.floor(Math.random() * themes.length)]
  language.value = g.name
  theme.value = t.name
}

function share() {
  clipboard.copy(new URL(`?${new URLSearchParams({
    theme: theme.value,
    grammar: language.value,
  })}`, location.href).href)
  copied.value = true
  setTimeout(() => {
    copied.value = false
  }, 1000)
}

watch(
  [theme, language],
  (n, o) => {
    params.theme = theme.value
    params.language = language.value
    const grammarChanged = o[1] !== n[1]
    const isFirstTime = !o[0]
    // Fetch example when grammar changes, or the first load without params
    run(isFirstTime ? !input.value : grammarChanged)
  },
  { immediate: true },
)
watch(theme, (theme) => {
  if (!theme) {
    return
  }

  import('shikimirror/themes').then(themes => {
    const themeExtension = themes[camelCase(theme)] as Extension
    !!themeExtension &&  editor.value?.dispatch({
      effects: themeConfig.reconfigure(themeExtension)
    })
  })
}, {
  immediate:true
})

watch(
  input,
  () => {
    if (input.value !== example.value)
      params.code = input.value
    else
      delete params.code
  },
  { flush: 'post' },
)

// @ts-expect-error DEFINE
const version = __VERSION__

useTitle('Shikimirror Playground')

if (import.meta.hot) {
  import.meta.hot.accept(() => {
    run()
  })
}
</script>

<template>
  <div h-100vh w-full grid="~ rows-[max-content_1fr]">
    <div flex="~ items-center gap-2" px4 pt-4>
      <a href="https://github.com/shikijs/textmate-grammars-themes" target="_blank" text-lg hover="text-primary">
        Shikimirror with CodeMirror Playground
      </a>
      <Badge :text="`shikimirror v${version}`" text-sm :color="160" />
      <div flex-auto />
      <a border="~ base rounded" p2 hover="bg-active" href="https://github.com/shikijs/textmate-grammars-themes"
         target="_blank">
        <div i-carbon-logo-github />
      </a>
      <button border="~ base rounded" p2 hover="bg-active" title="Reset" @click="run()">
        <div i-carbon-reset />
      </button>
      <button border="~ base rounded" p2 hover="bg-active" title="Random" @click="random()">
        <div i-carbon-shuffle />
      </button>
      <button border="~ base rounded" p2 hover="bg-active" @click="share()">
        <div v-if="copied" i-carbon-checkmark />
        <div v-else i-carbon-link />
      </button>
      <button border="~ base rounded" p2 hover="bg-active" @click="isDark = !isDark">
        <div dark:i-carbon-moon i-carbon-sun />
      </button>
    </div>
    <div grid="~ cols-[200px_200px_5fr] gap-4" p4 of-hidden>
      <div h-full of-auto flex="~ col gap-4">
        <div relative border="~ base rounded">
          <input
                 v-model="searchInputLanguage"
                 placeholder="Search" px3
                 py1 pl8 bg-transparent sticky top-0 w-full>
          <div i-carbon-search absolute left-2 top-2 op40 z--1 />
        </div>
        <div h-full of-auto flex="~ col" border="~ base rounded">
          <button
                  v-for="g of filteredLanguage"
                  :key="g.name"
                  border="b base" px3
                  py1 text-left
                  :class="g.name === language ? 'bg-active text-primary' : 'text-faded'"
                  @click="language = g.name">
            {{ g.displayName }}
          </button>
        </div>
      </div>

      <div h-full of-auto flex="~ col gap-4">
        <div relative border="~ base rounded">
          <input
                 v-model="searchInputTheme"
                 placeholder="Search" px3
                 py1 pl8 bg-transparent sticky top-0 w-full>
          <div i-carbon-search absolute left-2 top-2 op40 z--1 />
        </div>
        <div h-full of-auto flex="~ col" border="~ base rounded">
          <button
                  v-for="t of filteredThemes"
                  :key="t.name"
                  border="b base" px3 py1 text-left
                  :class="t.name === theme ? 'bg-active text-purple' : 'text-faded'"
                  @click="theme = t.name">
            {{ t.displayName }}
          </button>
        </div>
      </div>

      <div flex="~ col gap-4" of-auto max-h-full>
        <div p4 border="~ base rounded" flex="~ gap-4" class="panel-info" flex-none>
          <div grid="~ cols-[max-content_1fr] gap-x-3" flex-auto>
            <div text-right op50>
              Grammar
            </div>
            <div>
              <div flex="~ items-center gap-2">
                <button text-left @click="openGrammar()">
                  <code>{{ language }}</code>
                </button>
              </div>
            </div>
            <div text-right op50>
              Theme
            </div>
            <div>
              <div flex="~ items-center gap-2">
                <button text-left @click="openTheme()">
                  <code>{{ theme }}</code>
                </button>
              </div>
            </div>
            <div text-right op50>
              Sample
            </div>
            <button text-left @click="openSample()">
              <code>
                {{ language }}.sample
              </code>
            </button>
          </div>
        </div>

        <div ref="editorContainer" class="of-x-scroll flex-none"></div>
        <div v-if="isFetching" text-amber bg-amber:10 px4 py3 border="~ amber/50 rounded" animate-pulse
             flex="~ items-center gap-2 none">
          <div i-svg-spinners-270-ring-with-bg />
          Loading...
        </div>
      </div>
    </div>
  </div>
</template>

<style>
:root {
  color-scheme: light;
}

:root.dark {
  color-scheme: dark;
}

.shiki,
#input {
  font-size: 14px;
  line-height: 1.5;
  padding: 10px;
  min-height: 4em;
  white-space: pre;
  --uno: border border-base rounded p4;
}

.panel-info button {
  --uno: hover-text-primary hover-underline hover:op100;
}

pre code {
  --uno: font-mono;
}
</style>
