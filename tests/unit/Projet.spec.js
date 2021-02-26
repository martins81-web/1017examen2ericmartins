import Projet from '@/views/Projet';
import { shallowMount } from '@vue/test-utils';

describe('Tests unitaires pour le composant Projet', () => {

    // TEST#7  -  Verifie si le premier enfant de la list est visitPortugal
    test('Projet', () => {
        const wrapper = shallowMount(Projet, {
            data() {
                return {
                    projets: [
                        {name:"visitPortugal",link:"https://martins81-web.github.io/AEC_Front_End/Integration1/Projet%20final/"},
                        {name:"chuckNorrisJokes",link:"https://martins81-web.github.io/AEC_Front_End/Programmation2React/chuck-norris/build/"},
                        {name:"quebecerSpotify",link:"https://martins81-web.github.io/AEC_Front_End/Programmation2React/spotify-quebecois/build/"},
                        {name:"clientsContactList",link:"https://martins81-web.github.io/AEC_Front_End/Programmation2React/bottin-clients/build/"},
                        {name:"veterinaryClinic",link:"https://cliniqueveterinairemartins.me/"},
                    ] 
                }
            }

        })
        expect(wrapper.find("li:first-child > a").text()).toBe("Visitez le Portugal" || "Visit Portugal");
         })



         
    // TEST#8  -  Verifie si le mixin de traduction est appellé 2 fois 
    // resultat: failed, il est appellé 6 fois, les noms des 5 projets et le h1 du titre du composant

    it('mixin de traduction appellé 2 fois?', () => {
        const mixin = jest.fn()
  
        shallowMount(Projet, {
            filters: {translateTo: 
            mixin}
        })
        
        expect(mixin).toHaveBeenCalledTimes(2);
    })
        
})