import axios from 'axios'
import Vue from 'vue'

const state = {
    events: [],
    selectedEvent: {},
    seats: [],  
    userSelections:{}  
}

const getters = {
    getEvents(state) {
        return state.events;
    },
    getSelectedEvent(state) {
        return state.selectedEvent
    },
    getSeats(state) {
        return state.seats
    },
    getUserSelections(state){
        return state.userSelections
    }
}

const mutations = {
    setEventList(state, events) {
        state.events = events;
    },
    setSelectedEvent(state, event) {
        state.selectedEvent = event;
    },
    setSeats(state, event) {
        state.seats = event;
    },
    setUserSelections(state,event){
       state.userSelections = event;
    }
}

const actions = {
    async getEvents({ commit, dispatch, state }) {
        axios
            .get('https://d706d748-0586-4c2b-9d30-288f5d3b0630.mock.pstmn.io/events')
            .then((response) => {
                commit("setEventList", response.data.data,);
            })
    },
    async getEventDetail({ commit, dispatch, state }, id) {
        axios
            .get("https://d706d748-0586-4c2b-9d30-288f5d3b0630.mock.pstmn.io/events/" + id)
            .then((response) => {
                commit("setSelectedEvent", response.data.data,);
            })

    },
    async getSeatPlans({ commit, dispatch, state }, data) {
        axios
            .get("https://d706d748-0586-4c2b-9d30-288f5d3b0630.mock.pstmn.io/seat-plans/" + data.eventId + "/" + data.eventCategoryId)
            .then((response) => {
                commit("setSeats", response.data.data,);
            })

    },
}

export default {
    state,
    getters,
    mutations,
    actions
}