import { EditorView } from '@codemirror/view'

export const rosePineMoon = EditorView.theme({
  '&': {
    color: '#e0def4',
    backgroundColor: '#232136',
  },
  '& .cm-selectionBackground': {
    background: '#817c9c26',
  },
}, {
  dark: true,
})
