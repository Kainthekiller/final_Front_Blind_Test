import {Button} from "@mui/material";
import {useState} from "react";


function DeleteItem(props)

{
    //Use State
const [selectedId, setSelectedId] = useState("")
    //Custom Method
function onSubmit(e)
{
    e.preventDefault()
    props.deleteItem(selectedId)
    setSelectedId("")
}
    //Main

    return (
        <>
        <div className={"allItem"}>
            <form onSubmit={(e) => onSubmit(e)}>
            <h2>Delete A Item</h2>
            <input
            placeholder={"Type In an ID..."}
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

export default DeleteItem