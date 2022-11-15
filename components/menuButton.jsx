

function MenuButton(props){
    return(        
        <button className={" hover:border m-2 text-center rotate-6 text-white rounded relative bg-gray-700 h-10 w-full z-10 font-mono text-2xl px-4 transition-transform"}
          onClick={props.clickFunction}>{props.text}</button>
    )
}


export default MenuButton;
