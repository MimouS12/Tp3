import React from 'react';
import './publication.css';
function Publication() {
  return (
    
    <div class='publication'>


<div className='elem1' id='elem1'> 

<img className='i1'src='crayon.jpg' alt='logo ludoclub'id='ludoc' />Message
<img className='i2'src='photovidéo.jpg' alt='logo ludoclub'id='ludoc' />Photo/vidéo
<img className='i3'src='vidéo.jpg' alt='logo ludoclub'id='ludoc' />Vidéo en direct
<img className='i4'src='plus.png' alt='logo ludoclub'id='ludoc' />Plus
</div>
<div><img src='profile.jpg' alt='logo ludoclub'id='ludoc' /><input class='intext'type='text' name='publier' placeholder='Exprimer-vous'></input></div>

<div className='elem3' id='elem3'>
<img className='im1'src='photo2.jpg' alt='p'id='ludoc' />Photo/vidéo
<img className='im2'src='vidéo2.png' alt='v'id='ludoc' />Séance Vidéo
<img className='im3'src='identif.png' alt='identifier' />Identifier des amis
<img className='im4'src='plus.png' alt='voireplus'/>Plus
</div>
     

    </div>
    
  );
}

export default Publication;