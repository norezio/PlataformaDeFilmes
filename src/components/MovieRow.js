import React, {useState} from 'react';
import './MovieRow.css';

const NavigatorBeforeIcon = '<';

export default ({title, itens}) => {
    
    let left = '<';
    let right = '>';

    const [scrollX, setScrollX] = useState(-400);
        

    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 2);
        if(x > 0){
            x = 0;  
        }
        setScrollX(x);
    }

    const handleRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth / 2);
        let listW = itens.results.length * 150;
        if((window.innerWidth - listW) > x ){
            x = (window.innerWidth - listW) - 30;
        }
        setScrollX(x);
    }

    return (
        <div className="movieRow">
           <h2>{title}</h2>
           <div className='movieRow--left' onClick={handleLeftArrow}>
                 {left}
           </div>
           <div className='movieRow--right' onClick={handleRightArrow}>
                {right}
           </div>
           <div className="movieRow--listarea">
               <div className="movieRow--list" style={{
                   marginLeft: scrollX,
                   width: itens.results.length * 150
               }}>
                   {itens.results.length > 0  && itens.results.map((item, key)=>(    
                    <div key={key} className="movieRow--item"> 
                        <img src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`}  alt-={item.original_title} /> 
                    </div> 
                ))}
              </div>
           </div>
        </div>
    );
}