import axios from "axios";
import React, { useEffect, useState } from "react";

function GroceryList() {
    const hosturl = "http://localhost:3000/todoList/";

    const [items, setitems] = useState([]);

    const [inputdata, setinputdata] = useState("");

    const handleapi = async () => {
        let res = await axios.get(hosturl);

        setitems(res.data);
    };

    useEffect(() => {
        handleapi();
    }, []);

    const handleitem = (e) => {
        setinputdata(e.target.value);
    };

    const handlepost = async () => {
        let body = {
            item: inputdata,
        };
        let senddata = await axios.post(hosturl, body);

        handleapi();
    };

    const handledelete = async (delete_id) => {
        let res = await axios.delete(hosturl + delete_id)
        handleapi()
    }

    const handleedit = async (edit_data) => {
        console.log(edit_data);

        let newdata = prompt("update a item", edit_data.item)
        let datas = {
            item: newdata
        }
        let res = await axios.put(hosturl + edit_data.id, datas)
        handleapi()
    }
    return (
        <div>
            ‌
            <input className="m-5" onChange={handleitem} placeholder="Enter Item" />‌
            <button onClick={handlepost}>Add</button>
            <ol>
                {items.map((d) => (
                    <div>
                        <li>{d.item}</li>

                        <button onClick={() => handleedit(d)}  >Edit</button>

                        <button onClick={() => handledelete(d.id)} >Delete</button>
                    </div>

                ))}
            </ol>
            ‌
        </div>
    );
}

export default GroceryList;
