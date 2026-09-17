import React from 'react'

export default function Child({data,setdata}) {


const handlsend = () =>{
    setdata("lufffy")
}

  return (
    <div>
      <h1>hey {data}</h1>

      <button onClick={handlsend}>add</button>

    </div>
  )
}
