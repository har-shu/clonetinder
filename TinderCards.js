
import { LabelImportantSharp } from "@mui/icons-material";
import React,{useState} from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";


 function TinderCards() {
 const[people]=useState([
    { 
        name:'Elon Musk',
         url:'https://cdn.wccftech.com/wp-content/uploads/2016/09/elon-musk.jpeg',

     }, 
    {  
         name:'Darshan Raval',
         url:'https://assets.99images.com/photos/celebrities/darshan-raval/darshan-raval-best-hd-photos-download-1080p-whatsapp-dpstatus-images-979d.jpg',
     },
     {
         name:'Sushma sri',
         url:'https://dsm01pap003files.storage.live.com/y4mBlk006i4EdU7BPH1fCUrWs26jWkrKKOZzagxgVMM8oihRb45a6kMSID2D-pCOsUFTp04MpwNlAiMG0nRcPJMIqc6kT5tIZfeho6DtlyErEsATN-hDz6ZZqY58BLiRXoxJehKwV6rwT7MzJ5Q-XkNm7h60amncmun6opbctJJ7FDyRap_wcN0oxtQMGw4Scw4?width=703&height=679&cropmode=none',
     },
     {
        name:'Nikhil',
        url:'https://dsm01pap003files.storage.live.com/y4mSRLycKE8gvY40ROottM5NUNt-lMtr86GvaI9DqAil8FbILR8V0rBcYWO38Sukz9Iz2tHG-ey_tSvCohtW-ESgYULnI0sKM6ipX4cDrVCTHm9GmoLlv_rq4EKlkr7YKpyfTD264nybhPOgnUtRtjaI7RsBXhtcxvKf9TADhXHpQabmI8HN2MCagdvkVT6bzGw?width=1080&height=1313&cropmode=none',
    },
    {
        name:'Sai Latish',
        url:'https://dsm01pap003files.storage.live.com/y4mKV8cTF-X03_VZR4oeL7DywHNocRDyYN-53t6XTKZDw0w3T1kD0DTSCEHFuglHKWgBPV7nTeC1H3im77kFf0L9brR-Vex_XL5aKZl6zbUFmSMiGpat5V1UGvoIigX3GUs69d0iyDt1ctXZ6EPSjRxNH5fB5Uf7P65yhnj8qZKE-EcQWQAqWVcLoppAuSrXZFq?width=433&height=660&cropmode=none',
    },
 ]);
  const swiped=(direction ,nameToDelete)=>{
      console.log("removing:"+nameToDelete);
  
  };

  const outofFrame=(name)=>{
      console.log(name+" left the screen");
  };
 
    return (
    <div className="tindercards">
        <div className="tindercards__cardContainer">
          {people.map((person) =>(
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up","down"]}
            onSwipe={(dir)=>swiped(dir,person.name)}
            onCardLeftScreen={()=>outofFrame(person.name)}>
          
          
          <div style={ {backgroundImage:`url(${person.url})`}}
          className="card">
              <h3>{person.name}</h3>
          </div>
          </TinderCard>
      ))}
       </div>
    </div>
  );
}
export default TinderCards;
