import { EditorView } from '@codemirror/view'

export const githubDarkDefaultTheme = EditorView.theme({
  '&': {
    color: '#e6edf3',
    backgroundColor: '#e6edf3',
  },
}, {
  dark: true,
})
