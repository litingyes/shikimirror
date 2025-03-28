import { EditorView } from '@codemirror/view'

export const solarizedLight = EditorView.theme({
  '&': {
    color: '#657B83',
    backgroundColor: '#FDF6E3',
  },
  '& .cm-selectionBackground': {
  },
}, {
  dark: false,
})
