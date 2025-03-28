import { EditorView } from '@codemirror/view'

export const gruvboxDarkMedium = EditorView.theme({
  '&': {
    color: '#ebdbb2',
    backgroundColor: '#282828',
  },
  '& .cm-selectionBackground': {
    background: '#fabd2f40',
  },
}, {
  dark: true,
})
