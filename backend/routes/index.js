import express from 'express'
import { getAll } from '../models/index.js'


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


export default router