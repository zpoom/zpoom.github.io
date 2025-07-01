import React from 'react';

const Projects: React.FC = () => {
    const projectList = [
        {
            title: 'Project One',
            description: 'Description of project one.',
            link: 'https://github.com/yourusername/project-one'
        },
        {
            title: 'Project Two',
            description: 'Description of project two.',
            link: 'https://github.com/yourusername/project-two'
        },
        {
            title: 'Project Three',
            description: 'Description of project three.',
            link: 'https://github.com/yourusername/project-three'
        }
    ];

    return (
        <div className="projects">
            <h2>Projects</h2>
            <ul>
                {projectList.map((project, index) => (
                    <li key={index}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Projects;