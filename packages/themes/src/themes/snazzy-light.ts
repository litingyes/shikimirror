import { EditorView } from '@codemirror/view'

export const snazzyLight = EditorView.theme({
  '&': {
    color: '#565869',
    backgroundColor: '#FAFBFC',
  },
  '& .cm-selectionBackground': {
  },
}, {
  dark: false,
})
