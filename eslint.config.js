import antfu from '@antfu/eslint-config'

export default antfu(
  {
    formatters: true,
    ignores: ['./pnpm-lock.yaml'],
  },
)
