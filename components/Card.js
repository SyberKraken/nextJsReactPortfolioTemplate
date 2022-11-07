import { useEffect, useState } from "react";


let currentleyFocusingImg = null;
let functionToRunWhenHidingOldCard = [];


function Card(props){
    const [isFocused, setIsFocused] = useState(false)
    const [id, setId] = useState("")
    const [index, setIndex] = useState(props.index)
    const [isOnMobile, setOnMobile] = useState(false)

    useEffect(() => setOnMobile(window.innerHeight > window.innerWidth), []) 

    function RemoveMyFocus(){
        setIsFocused(false)
        setId("")
    
    }
    function MakeMeFocused(){
        setIsFocused(true)

        setId("preSelectedCard")
        if(!isOnMobile){
            setTimeout(() => {setId("selectedCard")}, 10)
        }else{
            setTimeout(() => {setId("selectedCardMobile")}, 10)
        }
       
    }

    function focus(){
        let bumpedIndex = index
        //+1 since 0 == null in js +1
        if(!isFocused){
            if(currentleyFocusingImg != null){
                functionToRunWhenHidingOldCard("")
            }
            MakeMeFocused()
            
            currentleyFocusingImg = bumpedIndex
            functionToRunWhenHidingOldCard = RemoveMyFocus
        }
        else if(isFocused){
            if(currentleyFocusingImg === bumpedIndex){
                RemoveMyFocus()
                currentleyFocusingImg = null
            }
        }
        console.log(isFocused)
        console.log(index)
        console.log(currentleyFocusingImg)
    }
    

    let returnItem = 
        <div id={id} class="card" index={index} key={"CARD:"+index} onClick={() =>{focus()} }>
            <img class ="cardImg"src={props.img} alt="ImageOnCard"></img>

        </div>

    return(
        returnItem
        )
}


export default Card;