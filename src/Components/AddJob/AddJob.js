import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { jobAdd } from '../../redux/action';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import Header from '../Header/Header';
import './AddJob.css';

const AddJob = () => {
    const job = { title: '', exp: '', salary: '', company: '', location: '' };

    const { register, reset, formState: {errors}, handleSubmit} = useForm();

    const [isSubmit, setIsSubmit] = useState(false)

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const onSubmit = (job) => {
        dispatch(jobAdd(Object.assign({}, job))); 
        navigate('/jobs'); 
        setIsSubmit(true);
        setTimeout(()=> {
            setIsSubmit(false);
        }, 3000)
    }

    return (
        <div className='addjobs-body'>
            <Header />
            <div>
            <div className='container'>
                <div className="col-md-9 mx-sm-auto col-lg-10 px-md-4">
                    <h4 className="mb-3 addjob-title">Create Job</h4>
                    <form className="needs-validation" onSubmit={handleSubmit(onSubmit)}>
                    {isSubmit ? (<div className='addjob-message'>Job Created Succesfully</div>) : null}
                        <div className="row g-3">
                            <div className="col-12">
                                <label htmlFor="firstName" className="form-label ">Title</label>
                                <input type="text" className="form-control" id="name" name='title' placeholder="Title" onChange={e => job.title = e.target.value} {...register("title", {required:true})}/>
                                <error className='para'>{errors.title?.type === "required" && "Title is required"}</error>
                            </div>
                            <div className="col-12">
                                <label htmlFor="lastName" className="form-label">Company</label>
                                <input type="text" className="form-control" id="age" name='company' placeholder="Company" onChange={e => job.company = e.target.value} {...register("company", {required:true})}/>
                                <error>{errors.company?.type === "required" && "Company is required"}</error>
                            </div>
                            
                            <div className="col-12">
                                <label htmlFor="username" className="form-label">Experience</label>
                                <input type="text" className="form-control" id="username" name='exp' placeholder="Experience" onChange={e => job.exp = e.target.value} {...register("exp", {required:true})}/> 
                                <error>{errors.exp?.type === "required" && "Exp is required"}</error>
                            </div>
                            
                            <div className="col-12">
                                <label htmlFor="username" className="form-label">Location</label>
                                <input type="text" className="form-control" id="username" name='location' placeholder="Location" onChange={e => job.location = e.target.value} {...register("location", {required:true})}/>
                                <error>{errors.location?.type === "required" && "Location is required"}</error>
                            </div>
                            
                            <div className="col-12">
                                <label htmlFor="username" className="form-label">Salary</label>
                                <input type="text" className="form-control" id="username" name='salary' placeholder="Salary" onChange={e => job.salary = e.target.value} {...register("salary", {required:true})}/>
                                <error>{errors.salary?.type === "required" && "Salary is required"}</error>
                            </div>
                            
                            <div className="col-sm-6">
                                <button className="addjob-submit" type="submit">Submit</button>
                            </div>
                            <div className="col-sm-6">
                                <Link to="/jobs"><button className="addjob-back">Back</button></Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            </div>
        </div>
    );
}

export default AddJob;