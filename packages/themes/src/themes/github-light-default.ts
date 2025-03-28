import { EditorView } from '@codemirror/view'

export const githubLightDefault = EditorView.theme({
  '&': {
    color: '#1f2328',
    backgroundColor: '#ffffff',
  },
  '& .cm-selectionBackground': {
    background: '#4ac26b40',
  },
}, {
  dark: false,
})
