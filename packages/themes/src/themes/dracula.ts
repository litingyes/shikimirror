import { EditorView } from '@codemirror/view'

export const dracula = EditorView.theme({
  '&': {
    color: '#F8F8F2',
    backgroundColor: '#282A36',
  },
  '& .cm-selectionBackground': {
    background: '#424450',
  },
}, {
  dark: true,
})
