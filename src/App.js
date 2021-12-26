import React, { useEffect, useState } from 'react';
import './App.css';
import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow';
import FeaturedMovie from './components/FeaturedMovie';
import Header from './components/Header';

export default() =>{

  const [movieList, setMovieList] = useState([]); 
  const [FeaturedData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(()=>{
    const loadAll = async () => {
      //Pegando a lista total
      let list = await  Tmdb.getHomeList();
      setMovieList(list);

      //Pegando o featured
      let originals = list.filter(i=>i.slug === 'originals');
      let radomChosen = Math.floor(Math.random() * (originals[0].itens.results.length - 1));
      let chosen = originals[0].itens.results[radomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
      setFeaturedData(chosenInfo);
      console.log(chosenInfo);
      
    }

    loadAll();
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      if(window.scrollY > 10){
        setBlackHeader(true);
      }
      else{
        setBlackHeader(false);
      }
    }

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    }

  }, []);

  return(
 
  <div className="page">
    
    <Header black={blackHeader}/>

    {FeaturedData &&
      <FeaturedMovie item={FeaturedData} />
    }

    <section className="lists">
      {movieList.map((item, key)=>(
        
       <MovieRow key={key} title={item.title} itens={item.itens}/>
      ))}
    </section>

    <footer>
        Desenvolvido por Matheus Trindade.
    </footer>

  </div>
  )
}

function newFunction(setFeaturedData, chosenInfo) {
  setFeaturedData(chosenInfo);
}
