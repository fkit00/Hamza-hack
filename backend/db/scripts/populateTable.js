import todosData from "../../libs/data.js";
import {query} from "../index.js";

for (let i = 0; i < todosData.length; i++) {
    await query(`INSERT INTO todo_list (id, item)
    VALUES ($1, $2);`,[
       todosData[i].id,
       todosData[i].item
    ])
}
