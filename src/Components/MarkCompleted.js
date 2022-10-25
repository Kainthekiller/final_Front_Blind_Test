import {useState} from "react";
import {Button} from "@mui/material";


function MarkCompleted(props)

{
    //Use State
    const [selectedId, setSelectedId] = useState("")

    //Custom Method
    function onSubmit(e) {
        e.preventDefault()
        const data = {
            Completed: true
        }
        props.markItemCompleted(selectedId, data)
        setSelectedId("")
    }


    //Main

    return(
        <>
        <div className={"allItem"}>
            <form onSubmit={(e) => onSubmit(e)}>
            <h2>Mark Item Complete</h2>
                <input
                    placeholder={"Select ID"}
                    value={selectedId}
                    onChange={(e) => setSelectedId(e.target.value)}
                />
                <br/>
                <br/>
            <Button type={"submit"} variant={"contained"}>Submit</Button>

            </form>
        </div>
        </>
    )
}

export default MarkCompleted