import { EditorView } from '@codemirror/view'

export const poimandres = EditorView.theme({
  '&': {
    color: '#a6accd',
    backgroundColor: '#1b1e28',
  },
  '& .cm-selectionBackground': {
    background: '#00000000',
  },
}, {
  dark: true,
})
