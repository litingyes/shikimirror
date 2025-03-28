import { EditorView } from '@codemirror/view'

export const darkPlus = EditorView.theme({
  '&': {
    color: '#D4D4D4',
    backgroundColor: '#1E1E1E',
  },
  '& .cm-selectionBackground': {
    background: '#ADD6FF26',
  },
}, {
  dark: true,
})
