import { EditorView } from '@codemirror/view'

export const githubLightHighContrast = EditorView.theme({
  '&': {
    color: '#0e1116',
    backgroundColor: '#ffffff',
  },
  '& .cm-selectionBackground': {
    background: '#26a14840',
  },
}, {
  dark: false,
})
