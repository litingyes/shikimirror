import { EditorView } from '@codemirror/view'

export const githubDarkDimmed = EditorView.theme({
  '&': {
    color: '#adbac7',
    backgroundColor: '#22272e',
  },
  '& .cm-selectionBackground': {
    background: '#57ab5a40',
  },
}, {
  dark: true,
})
