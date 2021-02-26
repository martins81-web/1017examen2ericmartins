//import { shallowMount } from '@vue/test-utils';
import Contact from '@/views/Contact';
import { mount } from '@vue/test-utils';

describe("Tests unitaires pour l'Accueil", () => {

    // TEST#9 
    test('At-il un element select dans ce composant?', () => {
        const wrapper = mount(Contact)

        // vérifie si l'element select - option exists
        expect(wrapper.find('#selectContactType')).toBeTruthy;
    })

    // TEST#10 
    test('Select vide?', () => {
        const wrapper = mount(Contact)

        // vérifie si l'element select est vide 
        expect(wrapper.find('#selectContactType').isEmpty()).toBeTruthy;
    })

    
})