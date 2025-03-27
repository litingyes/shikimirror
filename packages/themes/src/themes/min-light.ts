import { EditorView } from '@codemirror/view'

export const minLightTheme = EditorView.theme({
  '&': {
    color: '#212121',
    backgroundColor: '#212121',
  },
}, {
  dark: false,
})
