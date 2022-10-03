module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
    'plugin:tailwindcss/recommended',
    'prettier'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', 'react-func', 'tailwindcss'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js'] }],
    'react/prop-types': 'off',
    'no-console': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'react-func/max-lines-per-function': [
      'warn',
      {
        max: 200,
        skipBlankLines: true,
        skipComments: true,
        IIFEs: true
      }
    ],
    'react-func/max-combined-conditions': ['error', 1],
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function'
      }
    ],
    'no-use-before-define': 'error',
    camelcase: 'error',
    curly: 'error',
    'func-names': 'error',
    'max-params': ['warn', 5],
    'no-alert': 'error',
    'no-empty-function': 'error',
    'no-inline-comments': 'warn',
    'no-return-await': 'error',
    'no-return-assign': 'error',
    'no-unused-expressions': ['error', { allowTernary: true }],
    'no-var': 'error',
    'prefer-const': 'error',
    'no-trailing-spaces': 'error',
    semi: ['error', 'never'],
    quotes: ['error', 'single'],
    'eol-last': ['error', 'always'],
    'comma-dangle': ['error', 'never'],
    'max-len': [
      'error',
      {
        code: 150,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreComments: true
      }
    ],
    'max-statements-per-line': ['error', { max: 2 }]
  },
  overrides: [
    {
      files: ['**/*.test.js', 'src/setupTests.js'],
      env: {
        jest: true
      },
      rules: {
        'react-func/max-lines-per-function': 'off'
      }
    },
    {
      files: ['src/constants/urls.js'],
      rules: {
        'max-len': 'off'
      }
    },
    {
      files: ['src/utils/**', 'src/helpers/**'],
      rules: {
        'import/prefer-default-export': 'off'
      }
    }
  ]
}
