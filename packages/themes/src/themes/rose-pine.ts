import { EditorView } from '@codemirror/view'

export const rosePine = EditorView.theme({
  '&': {
    color: '#e0def4',
    backgroundColor: '#191724',
  },
  '& .cm-selectionBackground': {
    background: '#6e6a8633',
  },
}, {
  dark: true,
})
