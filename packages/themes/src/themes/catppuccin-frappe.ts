import { EditorView } from '@codemirror/view'

export const catppuccinFrappe = EditorView.theme({
  '&': {
    color: '#c6d0f5',
    backgroundColor: '#303446',
  },
  '& .cm-selectionBackground': {
    background: '#949cbb33',
  },
}, {
  dark: true,
})
