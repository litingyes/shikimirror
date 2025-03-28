import { EditorView } from '@codemirror/view'

export const vitesseLight = EditorView.theme({
  '&': {
    color: '#393a34',
    backgroundColor: '#ffffff',
  },
  '& .cm-selectionBackground': {
    background: '#22222210',
  },
}, {
  dark: false,
})
