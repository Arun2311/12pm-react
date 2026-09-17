import React,{useEffect} from 'react'

export default function TestComp() {

useEffect(()=>{
    console.log("luffy");
})

console.log("sanji");


  return (
    <div>

        {console.log("zoro")}
            
      <h1>Use Effect</h1>

    </div>
  )
}
