import { EditorView } from '@codemirror/view'

export const rosePineDawn = EditorView.theme({
  '&': {
    color: '#575279',
    backgroundColor: '#faf4ed',
  },
  '& .cm-selectionBackground': {
    background: '#6e6a8614',
  },
}, {
  dark: false,
})
