import { EditorView } from '@codemirror/view'

export const nightOwl = EditorView.theme({
  '&': {
    color: '#d6deeb',
    backgroundColor: '#011627',
  },
  '& .cm-selectionBackground': {
    background: '#5f7e9779',
  },
}, {
  dark: true,
})
