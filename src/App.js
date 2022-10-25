
import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";
import PrintAllItems from "./Components/PrintAllItems";
import TodoCreator from "./Components/TodoCreator";
import MarkCompleted from "./Components/MarkCompleted";
import DeleteItem from "./Components/DeleteItem";



function App() {
  const url = "http://localhost:8080/api/items"
  //Use State
  const [allItems, setAllItems] = useState([])


  //Use Effect
useEffect(() => {
}, [])



  //Custom Method
  //GET
  async function getAllItem()
  {
    const response = await
    axios.get(url)
    setAllItems(response.data)
  }
  //POST
async function postNewItem(data)
{
  await axios.post(url, data)
  await getAllItem()
}
  //PATCH
async function markItemCompleted(id, data)
{
    await axios.patch(url + "/" + id.toString(), data)
    await getAllItem()
}

  //DELETE
async function deleteItem(id)
{
    //Try Catch
    try{
        await axios.delete(url + "/" + id.toString())
        await getAllItem()
    }catch (e){
        console.log(e);
        //Snack
    }


}

  return (
      <div className="App">
          <h1>Todo Application</h1>
          <PrintAllItems getAllItem={getAllItem} allItems={allItems} deleteItem={deleteItem}
                         markItemCompleted={markItemCompleted}/> {/*GET*/}
          <TodoCreator postNewItem={postNewItem}/> {/*POST*/}
          <MarkCompleted markItemCompleted={markItemCompleted}/>
          <DeleteItem deleteItem={deleteItem}/>
      </div>
  );
}

export default App;
