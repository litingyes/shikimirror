import { EditorView } from '@codemirror/view'

export const gruvboxDarkSoft = EditorView.theme({
  '&': {
    color: '#ebdbb2',
    backgroundColor: '#32302f',
  },
  '& .cm-selectionBackground': {
    background: '#fabd2f40',
  },
}, {
  dark: true,
})
