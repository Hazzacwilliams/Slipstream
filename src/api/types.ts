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
            round: string
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

export type Session = {
    name: string
    start: Date
}

export type SessionTime = {
    date: string
    time: string
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
    DriverStandings?: DriverStanding[]
    ConstructorStandings?: ConstructorStanding[]
}

export interface DriverStanding {
    position: string
    positionText: string
    points: string
    wins: string
    Driver: Driver
    Constructors: Constructor []
}

export interface ConstructorStanding {
    position: string
    points: string
    wins: string
    Constructor: Constructor
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
    FirstPractice: SessionTime
    SecondPractice?: SessionTime
    ThirdPractice?: SessionTime
    SprintQualifying?: SessionTime
    Sprint?: SessionTime
    Qualifying: SessionTime
    result: string
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

export interface WeatherForecast {
    timezone: string
    daily: {
        time: string[]
        weather_code: number[]
        temperature_2m_min: number[]
        temperature_2m_max: number[]
        precipitation_probability_max: (number | null)[]
    }
}

export type DayWeather = {
    code: number
    high: number
    low: number
    rainChance: (number | null)
}
