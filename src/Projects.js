import { PulseLoader } from "react-spinners";
import { useState } from "react";
import "./Projects.css"
import GitHubIcon from "./svgComponents/GitHub";
import PlayIcon from "./svgComponents/Play";

async function loadProjects(setProjectData){
    let data = (await (await fetch("/projects.json")).json()).projects
    await new Promise(resolve => setTimeout(resolve, 2000)) //2 second delay to showcase loading logic

    let output = []
    for (const project of data){
        let links = []
        if (project.repo_url){
            links.push(
                <a href={project.repo_url} className="btn btn-primary m-1">
                    <GitHubIcon width = {"2rem"}/>
                </a>
            )
        }

        if (project.run_url){
            links.push(
                <a href={project.run_url} className="btn btn-primary m-1">
                    <PlayIcon width = {"2rem"}/>
                </a>
            )
        }

        output.push(
            <div className="project d-flex m-3 p-3">
                <div className="flex-column flex-grow-1">
                    <h3>{project.name}</h3>
                    <p>{project.desc}</p>
                </div>
                <div className="d-flex flex-column flex-shrink-1">
                    {links}
                </div>
            </div>
        )
    }

    setProjectData(output)
}

function Projects(){
    let [projectData, setProjectData] = useState(undefined)
    loadProjects(setProjectData)

    if(projectData === undefined){
        //Loading
        return  <PulseLoader
                color={'white'}
                loading={true}
                cssOverride={{}}
                size={"1rem"}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
    }else{
        return projectData
    }
}

export default Projects