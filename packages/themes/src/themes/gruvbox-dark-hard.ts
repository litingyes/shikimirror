import { EditorView } from '@codemirror/view'

export const gruvboxDarkHard = EditorView.theme({
  '&': {
    color: '#ebdbb2',
    backgroundColor: '#1d2021',
  },
  '& .cm-selectionBackground': {
    background: '#fabd2f40',
  },
}, {
  dark: true,
})
