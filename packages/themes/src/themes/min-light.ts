import { EditorView } from '@codemirror/view'

export const minLight = EditorView.theme({
  '&': {
    color: '#212121',
    backgroundColor: '#ffffff',
  },
  '& .cm-selectionBackground': {
  },
}, {
  dark: false,
})
