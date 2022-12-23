import { ADD_APPLICATION, ADD_CONTACTDATA, GET_JOBS, GET_SINGLE_JOB } from "./actionTypes";
import { ADD_JOB } from "./actionTypes";

const initialState = {
    jobs:[],
    job:{},
    jobApplications:[],
    contactDatas:[],
}

const jobsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_JOBS:
            return {
                ...state,
                jobs: action.payload,
            }
        case GET_SINGLE_JOB:
            return {
                ...state,
                job: action.payload
            }
        case ADD_JOB:
            if (!state.jobs) state.jobs = [];
            console.log(action.data);
            return state;
        case ADD_APPLICATION:
            if (!state.jobApplications) state.jobApplications = [];
            console.log(action.data);
            return state;
        case ADD_CONTACTDATA:
            if (!state.contactDatas) state.contactDatas = [];
            console.log(action.data);
            return state;
        default:
            return state
    }
}

export default jobsReducer;