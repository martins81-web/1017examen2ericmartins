import Header from '@/components/Header';
import { shallowMount } from '@vue/test-utils';

describe('Tests unitaires pour le Header', () => {

    // TEST#3  -  Verifie si header est rendu et si le menu exists
    test('Header rendu?', () => {
        const wrapper = shallowMount(Header, {
            data() {
                return {
                    menu: [
                        {id:1, name: 'home'},
                        {id:2, name: 'projects'},
                        {id:3, name: 'contact'},
                        {id:4, name: 'about'}
                  ]
                }
            }

        })
        expect(wrapper.exists()).toBeTruthy;

      })

    // TEST#4  -  Verifie si Header contiens des selecteurs 'router-link'
    test('Header', () => {
        const wrapper = shallowMount(Header)
        // test 'failed' parce que le component Header a des selecteur 'router-link' et on attends si c'est faux
        expect(wrapper.contains('router-link')).toBe(false);
      })
    


})