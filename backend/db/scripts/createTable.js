//needed to speak to the database - what we're importing handles communication; takes in SQL string and executes
import {query} from "../index.js";

//the todo_id is best practice
const createTableString = `CREATE TABLE IF NOT EXISTS todo_list (
    todo_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    id INT,
    item TEXT
);`

await query(createTableString);
