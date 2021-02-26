//import { shallowMount } from '@vue/test-utils';
import Accueil from '@/views/Accueil';
import { mount } from '@vue/test-utils';

describe("Tests unitaires pour l'Accueil", () => {

    // TEST#1 qui verifie si Accueil est une instance de Vue --- retourne 'passed'
    test('Accueil est une instance de vue?', () => {
        const wrapper = mount(Accueil, {
            propsData: {
               Accueil:{
                   name: "Accueil"
               }
            }
        })

        // vérifie si Accueil est une instance de Vue
        expect(wrapper.isVueInstance()).toBeTruthy();
    })

    // TEST#2 qui verifie si la property 'name' du component Accueil est égale à 'Home' ---  retourne 'failed'
    test('Verification du nom du component Accueil', () => {
        const nom= 'Home';
    
        // vérifie si le component le nom du component Accueil est 'Home' 
        expect(Accueil.name).toEqual(nom);
    })

})