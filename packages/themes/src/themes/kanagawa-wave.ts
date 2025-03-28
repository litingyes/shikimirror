import { EditorView } from '@codemirror/view'

export const kanagawaWave = EditorView.theme({
  '&': {
    color: '#DCD7BA',
    backgroundColor: '#1F1F28',
  },
  '& .cm-selectionBackground': {
    background: '#36364680',
  },
}, {
  dark: true,
})
