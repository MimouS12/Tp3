import React from 'react';
import Infosraccourcis from './infosraccourcis/infosraccourcis';
import './home.css';
import Posts from './posts/posts';
import Amisconnectes from './amisconnectés/amisconn';

function Home() {
  const tab=[
    {nom:"Maryem Souayah",
    pic:"maryem.jpg", 
    picAlt:"photoami1"
    },
    {nom:"Khouloud Yaakoubi",
    pic:"khouloud.jpg", 
    picAlt:"photoami2"
    },
    {nom:"Rania Bel Arbi",
    pic:"rania.jpg", 
    picAlt:"photoami3"
    },
    {nom:"Eslem Khemiri",
    pic:"eslem.jpg", 
    picAlt:"photoami4"
    },
    {nom:"Rania Bel Arbi",
    pic:"rania.jpg", 
    picAlt:"photoami5"
    },
    {nom:"Rania Bel Arbi",
    pic:"rania.jpg", 
    picAlt:"photoami6"
    },
    {nom:"Rania Bel Arbi",
    pic:"rania.jpg", 
    picAlt:"photoami7"
    },
    {nom:"Rania Bel Arbi",
    pic:"rania.jpg", 
    picAlt:"photoami8"
    },
    {nom:"Eslem Khemiri",
    pic:"eslem.jpg", 
    picAlt:"photoami9"
    },
    {nom:"Eslem Khemiri",
    pic:"eslem.jpg", 
    picAlt:"photoami10"
    },
    {nom:"Maryem Souayah",
    pic:"maryem.jpg", 
    picAlt:"photoami11"
    },
    {nom:"Maryem Souayah",
    pic:"maryem.jpg", 
    picAlt:"photoami12"
    },
    {nom:"Maryem Souayah",
    pic:"maryem.jpg", 
    picAlt:"photoami13"
    }
  ]
  return (
    <div className = 'home'>
    <div> <Infosraccourcis/></div>
    <div> <Posts/></div>
    <div class="traitgauche"> <Amisconnectes tableauDonnees={tab}/></div>
    </div>
  );
}

export default Home;
