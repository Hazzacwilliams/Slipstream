export interface MRDataDrivers {
    MRData: {
        DriverTable: {
            Drivers: Driver[]
        }   
    }
}

export interface MRDataStandings {
    MRData: {
        StandingsTable: {
            StandingsLists: StandingsList[]
        }
    }
}

export interface MRDataRaces {
    MRData : {
        RaceTable : {
            season: string
            Races: Races[]
        }
    }
}

export interface Driver {
    code: string
    dateOfBirth: string
    driverId: string
    familyName: string
    givenName: string
    nationality: string
    permanentNumber?: string
    url: string
}

export interface StandingsList {
    season: string
    round: string
    DriverStandings: DriverStanding[]
}

export interface DriverStanding {
    position: string
    positionText: string
    points: string
    wins: string
    Driver: Driver
    Constructors: Constructor []
}

export interface Constructor {
    constructorId: string
    url: string
    name: string
    nationality: string
}

export interface Races {
    season: string
    round: string
    url: string
    raceName: string
    Circuit: Circuit
    date: string
    time: string
}

export interface Circuit {
    circuitId: string
    url: string
    circuitName: string
    Location: {
        lat: string
        long: string
        locality: string
        country: string
    }
}