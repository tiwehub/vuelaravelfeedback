import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
    state() {
        return {
            feedbacks: [],
        };
    },
    mutations: {
        addFeedback(state, feedback) {
            state.feedbacks.unshift(feedback);
        },
    },
    actions: {
        async submitFeedback({ commit }, feedback) {
            await axios.post("/api/feedback", feedback);
            commit("addFeedback", feedback);
        },
    },
});

export default store;
