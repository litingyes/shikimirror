import { EditorView } from '@codemirror/view'

export const tokyoNightTheme = EditorView.theme({
  '&': {
    color: '#a9b1d6',
    backgroundColor: '#a9b1d6',
  },
}, {
  dark: true,
})
