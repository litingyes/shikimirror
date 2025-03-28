import { EditorView } from '@codemirror/view'

export const kanagawaDragon = EditorView.theme({
  '&': {
    color: '#C5C9C5',
    backgroundColor: '#181616',
  },
  '& .cm-selectionBackground': {
    background: '#39383680',
  },
}, {
  dark: true,
})
