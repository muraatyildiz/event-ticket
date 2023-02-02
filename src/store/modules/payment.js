import axios from 'axios'
import Vue from 'vue'
import Swal from 'sweetalert2/dist/sweetalert2';

const state = {
    responsePayment: {},
}

const getters = {
    getResponsePayment(state) {
        return state.responsePayment;
    },
}

const mutations = {
    setResponsePayment(state, event) {
        state.responsePayment = event;
    },
}

const actions = {
    async postPayment({ commit, dispatch, state },payment) {
        axios
            .post('https://d706d748-0586-4c2b-9d30-288f5d3b0630.mock.pstmn.io/payment',payment)
            .then((response) => {
                commit("setResponsePayment", response.data);
                Swal.fire({
                    icon: response.data.status,
                    title: "",
                    text: response.data.message,
                    confirmButtonText: "Tamam",
                    showConfirmButton: false,
                  });               
                return response.data;
            })
    },
}

export default {
    state,
    getters,
    mutations,
    actions
}