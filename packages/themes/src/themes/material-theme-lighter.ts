import { EditorView } from '@codemirror/view'

export const materialThemeLighter = EditorView.theme({
  '&': {
    color: '#90A4AE',
    backgroundColor: '#FAFAFA',
  },
  '& .cm-selectionBackground': {
    background: '#27272720',
  },
}, {
  dark: false,
})
