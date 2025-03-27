import { EditorView } from '@codemirror/view'

export const solarizedDarkTheme = EditorView.theme({
  '&': {
    color: '#839496',
    backgroundColor: '#839496',
  },
}, {
  dark: true,
})
