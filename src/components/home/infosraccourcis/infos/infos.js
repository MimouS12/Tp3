import React from 'react';
import './infos.css';
function Infos(){
    return(
        <div className="Infos">
          <br/>
          <div><h3>ING2 -INLOG - <br/> INREV</h3></div>
           <div className='texte'>Groupe Privé</div>
           <br/>
           <div className="rubriques">
             <div className="rubtag" >A propos</div>
             <div className="rubtag bor">Discussion</div>
             <div className="rubtag" >Membres</div>
             <div className="rubtag" >Evènements</div>
             <div className="rubtag" >Photos</div>
             <div className="rubtag" >Fichiers</div>
             <div className="rubtag" >Séance vidéo</div>
             </div>
        </div>
    )
}
export default Infos;