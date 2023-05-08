import React from 'react'
import demouser from "../../../public/images/avatar.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const Team = () => {
    const team = [
        {
            name: 'Dave',
            role: 'Full Stack Developer',
            image: demouser,
            linkedin: "#"
        },
        {
            name: 'Rahul',
            role: 'Prouct Manager',
            image: demouser,
            linkedin: "#"
        },
        {
            name: 'Rahul',
            role: 'Front-end dveloper',
            image: demouser,
            linkedin: "#"
        },
        {
            name: 'Rahul',
            role: 'Full Stack Developer',
            image: demouser,
            linkedin: "#"
        },
        {
            name: 'Rahul',
            role: 'Full Stack Developer',
            image: demouser,
            linkedin: "#"
        }
    ]
  return (
    <div >
        <h1 className='text-center contact_taital team-wraper'>Our Team</h1>
        <div className="container">
            <div className="row ">
                {team.map((item) => (
                    <div className="col-md-3">
                        <div className="card mb-4">
                            <img src={item.image}   alt="team" />
                            <div className="card-body">
                                <h5 className="card-title fw-bold">
                                    <b>{item.name}</b></h5>
                                <p className="card-text">{item.role}</p>
                                <a href={item.linkedin} className="btn btn-primary">
                                    <FontAwesomeIcon icon={faLinkedinIn}/></a>
                                </div>
                                </div>
                                </div>
                ))}
                </div>
                </div>
    </div>
  )
}

export default Team