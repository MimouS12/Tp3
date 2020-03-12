import React from 'react';
import './posts.css';
import Photogroupe from './photo_groupe/photo_groupe';
import Publication from './publication/publication';
import Post from './post/post';
function posts() {
  return (
    
    <div class='posts'>


<div> <Photogroupe/></div>
<br/>
<div> <Publication/></div>
<div> <Post/></div>


     
  
    </div>
    
  );
}

export default posts;