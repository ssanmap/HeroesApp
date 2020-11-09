import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router-dom'
// import { heroes } from '../data/heroes';
import { getHeroById } from '../selectors/getHeroById';

export const HeroScreen = ({history}) => {

    const {heroeId} = useParams();
    
    // si es el mismo id usaria la misma informacion
    // para procesos pesados.
    const hero = useMemo(() => getHeroById(heroeId), [heroeId]);

 
    // 
   
    if (!hero){
        
        return  <Redirect to="/" />
    }

    const handleReturn = () => {
        history.replace('/');
    }
    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
    } = hero;
    
    return (
        <div className=" row mt-5">
            <div className="col-4">
            <img 
             src={`../assets/heroes/${ heroeId }.jpg`}
             className="img-thumbnail animate__animated animate__fadeInLeft"
             alt={ superhero}/>
            
            </div>

            <div className="col-8">
                 <h2> {superhero}</h2>
                 <ul className="list-group list-group-flush">
                    <li className="list-group-item"> <b> Alter Ego:</b> {alter_ego}</li>
                    <li className="list-group-item"> <b> Publisher:</b> {publisher}</li>
                    <li className="list-group-item"> <b> First Apareance:</b> {first_appearance}</li>
                 </ul>
                 <h4> Characters</h4>
                 <p>{characters}</p>
                 <button className="btn btn-outline-info"
                           onClick={handleReturn} >
                     Regresa
                 </button>
            </div>
        </div>
    )
}
