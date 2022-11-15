import Card from './Card'
import { useState } from 'react';
function Cards(props){
    const [imgList, setImgList] = useState([]);
    const [gotList, setGotList] = useState(false);
    

    //gotList to stop new fetch every update
    if(!gotList){
        /*
        //links fetched from server via text separated by newlines 
        fetch('http://localhost:3001/cards')
        .then((response) => response.text())
        .then((data) => {
            setImgList(data.split("\n").map((item)=> item.split(" ").join("")))
            setGotList(true)
        })
        */

        //hardcoded img links
       
        let projectUrl = []     
        projectUrl = ["https://cdn.britannica.com/32/122932-050-43EE55D3/Elk.jpg",
        "https://cdn.britannica.com/03/94603-050-D74D3709/elk-American-Yellowstone-National-Park-Wyoming.jpg",
        "https://a-z-animals.com/media/2021/05/Elk-bull.jpg",
        "https://www.nps.gov/romo/learn/nature/images/Elk-Rut-Herd_Grossman.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/a/aa/A._gigantea_Aldabra_Giant_Tortoise.jpg",
            "https://media-cldnry.s-nbcnews.com/image/upload/newscms/2020_03/3186216/200114-diego-tortoise-ew-634p.jpg"]
        setImgList(projectUrl)
        setGotList(true)

       
    }

    

   
    return(     
        <div className={"cardList" + props.hiddenClass}>
           {imgList.map((item, i) => <Card index={i} img={item}></Card>)}
        </div>
    )
}
                                


export default Cards;