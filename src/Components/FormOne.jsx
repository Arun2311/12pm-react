import React, { useState } from 'react'

export default function FormOne() {

    const [name, setname] = useState("")
    const [age, setage] = useState(0)
    const [isshow, setisshow] = useState(false)



    const handlename = (e) => {
        setname(e.target.value)
    }

    const handleage = (event) => {
        setage(event.target.value)
    }

    const handleform = () => {
        let a = {
            name: name,
            age: age
        }
        console.log(a);
        setisshow(true)
    }

    return (
        <>

           {!isshow ? <div>
                <label>Name : </label>
                <input type='text' onChange={handlename} placeholder='Enter' />

                <br></br>

                <label>Age</label>
                <input type='number' onChange={handleage} placeholder='Enter' />

                <br>
                </br>

                <button onClick={handleform}>Submit</button>
            </div> : null}


            {isshow ?
                <div>
                    <h1>Name - {name}</h1>
                    <h2>Age - {age}</h2>
                </div> : null
            }

        </>
    )
}
