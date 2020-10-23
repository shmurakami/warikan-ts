module.exports = {
  preset: 'ts-jest',
  verbose: true,
  transform: {
    '^.+\\.jsx?$': [
      'babel-jest',
      {
        presets: [['@babel/preset-env', { targets: { node: true } }]],
        plugins: ['@babel/plugin-transform-modules-commonjs'],
      },
    ],
  },
  setupFiles: [],
  globals: {
    'ts-jest': {
      tsConfig: './tsconfig.test.json',
    },
  },
};
