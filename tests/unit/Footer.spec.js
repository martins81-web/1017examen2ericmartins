import Footer from '@/components/Footer';
import { shallowMount } from '@vue/test-utils';

describe('Tests unitaires pour le Footer', () => {

    // TEST#5  -  Verifie si la 'tag' div du footer est bien rendue 
    it('Tag div du Footer rendu?', () => {
        const wrapper = shallowMount(Footer)
        const date= new Date().getFullYear();
        expect(wrapper.find('div').text()).toEqual("Copyright © " + date + " - Eric Martins");
      })


    // TEST#6  -  Verifie si la directive de bas de page est appellé  
    it('directive appellé?', () => {
      const bind = jest.fn()

      shallowMount(Footer, {
        directives: {
            mydirective :{
                bind
            }
        }
      })
    
      expect(bind).toHaveBeenCalled();
    })
})