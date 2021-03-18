module.exports = {
  processors: ['stylelint-processor-styled-components'],
  extends: [
    'stylelint-config-recommended',
    'stylelint-config-styled-components'
  ],
  rules: {
    'property-no-vendor-prefix': null,
    'no-descending-specificity': null,
    'selector-type-no-unknown': null,
    'no-duplicate-selectors': null
  }
};
