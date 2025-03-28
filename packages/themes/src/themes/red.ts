import { EditorView } from '@codemirror/view'

export const red = EditorView.theme({
  '&': {
    color: '#F8F8F8',
    backgroundColor: '#390000',
  },
  '& .cm-selectionBackground': {
    background: '#f5500039',
  },
}, {
  dark: true,
})
