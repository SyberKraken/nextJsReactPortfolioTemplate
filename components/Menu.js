import { useState } from "react";
import Cards from "./Cards";
import Fidget from "./Fidget"

let buttonsAreVisible = false;
let hasOpenContent = false;
function Menu(props){
    const   [tabClass, setTabClass] = useState("hiddenButton")
    const   [revealButtonClass, setRevealButtonClass] = useState("revealButtonBig")
    const   [projectClass, setProjectClass] = useState("hidden")
    const   [meClass, setmeClass] = useState("hidden")
    const   [fidgetClass, setfidgetClass] = useState("hidden")

    function tabClick(index){
        tabLinks[index]()
        toggleTabs()
        hasOpenContent = true;
    }

    let menuTabs = ["projects", "me", "fidget"]

    let tabLinks = [setProjectClass, setmeClass, setfidgetClass]

    let buttons =  menuTabs.map((item, i) => <button class={tabClass} onClick={() => tabClick(i)}>{item}</button>)

    function toggleTabs(){
        if(buttonsAreVisible){
            setTabClass("gettingVisibleButton")
            setTimeout(() => { setTabClass("wasVisibleButton")}, 10)
            buttonsAreVisible = false
            setRevealButtonClass("revealButtonBig")
        }else{
            setTabClass("gettingVisibleButton")
            setTimeout(() => {setTabClass("visibleButton")}, 10)
            buttonsAreVisible = true
            setRevealButtonClass("revealButtonSmall")
        }
        if(hasOpenContent){
            tabLinks.map((func) => func("hidden"))
            hasOpenContent = false;
        }
      
    }


    
    return(    
        <>
        <button class ={revealButtonClass}  onClick={toggleTabs}>Menu</button>
        <div class="Buttoncontainer">
            {buttons}
         </div>
           

        <div id={projectClass} >
                <Cards></Cards>
        </div>
        <div id={meClass} >
            <p>weeeeeee</p>
        </div>
        <div id={fidgetClass} >
            <Fidget></Fidget>
           
        </div>
        </> 
    )
}


export default Menu;