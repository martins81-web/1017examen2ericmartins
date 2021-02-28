import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        showProfile: false,
        language: 'fr' 
    },
    mutations:{
        toggleConnection(state){
            state.showProfile=!state.showProfile;
        },
        changeLanguage(state, payload ){
            state.language=payload;
        }
    },
    actions:{
        changeLanguage(state, payload ){
            state.commit('changeLanguage',payload);
        }
    },
    modules:{
        
    },
    getters:{
        getCurrentConnection(state){
            return state.showProfile;
        },
        getCurrentLanguage(state){
            return state.language;
        }
    }
})