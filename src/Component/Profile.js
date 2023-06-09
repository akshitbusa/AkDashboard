import React from 'react'
import { Link } from 'react-router-dom'
import Prof from '../Photos/WhatsApp Image 2023-04-26 at 10.31.57 PM.jpeg'
import Aside from './Aside'
import Header from './Header'

const Profile = () => {
    return (
        <>
            <Header />
            <Aside />
            <main id="main" className="main">

                <div className="pagetitle">
                    <h1>Profile</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item">Users</li>
                            <li className="breadcrumb-item active">Profile</li>
                        </ol>
                    </nav>
                </div>
                <section className="section profile">
                    <div className="row">
                        <div className="col-xl-4">

                            <div className="card">
                                <div className="card-body profile-card pt-4 d-flex flex-column align-items-center">

                                    <img src={Prof} alt="Profile" />
                                    <h2>Akshit Busa</h2>
                                    <h3>Web devlopment</h3>
                                    <div className="social-links mt-2">
                                        <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
                                        <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
                                        <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
                                        <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="col-xl-8">

                            <div className="card">
                                <div className="card-body pt-3">
                                    <ul className="nav nav-tabs nav-tabs-bordered">

                                        <li className="nav-item">
                                            <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#profile-overview">Overview</button>
                                        </li>

                                       

                                       

                                       

                                    </ul>
                                    <div className="tab-content pt-2">

                                        <div className="tab-pane fade show active profile-overview" id="profile-overview">
                                           
                                           

                                            <h5 className="card-title">Profile Details</h5>

                                            <div className="row">
                                                <div className="col-lg-3 col-md-4 label ">Full Name</div>
                                                <div className="col-lg-9 col-md-8">Akshit Busa</div>
                                            </div>

                                            <div className="row">
                                                <div className="col-lg-3 col-md-4 label">Company</div>
                                                <div className="col-lg-9 col-md-8">devloper Infotech</div>
                                            </div>

                                            <div className="row">
                                                <div className="col-lg-3 col-md-4 label">Job</div>
                                                <div className="col-lg-9 col-md-8">Web devlopment</div>
                                            </div>

                                            <div className="row">
                                                <div className="col-lg-3 col-md-4 label">Country</div>
                                                <div className="col-lg-9 col-md-8">India</div>
                                            </div>


                                            <div className="row">
                                                <div className="col-lg-3 col-md-4 label">Phone</div>
                                                <div className="col-lg-9 col-md-8">(+91) 6352580806 </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-lg-3 col-md-4 label">Email</div>
                                                <div className="col-lg-9 col-md-8">akshitbusa2002@gmail.com</div>
                                            </div>

                                        </div>

                                      

                                      

                                     

                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </main>
            <footer id="footer" className="footer">
                <div className="copyright">
                    &copy; Copyright <strong><span>AkAdmin</span></strong>. All Rights Reserved
                </div>

            </footer>
        </>
    )
}

export default Profile