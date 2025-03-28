import { EditorView } from '@codemirror/view'

export const everforestDark = EditorView.theme({
  '&': {
    color: '#d3c6aa',
    backgroundColor: '#2d353b',
  },
  '& .cm-selectionBackground': {
    background: '#47525860',
  },
}, {
  dark: true,
})
