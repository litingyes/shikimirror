import { EditorView } from '@codemirror/view'

export const githubDarkHighContrastTheme = EditorView.theme({
  '&': {
    color: '#f0f3f6',
    backgroundColor: '#f0f3f6',
  },
}, {
  dark: true,
})
