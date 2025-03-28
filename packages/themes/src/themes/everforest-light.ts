import { EditorView } from '@codemirror/view'

export const everforestLight = EditorView.theme({
  '&': {
    color: '#5c6a72',
    backgroundColor: '#fdf6e3',
  },
  '& .cm-selectionBackground': {
    background: '#e6e2cc50',
  },
}, {
  dark: false,
})
