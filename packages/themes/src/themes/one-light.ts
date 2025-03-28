import { EditorView } from '@codemirror/view'

export const oneLight = EditorView.theme({
  '&': {
    color: '#383A42',
    backgroundColor: '#FAFAFA',
  },
  '& .cm-selectionBackground': {
  },
}, {
  dark: false,
})
