import { EditorView } from '@codemirror/view'

export const gruvboxLightMedium = EditorView.theme({
  '&': {
    color: '#3c3836',
    backgroundColor: '#fbf1c7',
  },
  '& .cm-selectionBackground': {
    background: '#b5761440',
  },
}, {
  dark: false,
})
