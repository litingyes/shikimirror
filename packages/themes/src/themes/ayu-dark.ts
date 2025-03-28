import { EditorView } from '@codemirror/view'

export const ayuDark = EditorView.theme({
  '&': {
    color: '#bfbdb6',
    backgroundColor: '#0b0e14',
  },
  '& .cm-selectionBackground': {
    background: '#7fd96226',
  },
}, {
  dark: true,
})
