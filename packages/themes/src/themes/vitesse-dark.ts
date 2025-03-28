import { EditorView } from '@codemirror/view'

export const vitesseDark = EditorView.theme({
  '&': {
    color: '#dbd7caee',
    backgroundColor: '#121212',
  },
  '& .cm-selectionBackground': {
    background: '#eeeeee10',
  },
}, {
  dark: true,
})
