import { EditorView } from '@codemirror/view'

export const vitesseBlack = EditorView.theme({
  '&': {
    color: '#dbd7cacc',
    backgroundColor: '#000',
  },
  '& .cm-selectionBackground': {
    background: '#eeeeee10',
  },
}, {
  dark: true,
})
