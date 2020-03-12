import React from 'react';
import './post.css';
function Post() {
  return (
    
    <div class='post'>


<div className='ele' id='ele'> 
<span className='activité1'>NOUVELLE ACTIVITE</span>
<div className='post1'>
<div className='publieur'><img src='publieur.jpg' alt='publieur'/>Yosr Naija</div>
Les rendus doivent être tous des liens github
<div className='jaime'><img class='img1'src='jaime.png' alt='jaime'/>j'aime
<img class='img1'src='commentaire.png' alt='Commentaire'/>Commentaire</div>
<div className='inputcomm'><img src='profile.jpg' alt='profile' /><input class='inptext'type='text' name='publier' placeholder='Exprimer-vous'></input></div>
</div>
<span className='activité2'>PlUS ANCIEN</span>
<div className='post2'>
<div className='publieur2'><img src='publieur2.jpg' alt='publieur2'/>Imen Ben Salah</div>
<img className='publication2'src='publication2.jpg' alt='publieur2'/>
<div className='jaime'><img class='img1'src='jaime.png' alt='jaime'/>j'aime
<img class='img1'src='commentaire.png' alt='Commentaire'/>Commentaire</div>
<div className='inputcomm'><img src='profile.jpg' alt='profile' /><input class='inptext'type='text' name='publier' placeholder='Exprimer-vous'></input></div>
</div>
</div>

    </div>
    
  );
}

export default Post;