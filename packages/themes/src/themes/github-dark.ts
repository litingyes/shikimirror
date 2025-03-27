import { EditorView } from '@codemirror/view'

export const githubDarkTheme = EditorView.theme({
  '&': {
    color: '#e1e4e8',
    backgroundColor: '#e1e4e8',
  },
}, {
  dark: true,
})
