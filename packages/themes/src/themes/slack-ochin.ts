import { EditorView } from '@codemirror/view'

export const slackOchin = EditorView.theme({
  '&': {
    color: '#000',
    backgroundColor: '#FFF',
  },
  '& .cm-selectionBackground': {
  },
}, {
  dark: false,
})
