import { EditorView } from '@codemirror/view'

export const oneLightTheme = EditorView.theme({
  '&': {
    color: '#383A42',
    backgroundColor: '#383A42',
  },
}, {
  dark: false,
})
