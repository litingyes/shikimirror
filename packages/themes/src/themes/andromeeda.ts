import { EditorView } from '@codemirror/view'

export const andromeeda = EditorView.theme({
  '&': {
    color: '#D5CED9',
    backgroundColor: '#23262E',
  },
  '& .cm-selectionBackground': {
    background: '#4F435580',
  },
}, {
  dark: true,
})
