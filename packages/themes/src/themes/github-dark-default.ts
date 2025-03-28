import { EditorView } from '@codemirror/view'

export const githubDarkDefault = EditorView.theme({
  '&': {
    color: '#e6edf3',
    backgroundColor: '#0d1117',
  },
  '& .cm-selectionBackground': {
    background: '#3fb95040',
  },
}, {
  dark: true,
})
