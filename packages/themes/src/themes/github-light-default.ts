import { EditorView } from '@codemirror/view'

export const githubLightDefaultTheme = EditorView.theme({
  '&': {
    color: '#1f2328',
    backgroundColor: '#1f2328',
  },
}, {
  dark: false,
})
