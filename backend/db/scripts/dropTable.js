import {query} from "../index.js";

const dropIt = `DROP TABLE IF EXISTS todo_list;`;

await query(dropIt);