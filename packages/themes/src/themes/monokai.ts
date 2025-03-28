import { EditorView } from '@codemirror/view'

export const monokai = EditorView.theme({
  '&': {
    color: '#f8f8f2',
    backgroundColor: '#272822',
  },
  '& .cm-selectionBackground': {
    background: '#575b6180',
  },
}, {
  dark: true,
})
