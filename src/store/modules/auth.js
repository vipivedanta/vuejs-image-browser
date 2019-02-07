import api from '../../api/imgur';
import qs from 'qs';
import VueRouter from '../../routes';

const state = {
    token : null
}

const getters = {
    isLoggedIn : state => !!state.token
}

const actions = {
    login : () => {
        api.login();
    },
    finalizeLogin : ({commit},hash) => {
        const query = qs.parse(hash.replace('#',''));
        commit('setToken',query.access_token);
        VueRouter.push('/');
    },
    logout : ({commit}) => {
        commit('setToken',null);
        VueRouter.push('/thank-you');
    }
}

const mutations = {
    setToken : (state,token) => {
        state.token = token
    }
}

export default{
    state,
    getters,
    actions,
    mutations
};