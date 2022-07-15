import express from 'express'
import { getAll, postItem } from '../models/index.js'


const app = express()
const router = express.Router()



router.get('/', async (req,res)=> {
let all = await getAll()
console.log(all)
let data= res.json({
    sucess: true, 
    payload:all, 
})
return data 
})

router.post('/', async(req,res)=>{
    let newToDo = await postItem(req.body)
    let data = res.json({
        success: true,
        payload: newToDo
    })
    return data
})


export default router