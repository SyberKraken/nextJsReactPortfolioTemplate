import { useEffect, useState } from "react"

function Fidget(props){
    let isOpen = useState(false)
    
    return(
        <>
        <div class="fidgetWrapper">
           <div class="slantedboxHolder">
                <div class="fidgetBox"> </div>
           </div>

           <div class="slantedboxHolder">
                <div class="fidgetBoxInverse"> </div>
           </div>

           <div class="slantedboxHolder">
                <div class="fidgetBox"> </div>
           </div>

           <div class="slantedboxHolder">
                <div class="fidgetBoxInverse"> </div>
           </div>
             <div class="slantedboxHolder">
                <div class="fidgetBox"> </div>
           </div>
           <div class="slantedboxHolder">
                <div class="fidgetBoxInverse"> </div>
           </div>
           <div class="slantedboxHolder">
                <div class="fidgetBox"> </div>
           </div>
  
        </div>
       

        </>
    )
}

export default Fidget;