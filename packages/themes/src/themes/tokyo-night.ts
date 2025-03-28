import { EditorView } from '@codemirror/view'

export const tokyoNight = EditorView.theme({
  '&': {
    color: '#a9b1d6',
    backgroundColor: '#1a1b26',
  },
  '& .cm-selectionBackground': {
    background: '#515c7e44',
  },
}, {
  dark: true,
})
