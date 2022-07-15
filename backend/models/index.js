import { query } from '../db/index.js'


export async function getAll(){
console.log(' i have been called')
const res = await query(`SELECT * FROM todo_list;`);
const notesArr= res.rows;
return notesArr
}
