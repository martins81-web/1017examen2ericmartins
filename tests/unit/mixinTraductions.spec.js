import mixinTranslations from '@/mixins/mixinTranslations';
import { mount } from '@vue/test-utils';

describe('mixin traductions', () => {
  // TEST#11  
    test("set un titre avec la property 'title' d'un composant", () => {
      const Component = {
        render() {},
        title: 'translate',
        mixins: [mixinTranslations]
      }
      mount(Component)
      expect(document.title).toBe('translate')
    })
  // TEST#12  
    test("ça ne set pas le document.title si la property title n'existe pas", () => {
      document.title = 'un titre'
      const Component = {
        render() {},
        mixins: [mixinTranslations]
      }
      mount(Component)
      expect(document.title).toBe('un titre')
    })
  })