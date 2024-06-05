import { useState } from "react";

export default function Player({name,symbol}){

    const [isEditing, setisEditing] = useState(false);

    function handleChange(){
        setisEditing(!isEditing);
    }

    return (
        <li>
            <span className="player">
              {isEditing===false ? 
                (<span className="player-name">{name}</span>)
                : <input value={name}></input>}
              <span className="Player-symbol">{symbol}</span>
            </span>
            {isEditing===false ? 
            (<button onClick={handleChange}>Edit</button>)
            : (<button onClick={handleChange}>Save</button>) }
            
          </li>
    );
}