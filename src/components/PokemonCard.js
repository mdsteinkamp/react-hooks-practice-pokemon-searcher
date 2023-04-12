import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ pokemon }) {
  const [switchSprite, setSwitchSprite] = useState(false)

  function handleSwitch() {
    setSwitchSprite((switchSprite) => !switchSprite)
  }

  return (
    <Card>
      <div>
        <div className="image">
          
          <img alt="oh no!"
            onClick={handleSwitch} 
            src={switchSprite ? pokemon.sprites.back : pokemon.sprites.front}
          />
        </div>
        <div className="content">
          <div className="header">{pokemon.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {pokemon.hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
