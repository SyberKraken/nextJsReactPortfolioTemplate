import { useState } from "react";
import Cards from "./Cards";
import Fidget from "./Fidget"
import MenuButton from "./menuButton"

let buttonsAreVisible = false;
let hasOpenContent = false;
let lastClickedCard = null;

function Menu(props){
    const   [tabClass, setTabClass] = useState("hiddenButton")
    const   [buttonConTainerClass, setbuttonConTainerClass] = useState("hidden")
    const   [projectClass, setProjectClass] = useState("hidden")
    const   [meClass, setmeClass] = useState("hidden")
    const   [fidgetClass, setfidgetClass] = useState("hidden")

    let menuTabs = ["projects", "me", "fidget"]
    let tabToggles = [inverseValue(projectClass, setProjectClass, "hidden", ""),
     inverseValue(meClass, setmeClass, "hidden", ""),
     inverseValue(fidgetClass, setfidgetClass, "hidden", "")]
    let tabLinks = [setProjectClass, setmeClass, setfidgetClass]

    function toggleTabs(){
        
    }

    let toggleRevealButtons = inverseValue(buttonConTainerClass, setbuttonConTainerClass, "hidden", "")
    let toggleOpenContent = inverseValue(hasOpenContent, (value)=>hasOpenContent=value,true,false)
    
    function tabClick(index){
        if(lastClickedCard == index){return}
        tabLinks.map((func)=>func("hidden"))
        lastClickedCard = index;
        tabLinks[index]("")
        if(!hasOpenContent){
           
        }
        toggleRevealButtons()
        toggleOpenContent()

    }

    function goToMenu(){
        tabLinks.map((func)=>func("hidden"))
        lastClickedCard = null;
    }

    function inverseValue(container, setContainer,one, two){
       return( 
        ()=>{
            if(container == one){
                setContainer(two)
            }else{
                setContainer(one)
            }
        }
       )
    }


    let buttons = menuTabs.map((item, i) => <MenuButton clickFunction={() => tabClick(i)} text={item}></MenuButton>)
                                          
 
    
    return(    
        <> 
        <div className=" w-screen flex justify-center">
            <div className="w-1/12 mt-4 flex justify-center" >
                <div className="flex flex-col w-full">
                    <MenuButton clickFunction={()=>{goToMenu()}} text="Menu" yspace="0"></MenuButton>
                    {buttons}
                </div>
            </div>
             
            <div className={" w-5/6 mt-4 " + buttonConTainerClass}>
                <div className={projectClass} ><Cards></Cards></div>
                <div className={meClass} ><p>weeeeeee</p></div>
                <div className={fidgetClass} ><Fidget></Fidget></div>
            </div>
        </div>
        </> 
    )
}


export default Menu;