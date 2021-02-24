import { shallowMount } from '@vue/test-utils';

import Foo from '../../src/components/Foo';

// eslint-disable-next-line no-undef
describe('Foo', () => {
    // eslint-disable-next-line no-undef
    it('restitue un message et répond correctement à la saisie de l\'utilisateur', () => {
        const wrapper = shallowMount(Foo, {
            data() {
                return {
                    message: 'Bienvenue sur le tutoriel Vue.js',
                    username: ''
                }
            }
        })

        // vérifie que `message` est restitué
        expect(wrapper.find('.message').text()).toEqual('Hello World')

        // vérifie que `error` est restituée
        expect(wrapper.find('.error').exists()).toBeTruthy()

        // met à jour `username` et vérifie que `error` n'est plus restituée
        wrapper.setData({ username: '' })
        expect(wrapper.find('.error').exists()).toBeFalsy()
    })
})