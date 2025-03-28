import { EditorView } from '@codemirror/view'

export const materialThemeOcean = EditorView.theme({
  '&': {
    color: '#babed8',
    backgroundColor: '#0F111A',
  },
  '& .cm-selectionBackground': {
    background: '#FFCC0020',
  },
}, {
  dark: true,
})
