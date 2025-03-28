import { EditorView } from '@codemirror/view'

export const houston = EditorView.theme({
  '&': {
    color: '#eef0f9',
    backgroundColor: '#17191e',
  },
  '& .cm-selectionBackground': {
    background: '#add6ff34',
  },
}, {
  dark: true,
})
