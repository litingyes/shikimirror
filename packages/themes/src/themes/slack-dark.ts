import { EditorView } from '@codemirror/view'

export const slackDark = EditorView.theme({
  '&': {
    color: '#E6E6E6',
    backgroundColor: '#222222',
  },
  '& .cm-selectionBackground': {
    background: '#add6ff26',
  },
}, {
  dark: true,
})
