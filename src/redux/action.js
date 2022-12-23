import { GET_JOBS, GET_SINGLE_JOB } from "./actionTypes";
import axios from "axios";

const getJobs = (jobs) => ({
    type: GET_JOBS,
    payload: jobs,
})

export const loadJobs = () => {
    return function(dispatch) {
        axios.get('http://localhost:4000/jobs').then((res)=>{
            console.log("res", res);
            dispatch(getJobs(res.data))
        }).catch(error => console.log(error))
    }
}

const getJob = () => ({
    type: GET_SINGLE_JOB,
})

export const getSingleJob = (id) => {
    return function(dispatch) {
        axios.get(`http://localhost:4000/jobs/${id}`).then((res) => {
            console.log("res",res)
            dispatch(getJob(res.data))
        }).catch(error => console.log(error))
    }
}

export const jobAdd = (job) => {
    if (job) {
        return async function(dispatch, getState) {
            await axios.post("http://localhost:4000/jobs", job)
            .then(data => {
                console.log(data);
            });
        };
    }
}

export const applicationAdd = (jobApplication) => {
    if (jobApplication) {
        return async function(dispatch, getState) {
            await axios.post("http://localhost:4000/jobApplications", jobApplication)
            .then(data => {
                console.log(data);
            });
        };
    }
}

export const contactAdd = (contactData) => {
    if (contactData) {
        return async function(dispatch, getState) {
            await axios.post("http://localhost:4000/contactDatas", contactData)
            .then(data => {
                console.log(data);
            });
        };
    }
}