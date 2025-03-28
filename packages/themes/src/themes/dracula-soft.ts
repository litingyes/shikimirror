import { EditorView } from '@codemirror/view'

export const draculaSoft = EditorView.theme({
  '&': {
    color: '#f6f6f4',
    backgroundColor: '#282A36',
  },
  '& .cm-selectionBackground': {
    background: '#424450',
  },
}, {
  dark: true,
})
