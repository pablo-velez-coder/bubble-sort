export type Trip = 
    | {
        origin: {
            uuid: string;
            city: string;
            state: string;
        };
    }
    | {
        originUuid: string;
    }

type TripWithOriginRef = Extract<Trip, {originUuid: string}>
type TripWithOriginWhole = Extract<Trip, {origin: { uuid: string}}>

export const tripOriginRef:TripWithOriginRef = {
    originUuid : '234'
}

export const tripWithOriginWhole:TripWithOriginWhole = {
    origin: {
        uuid: '232',
        city: 'lima',
        state: 'lince',
    }
}

// Extrac utility with guards in, predicates

const hasOriginRef = (trip: Trip):  trip is TripWithOriginRef =>{
    return "originUuid" in trip
}

export const result =  [tripOriginRef,tripWithOriginWhole].filter(hasOriginRef)