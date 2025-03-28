import { EditorView } from '@codemirror/view'

export const minDark = EditorView.theme({
  '&': {
    color: '#888888',
    backgroundColor: '#1f1f1f',
  },
  '& .cm-selectionBackground': {
  },
}, {
  dark: true,
})
