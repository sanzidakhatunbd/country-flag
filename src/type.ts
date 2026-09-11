export interface CountryType {
    name: {
        common: string,
        official: string
    },
    ccn3: {
        ccn3: string
    },
    population: {
        population: number
    },
    capital: {
        capital:
        string[]
    },
    flags: {
        flags: {
            png: string,
            alt: string
        }
    }
}