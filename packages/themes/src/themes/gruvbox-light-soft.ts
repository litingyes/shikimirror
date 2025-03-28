import { EditorView } from '@codemirror/view'

export const gruvboxLightSoft = EditorView.theme({
  '&': {
    color: '#3c3836',
    backgroundColor: '#f2e5bc',
  },
  '& .cm-selectionBackground': {
    background: '#b5761440',
  },
}, {
  dark: false,
})
