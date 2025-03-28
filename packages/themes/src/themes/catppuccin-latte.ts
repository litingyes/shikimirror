import { EditorView } from '@codemirror/view'

export const catppuccinLatte = EditorView.theme({
  '&': {
    color: '#4c4f69',
    backgroundColor: '#eff1f5',
  },
  '& .cm-selectionBackground': {
    background: '#7c7f9333',
  },
}, {
  dark: false,
})
