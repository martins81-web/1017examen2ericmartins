import { library } from '@fortawesome/fontawesome-svg-core';
import { faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Vue from 'vue';
import ToggleButton from 'vue-js-toggle-button';

import App from './App.vue';
import { mixinTranslations } from './mixins/mixinTranslations';
import router from './router';
import store from './store';

Vue.use(ToggleButton)

Vue.config.productionTip = false

Vue.component('font-awesome-icon', FontAwesomeIcon)
library.add(faSignInAlt,faSignOutAlt)

Vue.mixin(mixinTranslations);






new Vue({
  router,store,ToggleButton,
  render: h => h(App),
}).$mount('#app')

