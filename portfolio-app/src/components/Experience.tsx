import React from 'react';

const Experience: React.FC = () => {
    const experiences = [
        {
            title: 'Software Engineer',
            company: 'Tech Company',
            duration: 'Jan 2020 - Present',
            description: 'Developing and maintaining web applications using React and Node.js.'
        },
        {
            title: 'Frontend Developer',
            company: 'Another Tech Company',
            duration: 'Jun 2018 - Dec 2019',
            description: 'Worked on building responsive user interfaces and improving user experience.'
        },
        {
            title: 'Intern',
            company: 'Startup',
            duration: 'Jan 2018 - May 2018',
            description: 'Assisted in the development of a mobile application and learned about agile methodologies.'
        }
    ];

    return (
        <div className="experience">
            <h2>Experience</h2>
            <ul>
                {experiences.map((exp, index) => (
                    <li key={index}>
                        <h3>{exp.title} at {exp.company}</h3>
                        <p>{exp.duration}</p>
                        <p>{exp.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Experience;