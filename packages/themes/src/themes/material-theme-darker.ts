import { EditorView } from '@codemirror/view'

export const materialThemeDarkerTheme = EditorView.theme({
  '&': {
    color: '#EEFFFF',
    backgroundColor: '#EEFFFF',
  },
}, {
  dark: true,
})
