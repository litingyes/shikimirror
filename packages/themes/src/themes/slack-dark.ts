import { EditorView } from '@codemirror/view'

export const slackDarkTheme = EditorView.theme({
  '&': {
    color: '#E6E6E6',
    backgroundColor: '#E6E6E6',
  },
}, {
  dark: true,
})
