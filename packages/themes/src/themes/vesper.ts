import { EditorView } from '@codemirror/view'

export const vesper = EditorView.theme({
  '&': {
    color: '#FFF',
    backgroundColor: '#101010',
  },
  '& .cm-selectionBackground': {
    background: '#FFFFFF25',
  },
}, {
  dark: true,
})
