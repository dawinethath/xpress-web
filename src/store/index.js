import Vue from 'vue';
import Vuex from 'vuex';
// import createLogger from '../../../src/plugins/logger';
import customers from './modules/customers';
import customerTypes from './modules/customerTypes';

Vue.use(Vuex);

// const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    modules: {
        customers,
        customerTypes
    },
    // strict: debug,
    // plugins: debug ? [createLogger()] : []
})