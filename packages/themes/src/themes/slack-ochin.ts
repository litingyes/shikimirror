import { EditorView } from '@codemirror/view'

export const slackOchinTheme = EditorView.theme({
  '&': {
    color: '#000',
    backgroundColor: '#000',
  },
}, {
  dark: false,
})
