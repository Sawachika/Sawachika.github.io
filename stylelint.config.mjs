export default {
  extends: ['stylelint-config-idiomatic-order', 'stylelint-stylus/standard'],
  rules: {
    'selector-class-pattern': null,
    'selector-pseudo-element-colon-notation': 'single',
    'stylus/selector-type-no-unknown': [
      true,
      {
        ignoreTypes: ['swiper-slide'],
      },
    ],
  },
}
