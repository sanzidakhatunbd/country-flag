import { use, useState } from "react"
import type { CountryType } from "../../type"
import Country from "../Country/Country";
import './Countries.css'
export interface CountriesProps {
    countriesPromise: Promise<CountryType[]>
}

export default function Countries({ countriesPromise }: CountriesProps) {
    const [visitedCountries, setVisitedCountries] = useState<CountryType[]>([]);
    const [visitedFlags, setVisitedFlags] = useState<string[]>([])
    const countries = use(countriesPromise);
    const handleVisitedCountry = (country: CountryType): void => {
        //good woy to check
        const exists = visitedCountries.find(c => c.ccn3.ccn3 === country.ccn3.ccn3);
        if (exists) {
            const remainingCountries = visitedCountries.filter(c => c.ccn3.ccn3 !== country.ccn3.ccn3);
            setVisitedCountries(remainingCountries);
        } else {
            const newVisitedCountry = [...visitedCountries, country]
            setVisitedCountries(newVisitedCountry)
        }
    }
    const handleVisitedFlag = (flag: string): void => {
        if (visitedFlags.includes(flag)) {
            const remainingFlags = visitedFlags.filter(f => f !== flag);
            setVisitedFlags(remainingFlags)
        } else {
            const newVisitedFlags = [...visitedFlags, flag]
            setVisitedFlags(newVisitedFlags)
        }
    }
    return (
        <div className="container mx-auto">
            <div className="border-2 border-amber-900  p-5 m-5 rounded-xl">

            <h2 className="text-amber-900 italic text-xl">Countries: {countries.length}</h2>
            <h4 className="text-amber-900 font-semibold italic">Visited Countries: {visitedCountries.length}</h4>
            <div>
                <ul>
                    {
                        visitedCountries.map(country => <li key={country.ccn3.ccn3} className="italic text-amber-800">{country.name.common}</li>)
                    }
                </ul>
            </div>
            <h4 className="italic font-semibold text-amber-800 pt-2">Visited Flags: {visitedFlags.length}</h4>
            <div className="visited-flag py-3 flex flex-wrap gap-1">
                {
                    visitedFlags.map((flag, index) => <img key={index} src={flag} alt="visited flag" />)
                }
                </div>
            </div>
            <div className="countries">
                {
                    countries.map(country => <Country key={country.ccn3.ccn3} country={country} handleVisitedCountry={handleVisitedCountry} handleVisitedFlag={handleVisitedFlag}></Country>)
                }
            </div>
        </div>
    )
}