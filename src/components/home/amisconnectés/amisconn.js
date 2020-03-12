import React from 'react';
import propTypes from 'prop-types';
import './amisconn.css';
function Amisconnectes({tableauDonnees}){
    return(
        <div className="amisconn">
        <div class="contactName">   <b>CONTACTS</b> </div> 
        {tableauDonnees.map(task=>(
              
        <div className="persCer"> <div className='nomPic'><img src={task.pic} alt={task.picAlt} className="imgPdp" /> <span  >{task.nom}</span> </div>  <div className="cercle"></div> </div> 

          )
            )}  
 
          
        </div>
    )
}
Amisconnectes.propTypes={
    pic :propTypes.string.isRequired,
    picAlt:propTypes.string.isRequired,
    nom :propTypes.string.isRequired 
   
}
export default Amisconnectes;
