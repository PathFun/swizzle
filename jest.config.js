module.exports = {
  preset: 'ts-jest',
  testMatch: ['**/packages/*/__tests__/*.(spec|test).(js|ts)?(x)'],
  collectCoverageFrom: [
    '!**/node_modules/**',
    'packages/form-render-vue/src/**',
    '!packages/form-render-vue/src/widgets/antd/percentSlider.js',
    '!packages/form-render-vue/src/widgets/antd/html.jsx',
    '!packages/form-render-vue/src/widgets/antd/upload.js',
    '!packages/form-render-vue/src/widgets/antd/urlInput.js',
  ],
  moduleNameMapper: {},
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '^.+\\.(ts|js)x?$': 'ts-jest',
  },
  moduleFileExtensions: ['vue', 'js', 'json', 'jsx', 'ts', 'tsx', 'node'],
};
