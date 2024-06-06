import { useState } from "react";

export default function Player({name,symbol,isActive, onChangeName}){

    const [isEditing, setisEditing] = useState(false);
    const [playerName, setPlayerName] = useState(name);

    function handleButtonClick(){
        setisEditing((editing)=>!editing);
        if (isEditing){
        onChangeName(symbol, playerName);}
    }

    function handleNameCHange(event){
        setPlayerName(event.target.value);
    }

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
              {isEditing===false ? 
                (<span className="player-name">{playerName}</span>)
                : <span className="player-Name"><input value={playerName} type="text" required onChange={handleNameCHange}/></span>}

              <span className="player-symbol">{symbol}</span>
            </span>
            {isEditing===false ? 
            (<button onClick={handleButtonClick}>Edit</button>)
            : (<button onClick={handleButtonClick}>Save</button>) }
            
          </li>
    );
}