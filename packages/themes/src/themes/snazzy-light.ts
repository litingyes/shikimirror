import { EditorView } from '@codemirror/view'

export const snazzyLightTheme = EditorView.theme({
  '&': {
    color: '#565869',
    backgroundColor: '#565869',
  },
}, {
  dark: false,
})
