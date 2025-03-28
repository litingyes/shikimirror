import { EditorView } from '@codemirror/view'

export const kanagawaLotus = EditorView.theme({
  '&': {
    color: '#545464',
    backgroundColor: '#F2ECBC',
  },
  '& .cm-selectionBackground': {
    background: '#E4D79480',
  },
}, {
  dark: false,
})
