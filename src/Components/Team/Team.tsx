import React from 'react'
import demouser from "../../../public/images/avatar.png"

const Team = () => {
    const team = [
        {
            name: 'Dave',
            role: 'Full Stack Developer',
            image: demouser
        },
        {
            name: 'Rahul',
            role: 'Prouct Manager',
            image: demouser
        },
        {
            name: 'Rahul',
            role: 'Front-end dveloper',
            image: demouser
        },
        {
            name: 'Rahul',
            role: 'Full Stack Developer',
            image: demouser
        },
        {
            name: 'Rahul',
            role: 'Full Stack Developer',
            image: demouser
        }
    ]
  return (
    <div>
        <h1 className='text-center contact_taital'>Our Team</h1>
        <div className="container">
            <div className="row">
                {team.map((item, index) => (
                    <div className="col-md-3">
                        <div className="card mb-4">
                            <img src={item.image}   alt="team" />
                            <div className="card-body">
                                <h5 className="card-title fw-bold">
                                    <b>{item.name}</b></h5>
                                <p className="card-text">{item.role}</p>
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