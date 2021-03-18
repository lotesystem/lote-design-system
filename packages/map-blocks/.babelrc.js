const useESModules = !!process.env.MODULE;

module.exports = (api) => {
  api.cache(() => process.env.MODULE);
  return {
    plugins: [
      ['@babel/transform-runtime', { useESModules }],
      '@babel/proposal-object-rest-spread',
      '@babel/proposal-class-properties',
      '@babel/proposal-export-default-from',
      'inline-react-svg',
      'inline-import-data-uri',
      'babel-plugin-styled-components',
      'macros'
    ],
    presets: useESModules ? ['@babel/react'] : ['@babel/env', '@babel/react']
  };
};
