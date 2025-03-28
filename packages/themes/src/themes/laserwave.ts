import { EditorView } from '@codemirror/view'

export const laserwave = EditorView.theme({
  '&': {
    color: '#ffffff',
    backgroundColor: '#27212e',
  },
  '& .cm-selectionBackground': {
    background: '#eb64b927',
  },
}, {
  dark: true,
})
