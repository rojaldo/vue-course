   
import Vue from 'vue'
import Vuex from 'vuex';

import { Store } from '@/store/Store';


Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Store,
  }
});