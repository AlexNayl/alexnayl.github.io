import { PulseLoader } from "react-spinners";
import { useState, CSSProperties } from "react";

function Projects(){
    let [projectData, setProjectData] = useState(undefined)

    if(projectData == undefined){
        //Loading
        return  <PulseLoader
                color={'white'}
                loading={true}
                cssOverride={{}}
                size={"1rem"}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
    }

    return <p>TODO:</p>
}

export default Projects