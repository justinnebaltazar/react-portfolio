import projectData from "./data/projects.json";

export const getImageUrl = (path) => {
    return `/assets/${path}`;
};

export const getProjectInfo = (projectTitle) => {
    let currentProject;
    for (let project in projectData) {
        if (project.title === projectTitle ) {
            // return the project and its values
            currentProject = {
                title: project.title, 
                projectType: project.projectType, 
                imageSrc: project.imageSrc, 
                description: project.description, 
                skills: project.skills, 
                demo: project.demo, 
                source: project.source, 
                componentTitle: project.componentTitle
            }
        }
    }

    return currentProject;
};