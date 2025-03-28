import { EditorView } from '@codemirror/view'

export const githubDarkHighContrast = EditorView.theme({
  '&': {
    color: '#f0f3f6',
    backgroundColor: '#0a0c10',
  },
  '& .cm-selectionBackground': {
    background: '#26cd4d40',
  },
}, {
  dark: true,
})
