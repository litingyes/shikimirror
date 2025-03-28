import { EditorView } from '@codemirror/view'

export const catppuccinMacchiato = EditorView.theme({
  '&': {
    color: '#cad3f5',
    backgroundColor: '#24273a',
  },
  '& .cm-selectionBackground': {
    background: '#939ab733',
  },
}, {
  dark: true,
})
