import { EditorView } from '@codemirror/view'

export const githubDark = EditorView.theme({
  '&': {
    color: '#e1e4e8',
    backgroundColor: '#24292e',
  },
  '& .cm-selectionBackground': {
    background: '#17E5E633',
  },
}, {
  dark: true,
})
