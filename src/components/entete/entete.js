import React from 'react';
import './entete.css';
function Entete() {
  return (
    
    <div class='header-control'>


 <div className='header-control'id='logofb'><img src='fb.jpg' alt='logo fb' ></img></div>

 <div className='header-control' id='searchtxt'>
   <input type="text" name="fname"  id='inputtxt' placeholder="Rechercher"/>   
  </div>
 <div className='liste'>
 <div className='header-control'id='profile'><img src='profile.jpg' alt='logo fb' /></div>
 <div id='profilename'>intii</div>
       <div id='accueil' > Accueil</div>
       <div id='créer'>Créer</div>
 
 
<div className='header-control'><img src='inv.png' alt='logo fb' className='invit'/></div>
<div className='header-control' ><img src='msng.png' alt='logo fb' className='invit' /></div>
<div className='header-control' ><img src='notif.png' alt='logo fb' className='invit' /></div>
<div className='header-control' ><img src='aide.png' alt='logo fb' className='invit'/></div>
<div className='header-control' ><img src='decon.png' alt='logo fb'className='invit' /></div>

</div>
  
    </div>
    
  );
}

export default Entete;