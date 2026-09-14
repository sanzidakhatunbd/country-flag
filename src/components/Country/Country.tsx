import { useState } from "react";
import type { CountryType } from "../../type";
import './Country.css'
export interface CountryProps {
    country: CountryType
    handleVisitedCountry: (country: CountryType) => void
    handleVisitedFlag: (flag: string) => void
}

const Country = ({ country, handleVisitedCountry, handleVisitedFlag }: CountryProps) => {
    const [visited, setVisited] = useState<boolean>(false)
    const handleVisited = () => {
        // setVisited(true);
        //2vbae btn set kora jabe.. (1)
        /* if(visited){
             setVisited(false);
         } else{
             setVisited(true);
         } */
        //(2)
        setVisited(!visited)
        handleVisitedCountry(country)
    }
    return (
        <div className={`country ${visited ? 'country-visited' : ''}`}>
            <h3 className="italic text-xl mb-1 text-amber-800">{country.name.common}</h3>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <p className={`${visited && 'population-known'} mt-2 text-amber-700`}>Population: {country.population.population}</p>
            <p className="text-amber-700">Capital: {country.capital.capital}</p>
            <button onClick={handleVisited} className="m-1 border rounded text-amber-950 px-2">
                {visited ? 'Visited' : 'Mark as Visited'}
            </button>
            <button onClick={() => handleVisitedFlag(country.flags.flags.png)} className="px-2 border rounded text-amber-950">Add Flag as Visited</button>
        </div>
    )
}

export default Country;