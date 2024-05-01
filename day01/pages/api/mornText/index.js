import { morningText } from "@component/Data/textMorning";
import {v4 as uuid} from 'uuid';


export default function handelText(req,res){
    if(req.method==='GET'){
    res.status(200).json(morningText);}

    else if(req.method==='POST')
     {
        const {textInput}=req.body;
        //const text=json.stringfy(textInput);
        const newText={
        id:uuid(),text:textInput
        }
       console.log(req.body)
       morningText.push(newText);
       res.status(200).json(morningText)
    }
}