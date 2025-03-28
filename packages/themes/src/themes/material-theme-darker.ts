import { EditorView } from '@codemirror/view'

export const materialThemeDarker = EditorView.theme({
  '&': {
    color: '#EEFFFF',
    backgroundColor: '#212121',
  },
  '& .cm-selectionBackground': {
    background: '#FFCC0020',
  },
}, {
  dark: true,
})
