import React, { useState } from "react";
import Bioinfo from "./Components/Bioinfo"
import MovieCounter from "./Components/MovieCounter";
import ShowList from "./Components/ShowList";
import "./App.css"
import ProductShow from "./Components/ProductShow";
import ProductApi from "./Components/ProductApi";
import TestComp from "./Components/TestComp";
import FormOne from "./Components/FormOne";
import GroceryList from "./GroceryList";
import Child from "./Components/Child";

function App() {

const[data,setdata] = useState("Arun")




  return (
    <div>

        {/* <button onClick={handlelogout}>Logout</button> */}
{/* <ProductApi /> */}
      {/* {islog ? <ProductApi /> : <h1>NO comp</h1>} */}

      {/* <Bioinfo />  */}

      {/* <MovieCounter/> */}

      {/* <ShowList/> */}

      {/* <Bioinfo name="arun" />

      <Bioinfo name="luffy"  /> */}

      {/* {data.map((na)=>(
        <div>
          <Bioinfo name={na} />
          </div>
      ))} */}

      {/* <ProductShow/> */}

      {/* <ProductApi/> */}

      {/* <FormOne/> */}
    



      {/* <TestComp/> */}

      {/* <GroceryList/> */}

      <Child data={data} setdata={setdata}   />




    </div>

  )
}

export default App