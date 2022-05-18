module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'next',
    'airbnb',
    'airbnb-typescript',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],
  plugins: ['@typescript-eslint', 'import', 'import-newlines'],
  settings: {
    next: {
      rootDir: ['apps/*/', 'packages/*/'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: ['apps/*/tsconfig.json'],
      },
    },
  },
  rules: {
    // TODO need to do review this rules
    // react
    'react/react-in-jsx-scope': 'off',
    'no-console': 2,
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
      },
    ],
    '@next/next/no-html-link-for-pages': ['error', './src/pages/'],
    'max-len': ['error', 100],
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',
    'react/jsx-max-props-per-line': [1, { maximum: 3 }],
    'import/prefer-default-export': 'off',
    'react/jsx-props-no-spreading': 'off',
    'implicit-arrow-linebreak': 'off',
    'react/jsx-wrap-multilines': 'off',
    'react/jsx-tag-spacing': 'off',
    'react/jsx-indent': 'off',
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: ['state'],
      },
    ],
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'object-property-newline': ['error', { allowAllPropertiesOnSameLine: false }],
    'import-newlines/enforce': ['error', 4],
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: {
          multiline: true,
          minProperties: 2,
        },
        ObjectPattern: {
          multiline: true,
          minProperties: 2,
        },
        ImportDeclaration: {
          multiline: true,
          minProperties: 5,
        },
        ExportDeclaration: 'never',
      },
    ],
    "import/no-extraneous-dependencies": ["error", {"devDependencies": true}],
  },
  ignorePatterns: [
    '**/*.js',
    '**/*.json',
    'node_modules',
    'public',
    'styles',
    '.next',
    'coverage',
    'dist',
    '.turbo',
  ],
}
