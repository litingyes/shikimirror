import { EditorView } from '@codemirror/view'

export const darkPlusTheme = EditorView.theme({
  '&': {
    color: '#D4D4D4',
    backgroundColor: '#D4D4D4',
  },
}, {
  dark: true,
})
