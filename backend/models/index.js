import { query } from '../db/index.js'


export async function getAll(){
console.log(' i have been called')
const res = await query(`SELECT * FROM todo_list;`);
const notesArr= res.rows;
return notesArr
}

export async function postItem(info){
    const res = await query(`INSERT INTO todo_list (id, item)
    VALUES ($1, $2);`, [info.id, info.item])
    const newItem = res.rows;
    return newItem
}
