import { EditorView } from '@codemirror/view'

export const gruvboxLightHard = EditorView.theme({
  '&': {
    color: '#3c3836',
    backgroundColor: '#f9f5d7',
  },
  '& .cm-selectionBackground': {
    background: '#b5761440',
  },
}, {
  dark: false,
})
