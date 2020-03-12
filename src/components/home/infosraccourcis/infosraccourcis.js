import React from 'react';
import Infos from './infos/infos';
import Raccourcis from './raccourcis/raccourcis';
import Recherche from './recherche_groupe/recherche';
import './infosraccourcis.css';




function Infosraccourcis() {
  const tab=[
    {nomGroupe:"GL SBA 2020",
    picGroupe:"group.png"
    },
    {nomGroupe:"ING2 -INLOG -INREV",
    picGroupe:"group.png"
    
    },
    {nomGroupe:"ludo king",
    picGroupe:"ludo.png"
    
    },
    {nomGroupe:"2ING ISAMM 2019/2020",
    picGroupe:"group.png"
    
    },
    {nomGroupe:"ludo club",
    picGroupe:"ludo.png"
    
    },
    {nomGroupe:"Ya Gdim !! ( 1990 -1999 )",
    picGroupe:"group.png"
    
    },
    {nomGroupe:"UGET ISAMM",
    picGroupe:"group.png"
    
    },
    {nomGroupe:"OMG",
    picGroupe:"omg.png"
    
    },
    {nomGroupe:"UGTE ISAMM ",
    picGroupe:"group.png"
    
    }
   
  ]
  return (
    <div className = 'infosracLeft'>
    <div> <Infos/></div>
    <div> <Recherche/></div>
    <div> <Raccourcis tableau={tab}/></div>
    </div>
  );
}

export default Infosraccourcis;
