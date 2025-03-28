import { EditorView } from '@codemirror/view'

export const catppuccinMocha = EditorView.theme({
  '&': {
    color: '#cdd6f4',
    backgroundColor: '#1e1e2e',
  },
  '& .cm-selectionBackground': {
    background: '#9399b233',
  },
}, {
  dark: true,
})
