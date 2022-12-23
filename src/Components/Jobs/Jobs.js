import React, { useEffect } from 'react';
import Header from '../Header/Header';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Row from 'react-bootstrap/Row';
import Button from "react-bootstrap/Button";
import { useSelector, useDispatch } from 'react-redux';
import { loadJobs } from '../../redux/action';
import { Link, useNavigate, useParams } from 'react-router-dom';
import './Jobs.css';

const Jobs = () => {
    let dispatch = useDispatch()

    let navigate = useNavigate()

    const {jobs} = useSelector(state => state.data)


    useEffect(() => {
        dispatch(loadJobs())
    }, [])

    return (
        <div>
            <Header />
            <div className='jobs-body'>
            <div className='container pt-5'>
                <Link to="/addjob"><Button variant='success'>+Create Job</Button></Link>
            </div>

            <div className="container p-5">
                {/* <h1 className='jobs-heading'>List of Jobs</h1> */}
                <Row className="g-4">
                    {jobs.map(job => 
                        <CardGroup key={job.id}>
                            <Card>
                                <Card.Body className='data'>
                                    <Card.Title className='job-title'>{job.title}</Card.Title>
                                    <Card.Text className='job-company'>{job.company}</Card.Text>
                                    <Card.Text className='job-details'><span className='job-exp'><i className='fa-solid fa-suitcase exp-icon'></i>{job.exp}yrs</span> <span className='job-salary'><i className='fa-solid fa-indian-rupee-sign salary-icon'></i>{job.salary}</span> <span className='job-location'><i className='fa-solid fa-location-dot location-icon'></i>{job.location}</span></Card.Text>
                                    {/* <button className='job-applylink'><Link to='/applyjob' className='applyLink'>Apply</Link></button> */}
                                    <button className='job-applylink' onClick={() => navigate(`/applyjob/${job.id}`)}>Apply</button>
                                </Card.Body>
                            </Card>
                        </CardGroup>
                    )}
                    
                </Row>
            </div>
            </div>
        </div>
    )
}

export default Jobs