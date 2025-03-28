import { EditorView } from '@codemirror/view'

export const plastic = EditorView.theme({
  '&': {
    color: '#A9B2C3',
    backgroundColor: '#21252B',
  },
  '& .cm-selectionBackground': {
    background: '#A9B2C31A',
  },
}, {
  dark: true,
})
