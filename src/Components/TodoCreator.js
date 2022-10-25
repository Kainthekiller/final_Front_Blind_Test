import {useState} from "react";
import {Button} from "@mui/material";


function TodoCreator(props)
{
    //Use State
const [userInput, setUserInput] = useState("")
    //Use Effect

    //Custom Method
function onSubmit(e)
{
    e.preventDefault()
    const data  = {
        Content: userInput,
        Completed: false
    }
    props.postNewItem(data)
    setUserInput("")
}



    //Main

    return (
        <>
            <div className={"allItem"}>
        <h2>Todo Creator</h2>
            <form onSubmit={(e) => onSubmit(e)}>
                <h2>Please Input New Todo Item</h2>
                <input
                placeholder={"Type Content Here"}
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                />
                <br/>
                <br/>
                <Button type={"submit"} variant={"contained"}> Submit New Item</Button>
            </form>
            </div>
        </>
    )
}

export default TodoCreator