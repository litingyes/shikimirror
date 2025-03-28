import { EditorView } from '@codemirror/view'

export const lightPlus = EditorView.theme({
  '&': {
    color: '#000000',
    backgroundColor: '#FFFFFF',
  },
  '& .cm-selectionBackground': {
    background: '#ADD6FF80',
  },
}, {
  dark: false,
})
