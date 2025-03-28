import { EditorView } from '@codemirror/view'

export const auroraX = EditorView.theme({
  '&': {
    color: '#576daf',
    backgroundColor: '#07090F',
  },
  '& .cm-selectionBackground': {
    background: '#262E47',
  },
}, {
  dark: true,
})
