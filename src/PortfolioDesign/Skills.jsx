// import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Skills = () => {

    const skills = [
        { name: 'HTML5', percentage: 80 },
        { name: 'CSS', percentage: 80 },
        { name: 'Tailwind CSS', percentage: 70 },
        { name: 'JavaScript', percentage: 60 },
        { name: 'React.js', percentage: 60 },
        { name: 'SQL', percentage: 70 },
        { name: 'Google Cloud Platform (GCP)', percentage: 40 },
        { name: 'Jira', percentage: 50 },
    ];

    return (
        <>
            <div >

                <div id='skills'>
                    <h1 className="flex justify-center md:text-4xl text-2xl font-bold mt-10">Skills</h1>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">

                        {skills.map((skill, index) => {
                            return (
                                <div className="w-2/3 md:w-[200px] md:h-[200px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300 mx-auto" key={index}>
                                    <h2 className="font-bold text-lg mb-2">{skill.name}</h2>
                                    
                                    <div className=' w-20 h-20 mx-auto md:mt-7 mt-8' >
                                        <CircularProgressbar className='font-semibold'
                                            value={skill.percentage}
                                            text={`${skill.percentage}%`}
                                            styles={buildStyles({
                                                pathTransitionDuration: 0.5,
                                                pathColor: `#008e00`,
                                                textColor: '#3e98c7',
                                                trailColor: '#d6d6d6',
                                                backgroundColor: '#3e98c7'
                                            })}

                                        />
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                </div>
            </div>
        </>
    );
};


export default Skills