import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import { Link } from "react-router-dom";
import image1 from '../../Images/carousel_1.jpg';
import image2 from '../../Images/carousel_2.jpg';
import image3 from '../../Images/carousel_3.jpg';
import Header from "../Header/Header";
import './Home.css';


const Home = () => {
    return (
        <div className="home-body">
            <Header/>
            <div >
            <div>
                <Carousel className="p-5 ">
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={image1}
                            alt="First slide"
                            height="500"
                            width="1340"
                        />
                        <Carousel.Caption style={{ color: "black" }}>
                            <h3>Free Learning Platform</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={image2}
                            alt="Second slide"
                            height="500"
                            width="1340"
                        />

                        <Carousel.Caption style={{ color: "black" }}>
                            <h3>Learning that gets you</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={image3}
                            alt="Third slide"
                            height="500"
                            width="1600"
                        />

                        <Carousel.Caption style={{ color: "black" }}>
                            <h3>Unlock the power of your people</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="container">
                <div className="row btns">
                    <div className="col-lg-4 col-md-4 col-sm-1">
                        <button className="btnclass"><Link className="link-home" to="/jobs">Find Jobs</Link></button>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-1">
                        <button className="btnclass"><Link className="link-home" to="/contactUs">Contact Us</Link></button>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-1">
                        <button className="btnclass bt"><Link className="link-home" to="/addjob">Create Job</Link></button>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Home;