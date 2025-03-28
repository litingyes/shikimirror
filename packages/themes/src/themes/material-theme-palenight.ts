import { EditorView } from '@codemirror/view'

export const materialThemePalenight = EditorView.theme({
  '&': {
    color: '#babed8',
    backgroundColor: '#292D3E',
  },
  '& .cm-selectionBackground': {
    background: '#FFCC0020',
  },
}, {
  dark: true,
})
