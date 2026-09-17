import React, { useEffect, useState } from 'react'

export default function ProductApi() {


    const [moviedata, setmoviedata] = useState([])

    const[count,setcount] = useState(0)
        const[name,setname] = useState("arun")


    const handlefetch = async () => {
        let res = await fetch("https://fooapi.com/api/movies")
        let luffy = await res.json()
        setmoviedata(luffy.data)

        console.log(luffy);
        
    }

useEffect(()=>{
    console.log("luffy raise");

    return ()=>{
        console.log("lufyyyyyy die");
        
    }
},[name,count])

    
const handleadd =() =>{
    setcount(count+1)
}

const handlename =() =>{
    setname("zoro")
}


    return (
        <div>

            <h1>hey             ........{count} --- {name}</h1>

<button onClick={handleadd}>Add</button>

<button onClick={handlename}>change</button>


            {/* <button onClick={handlefetch}>Call Api</button> */}

            {moviedata.map((da)=>(
                <div>
                    <img src={da.poster}/>
                    <h1>{da.title}</h1>
                    <h3>{da.imdbRating}</h3>

                    </div>
            ))}
        </div>
    )
}
