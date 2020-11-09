import React, { useMemo } from 'react'
import { useLocation } from 'react-router-dom';
// import { heroes } from '../data/heroes'
import { HeroCard } from '../heroes/HeroCard';
import { useForm } from '../hooks/UseForm';
import { getHeroByName } from '../selectors/getHeroByName';

export const SearchScreen = ({history}) => {
    
  const queryString = require('query-string');
    

   const location = useLocation();

//    console.log(location)
   const {q = ''} = queryString.parse( location.search);
//    console.log(q)

    const [ formValues, handleInputChange] = useForm ({
        searchText: q
    });

    const {searchText} = formValues;
    const heroesFiltrados = useMemo(() => getHeroByName(q), [q]);

    const handleSubmit = (e) => {
        e.preventDefault()
        history.push(`?q=${searchText}`)
        // console.log(searchText)
    }
   
    return (
        <div>
            <h1>Search Screen</h1>
            <br />

            <div className="row">
                <div className="col-5">
                    <h4> Search Form</h4>
                    <hr></hr>
                    <form  onSubmit={handleSubmit}>
                        <input 
                        type="text"
                        placeholder="encuentra tu heroe"
                        className="form-control "
                        name="searchText"
                        autoComplete='off'
                        value={searchText}
                        onChange={handleInputChange} 
                       />

                        <button type="submit"
                                className="btn m-1 btn-block btn-outline-primary"
                                >
                                            Buscar

                        </button>
                    </form>

                </div>
                <div className="col-7">
                    <h4> Resultados</h4>
                    <hr />
                   { ( q === '') &&
                         <div className="alert alert-info">
                            Busca tu Heroe!
                         </div>
                   }    
                     { ( q !== '' && heroesFiltrados.length === 0) &&
                         <div className="alert alert-danger">
                            Heroe no encontrado  tu busqueda fue = {q}
                         </div>
                   }    
                   
                    {
                        heroesFiltrados.map( hero => (
                            <HeroCard
                                key={hero.id}
                                {...hero}
                            />
                        ))
                    }

                </div>

            </div>
        </div>
    )
}
