import React from 'react'
import school from '../../assets/school.png'
import college from '../../assets/college.png'
import scaler from '../../assets/scaler.png'
import tsf from '../../assets/tsf.jfif'
import './Experience.scss'
export const Experience = () => {
    const data = [
        {
            img: scaler,
            course: 'ReactJS Technical Content',
            institution: 'SCALER',
        },
        {
            img: tsf,
            course: 'Front-End Developer',
            institution: 'Tanmay Sachin Foundation',
        },
        {
            img: college,
            course: 'Front-End Developer',
            institution: 'College Newsletter Website',
        },
    ]
    return (
        <div className='experience'>
            <div id="scrollTOExperience"></div>
            <h1>Experience</h1>
            <div className="card-container">
                {
                    data.map((item, index) => {
                        return <ExperienceCard key={index} data={item} />
                    })
                }
            </div>
        </div>
    )
}
export const Education = () => {
    const data = [
        {
            img: school,
            course: '10th Board',
            institution: 'HANS RAJ SMARAK SR. SEC. SCHOOL',
            percentage: '89.9'
        },
        {
            img: school,
            course: '12th Board',
            institution: 'HANS RAJ SMARAK SR. SEC. SCHOOL',
            percentage: '84.5'
        },
        {
            img: college,
            course: 'B.Tech - Information Technology',
            institution: 'MAHARAJA SURAJMAL INSTITUTE OF TECHNOLOGY',
            percentage: '84.5'
        },
    ]
    return (
        <div className='experience'>
            <div id="scrollToEducation"></div>
            <h1>Education</h1>

            <div className="card-container">
                {
                    data.map((item, index) => {
                        return <EducationCard key={index} data={item} />
                    })
                }
            </div>
        </div>
    )
}
export const EducationCard = ({ data }) => {
    return (
        <div className="experience-card">

            <img src={data.img} alt="" />
            <h2>{data.course}</h2>
            <h3>{data.institution}</h3>
            <p><strong>PERCENTAGE</strong> - {data.percentage}%</p>

        </div>
    )
}
export const ExperienceCard = ({ data }) => {
    return (
        <div className="experience-card">

            <img src={data.img} alt="" />
            <h2>{data.course}</h2>
            <h3>{data.institution}</h3>
        </div>
    )
}



