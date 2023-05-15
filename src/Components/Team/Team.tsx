import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import baran from "../../../public/images/BARAN ÇİÇEK.jpeg"
import hope from "../../../public/images/HOPE IYAMU.jpg"
import abdullah from "../../../public/images/ABDULLAH ZAMAN BABAR.png"

const Team = () => {
    const team = [
        {
            name: 'BARAN ÇİÇEK',
            role: 'FOUNDER',
            image: baran,
            linkedin: "https://www.linkedin.com/in/baran-%C3%A7i%C3%A7ek-a6985023a/"
        },
        {
            name: 'HOPE IYAMU',
            role: 'FULL-STACK DEVELOPER',
            image: hope,
            linkedin: "https://www.linkedin.com/in/iyamuhope/"
        },
        {
            name: 'ABDULLAH ZAMAN BABAR',
            role: 'FULL-STACK DEVELOPER',
            image: abdullah,
            linkedin: "https://www.linkedin.com/in/abdullah-zaman-babar-7646ba78/"
        }
    ]
    return (
        <div>
            <h1 className='text-center contact_taital team-wraper mb-5' id="team">Our Team</h1>
            <p className="text-center model-desc">Rhimo 3D works to bring innovations to the health sector in the field of laser scanning and 3D modeling, to develop different imaging systems, and most importantly to offer all these services at a much more affordable price than existing technologies and to provide software support to hospitals. and clinics. The team consists of full stack developers.</p>

            <div className="container">
                <div className="row team-row">
                    {team.map((item, index) => (
                        <div key={index} className="col-lg-4 col-md-6 col-sm-12 team-col">
                            <div className="card team-card">
                                <img src={item.image} className="team-photo card-img-top" alt="team" />
                                <div className="card-body team-body">
                                    <h5 className="card-title fw-bold name">
                                        <b>{item.name}</b>
                                    </h5>
                                    <p className="card-text role">{item.role}</p>
                                    <a href={item.linkedin} className="btn btn-primary linkedin" target="_blank">
                                        <FontAwesomeIcon icon={faLinkedinIn} /> LinkedIn
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Team;
