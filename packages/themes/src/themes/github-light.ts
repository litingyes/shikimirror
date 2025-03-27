import { EditorView } from '@codemirror/view'

export const githubLightTheme = EditorView.theme({
  '&': {
    color: '#24292e',
    backgroundColor: '#24292e',
  },
}, {
  dark: false,
})
