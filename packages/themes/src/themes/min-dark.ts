import { EditorView } from '@codemirror/view'

export const minDarkTheme = EditorView.theme({
  '&': {
    color: 'undefined',
    backgroundColor: 'undefined',
  },
}, {
  dark: true,
})
