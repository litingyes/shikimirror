import { EditorView } from '@codemirror/view'

export const materialTheme = EditorView.theme({
  '&': {
    color: '#EEFFFF',
    backgroundColor: '#263238',
  },
  '& .cm-selectionBackground': {
    background: '#FFCC0020',
  },
}, {
  dark: true,
})
