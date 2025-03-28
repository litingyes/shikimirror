import { EditorView } from '@codemirror/view'

export const nord = EditorView.theme({
  '&': {
    color: '#d8dee9',
    backgroundColor: '#2e3440',
  },
  '& .cm-selectionBackground': {
    background: '#434c5ecc',
  },
}, {
  dark: true,
})
