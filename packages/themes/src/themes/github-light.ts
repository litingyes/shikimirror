import { EditorView } from '@codemirror/view'

export const githubLight = EditorView.theme({
  '&': {
    color: '#24292e',
    backgroundColor: '#fff',
  },
  '& .cm-selectionBackground': {
    background: '#34d05840',
  },
}, {
  dark: false,
})
