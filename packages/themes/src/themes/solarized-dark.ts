import { EditorView } from '@codemirror/view'

export const solarizedDark = EditorView.theme({
  '&': {
    color: '#839496',
    backgroundColor: '#002B36',
  },
  '& .cm-selectionBackground': {
    background: '#005A6FAA',
  },
}, {
  dark: true,
})
