import React, { useState } from 'react'

function MovieCounter() {

  const [count, setcount] = useState(0)
  const [name, setname] = useState("Naruto")


  const handleadd = () => {
    if(count === 10){
    setcount(0)

    }else{
    setcount(count + 1)

    }

  }


  const handlename = () =>{
    setname("Onepiece")

  }

  return (
    <div>
      <h1>{name}</h1>

      <h2>Count: {count}</h2>

      <button onClick={handleadd}>Add</button>

      <button onClick={handlename}>Change Name</button>


    </div>
  )
}


export default MovieCounter