import React, { useMemo } from 'react'
import { getHerosbyPublisher } from '../selectors/getHerosbyPublisher'
import { HeroCard } from './HeroCard';

export const HeroList = ({publisher}) => {

    const heroes = useMemo(() => getHerosbyPublisher(publisher), [publisher])

    // const heroes = (publisher);

    return (
        <div className="card-columns animate__animated animate__fadeIn">
            {
                heroes.map( hero => (
                    <HeroCard key={hero.id}
                        { ...hero}
                        />
                   
                ))
            }
        </div >
    )
}
