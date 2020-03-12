import React from 'react';
import propTypes from 'prop-types';
import './raccourcis.css';
function Raccourcis({tableau}) {
  return (
    
    <div >

          
           <div className='partRac'>Raccourcis</div>
           {tableau.map(task=>(
              
    
           <div className='racc'><img src={task.picGroupe} alt='logo groupe' className="imgRacc"/> <span>{task.nomGroupe}</span> </div>
                )
                  )}  
  
  <div className='racc'><img src='down.png' alt='logo down' className="imgRacc"/> <a href="#seeMore">See More</a></div>

    


     
  
    </div>
    
  );
}
Raccourcis.propTypes={
  picGroupe:propTypes.string.isRequired,
  nomGroupe:propTypes.string.isRequired
 
}

export default Raccourcis;