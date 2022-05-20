export type Diesel = {
    type: 'petroleum' | 'bio' | 'synthetic'
}

export type Gasoline = {
    type: 'hybrid' | 'conventional'
}

type Bus = {
    engine: Diesel
}

type Car = {
    engine: Gasoline
}

type Engine<T> = T extends {engine: unknown} ? T["engine"] : never;

type BusEngine =  Engine<Bus>

export const busEngine: BusEngine = {
    type: "bio"
}

export const carEngine: Engine<Car> = {
    type: 'hybrid'
}

/* export const invalid: Engine<Car> = {
    type: 'bio' // it's not valid
}
 */