import { EditorView } from '@codemirror/view'

export const oneDarkPro = EditorView.theme({
  '&': {
    color: '#abb2bf',
    backgroundColor: '#282c34',
  },
  '& .cm-selectionBackground': {
    background: '#ffd33d44',
  },
}, {
  dark: true,
})
