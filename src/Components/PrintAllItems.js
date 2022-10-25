import {Button} from "@mui/material";


function PrintAllItems(props)
{
    //Use State

    //Use Effect

    //Custom Method



    //Main
    return(
        <>
        <Button onClick={props.getAllItem} variant="contained">Print All Items</Button>
            {props.allItems.map((data) => {
                const{id, Content, Completed} = data
                return  (
                    <div key={id} className={"allItem"}>
                        <p>ID: {id}</p>
                        <p>Todo Item: {Content}</p>
                        <p>Completed Task: {Completed.toString()}</p>
                        <Button onClick={(e) => props.deleteItem(id)}>Delete Item</Button>
                        <br/>
                        <Button onClick={(e) => props.markItemCompleted(id, {Completed: true})}>Mark Completed</Button>
                        <br/>
                    </div>
                )

            })}
        </>
    )
}

export default PrintAllItems