import { EditorView } from '@codemirror/view'

export const synthwave84 = EditorView.theme({
  '&': {
    color: '#ffffff',
    backgroundColor: '#262335',
  },
  '& .cm-selectionBackground': {
    background: '#ffffff20',
  },
}, {
  dark: true,
})
