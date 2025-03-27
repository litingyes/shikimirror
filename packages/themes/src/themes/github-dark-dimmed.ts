import { EditorView } from '@codemirror/view'

export const githubDarkDimmedTheme = EditorView.theme({
  '&': {
    color: '#adbac7',
    backgroundColor: '#adbac7',
  },
}, {
  dark: true,
})
