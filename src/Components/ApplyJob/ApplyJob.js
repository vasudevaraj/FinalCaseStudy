import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { applicationAdd, getSingleJob } from '../../redux/action';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import Header from '../Header/Header';
import applyJob from '../../Images/applyjob.jfif';
import './ApplyJob.css';

const ApplyJob = () => {
    const { id } = useParams()

    const params = useParams()

    const applyjob = { name: '', email: '', phone: '', address: '', experience: '', jobId: ''};
    
    const { job } = useSelector((state) => state.data)

    const { register, reset, formState: {errors}, handleSubmit} = useForm();

    const [isSubmit, setIsSubmit] = useState(false)

    const dispatch = useDispatch()

    const onSubmit = (applyjob) => {
        dispatch(applicationAdd(Object.assign({}, applyjob))); 
        reset();   
        setIsSubmit(true);
        setTimeout(()=> {
            setIsSubmit(false);
        }, 3000)
    }

    useEffect(()=> {
        dispatch(getSingleJob(id))
    }, [])



    return (
        <div>
            <Header />
            <section className='applyjob-section'>
            <div className='applyjob-bg'>
                <h1>Apply job</h1>
                <div className='applyjob-line'>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <p className='applyjob-text'>ARE YOU LOOKING FOR JOB? JUST GO FILL THE APPLICATION</p>
            </div>
            <div className='container'>
                <div className="col-md-9 mx-sm-auto col-lg-10 px-md-4">
                    <h3 className="mb-3 applyjob-heading3">Job Application</h3>
                    <div className='applyjob-form'>
                    <form className="needs-validation" onSubmit={handleSubmit(onSubmit)}>
                    {isSubmit ? (<div className='applyjob-message'>Job Application Submitted Succesfully</div>) : null}
                        <div className="row g-3">
                            <div className="col-12">
                                <input type="text" className="form-control" name='name' placeholder="Name" onChange={e => applyjob.name = e.target.value} {...register("name", {required:true.valueOf, pattern: /^[a-zA-Z]+$/i})}/>
                                <error className='para'>
                                    {errors.name?.type === "required" && "Name is required"}
                                    {errors.name?.type === "pattern" && "Entered name is in wrong format"}
                                </error>
                                
                            </div>
                            <div className="col-12">
                                <input type="email" className="form-control" name='email' placeholder="Email" onChange={e => applyjob.email = e.target.value} {...register("email", {required:true, pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i})}/>
                                <error>
                                    {errors.email?.type === "required" && "Email is required"}
                                    {errors.email?.type === "pattern" && "Entered email is in wrong format"}
                                </error>
                            </div>
                            
                            <div className="col-12">
                                <input type="number" className="form-control" name='phone' placeholder="Phone" onChange={e => applyjob.phone = e.target.value} {...register("phone", {required:true})}/> 
                                <error> 
                                    {errors.phone?.type === "required" && "Phone is required"}
                                    {errors.phone?.type === "minLength" && "Entered number is not less than 10 digits"}
                                    {errors.phone?.type === "maxLength" && "Entered number is not more than 10 digits"}
                                </error>
                            </div>
                            
                            <div className="col-12">
                                <input type="text" className="form-control" name='address' placeholder="Address" onChange={e => applyjob.address = e.target.value} {...register("address", {required:true})}/>
                                <error>{errors.address?.type === "required" && "Address is required"}</error>
                            </div>
                            
                            <div className="col-12">
                                <input type="number" className="form-control" name='experience' placeholder="Experience" onChange={e => applyjob.experience = e.target.value} {...register("experience", {required:true})}/>
                                <error>
                                    {errors.experience?.type === "required" && "Experience is required"}
                                    {errors.experience?.type === "minLength" && "Entered number is not less than 1 digits"}
                                    {errors.experience?.type === "maxLength" && "Entered number is not more than 2 digits"}
                                </error>
                            </div>

                            <div className='col-12'>
                            <input type="number" className="form-control" name='experience' placeholder="" value={params.id} onChange={e => applyjob.jobId = e.target.value} {...register("jobId", {required:true})}/>
                            </div>

                            <div className="col-sm-6">
                                <button className="applyjob-submit" type="submit">Submit</button>
                            </div>
                            <div className="col-sm-6">
                                <Link to="/jobs"><button className="applyjob-back">Back</button></Link>
                            </div>
                        </div>
                    </form>
                    <div>
                        <img src={applyJob} alt='Contact Us' className='applyjob-img'/>
                    </div>
                    </div>
                </div>
            </div>
            </section>
        </div>
        
    );
}

export default ApplyJob;