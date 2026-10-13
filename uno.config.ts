import { defineConfig } from 'unocss'
import extractorPug from '@unocss/extractor-pug'
import variantGroup from '@unocss/transformer-variant-group'
import directives from '@unocss/transformer-directives'
export default defineConfig({
  attributify: true,
  components: false,
  extractors: [extractorPug()],
  transformers: [variantGroup(), directives()],
})