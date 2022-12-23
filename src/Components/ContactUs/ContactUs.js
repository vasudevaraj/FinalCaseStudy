import React, { useState } from 'react'
import Header from '../Header/Header'
import contactImg from '../../Images/contactUs.jpg';
import './ContactUs.css';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { contactAdd } from '../../redux/action';

const ContactUs = () => {
    const contact = { name: '', email: '', phone: '', message: ''};

    const { register, reset, formState: {errors}, handleSubmit} = useForm();

    const [isSubmit, setIsSubmit] = useState(false)

    const dispatch = useDispatch()

    const onSubmit = (contact) => {
        dispatch(contactAdd(Object.assign({}, contact))); 
        reset()
        setIsSubmit(true);
        setTimeout(()=> {
            setIsSubmit(false);
        }, 3000)
    }

  return (
    <div>
        <Header/>
        <section className='contact-section'>
            <div className='contact-bg'>
                <h1>Contact Us</h1>
                <div className='line'>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <p className='text'>GOT A QUESTION? WE'LL GIVE YOU STRAIGHT ANSWER</p>
            </div>
            <div className='contact-body'>
                <div className='contact-info'>
                    <div>
                        <span><i className='fas fa-home'></i></span>
                        <span>ADDRESS</span>
                        <span className='text'>123 Park Avenue C, AK Marg, Delhi, India</span>
                    </div>

                    <div>
                        <span><i className='fas fa-mobile-alt'></i></span>
                        <span>PHONES</span>
                        <span className='text'>(91) 987 654 3210</span>
                        <span className='text'>(91) 987 654 3211</span>
                    </div>

                    <div>
                        <span><i className='fas fa-envelope-open'></i></span>
                        <span>E-MAIL</span>
                        <span className='text'>contact@topjobs.com</span>
                    </div>
                </div>
            </div>

            
            <div className='contact-form'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h1 className='contact-heading'>Get In Touch</h1>
                    {isSubmit ? (<div className='success sign-in-message'>Submitted Succesfully</div>) : null}
                    <input type="text" className='form-control' placeholder='Name' {...register("name",{ required:true, pattern: /^[a-zA-Z]+$/i })}/>
                    <error>
                        {errors.name?.type === "required" && "Name is required"}
                        {errors.name?.type === "pattern" && "Entered name is in wrong format"}
                    </error>
                    <input type="email`" className='form-control' placeholder='Email' {...register("email",{ required:true, pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i })}/>
                    <error>
                        {errors.email?.type === "required" && "Email is required"}
                        {errors.email?.type === "pattern" && "Entered email is in wrong format"}
                    </error>
                    <input type="number" className='form-control' placeholder='Phone' {...register("phone",{ required:true, minLength:10, maxLength:10 })}/>
                    <error>
                        {errors.phone?.type === "required" && "Phone is required"}
                        {errors.phone?.type === "minLength" && "Entered number is not less than 10 digits"}
                        {errors.phone?.type === "maxLength" && "Entered number is not more than 10 digits"}
                    </error>
                    <textarea rows='5' type="text" className='form-control' placeholder='Message' {...register("message",{ required:true, minLength:10, maxLength:150 })}/>
                    <error>
                        {errors.message?.type === "required" && "Message is required"}
                        {errors.message?.type === "minLength" && "Entered number is not less than 10 digits"}
                        {errors.message?.type === "maxLength" && "Entered number is not more than 150 digits"}
                    </error>
                    <div className='submit-btn'>
                        <input type="submit" className='send-btn' value='Submit'/>
                    </div>
                    
                </form>

                <div>
                    <img src={contactImg} alt='Contact Us'/>
                </div>
            </div>
        </section>
    </div>
  )
}

export default ContactUs