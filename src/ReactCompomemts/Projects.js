import { PulseLoader } from "react-spinners";
import { useState } from "react";
import '../App.css'
import "./Projects.css"
import GitHubIcon from "../svgComponents/GitHub";
import PlayIcon from "../svgComponents/Play";

async function loadProjects(setProjectData){
    let data = (await (await fetch("/projects.json")).json()).projects
    await new Promise(resolve => setTimeout(resolve, 1000))

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
        return [projectData,
            <footer>
                <h2>Don't see what your looking for?</h2>
                <p>If a specific technology your looking for isn't here, that doesn't mean I cant do it! Some of my capabilities aren't yet demonstrated through my projects, and any skills I lack I'm eager to learn!
                <br/><br/>
                Take a look at my Resume, and send me an email if you have any specific requirement questions.
                </p>
            </footer>
        ]
    }
}

export default Projects