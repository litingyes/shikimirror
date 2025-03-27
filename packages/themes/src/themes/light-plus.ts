import { EditorView } from '@codemirror/view'

export const lightPlusTheme = EditorView.theme({
  '&': {
    color: '#000000',
    backgroundColor: '#000000',
  },
}, {
  dark: false,
})
