
import {Link} from "react-router-dom"

export const Bottomwarning=({label,label2,to})=>{
    return <div className="flex justify-center">
        <div>
            {label}
        </div>
        <Link className="underline" to={to} >{label2}</Link>
    </div>
    
    
}