import { EditorView } from '@codemirror/view'

export const redTheme = EditorView.theme({
  '&': {
    color: '#F8F8F8',
    backgroundColor: '#F8F8F8',
  },
}, {
  dark: true,
})
