import { EditorView } from '@codemirror/view'

export const githubLightHighContrastTheme = EditorView.theme({
  '&': {
    color: '#0e1116',
    backgroundColor: '#0e1116',
  },
}, {
  dark: false,
})
