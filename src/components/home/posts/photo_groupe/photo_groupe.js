import React from 'react';
import './photo_groupe.css';
function Photogroupe() {
  return (
    
    <div class='posts'>

<div class='postHead'>
  <img src='couv.png' alt='couverturegroupe' className='imgcouv' /> 
  <div className="underCouver">
    <div className="btn-group">
  <button > Membre</button> 
  <button > Notification </button>
  </div> <div> - </div> 
  <div className="btn-group">
  <button > Partager </button>
  <button > Plus </button>
  </div>
  </div>

</div>
     

    </div>
    
  );
}

export default Photogroupe;