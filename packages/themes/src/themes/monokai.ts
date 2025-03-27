import { EditorView } from '@codemirror/view'

export const monokaiTheme = EditorView.theme({
  '&': {
    color: '#f8f8f2',
    backgroundColor: '#f8f8f2',
  },
}, {
  dark: true,
})
