import React, { useState } from "react";
import ListAge from "./ListAge";



function ShowList() {
    const [names, setnames] = useState(["luffy", "zoro", "sanji", "nami", "ussop", "jimbei", "chopper"])




    return (
        <>
            {names.map((da) => (
                <div>

                    <h1>{da}</h1>


                </div>
            ))}
            <ListAge />
        </>
    )
}


export default ShowList