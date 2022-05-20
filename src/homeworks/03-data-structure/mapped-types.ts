export type Properties = 'small' | 'medium' | 'large';

export type MappedType = {
    [P in Properties] : boolean;
}

// with genereics
export type MappedTypeGen<Properties extends string | number | symbol> = {
    [P in Properties] : P;
}

export type m = MappedTypeGen<Properties>

// with a better generic example 
export type MyMappedType<T> = {
    readonly [P in keyof T]?: T[P] | null
}

export type w = MyMappedType<{'ptmr':1, 'yeah':2}>

// Pick one
type Pick1<T, Properties extends keyof T> = {
    [P in Properties]: T[P]
}

type MyNewType2 = Pick1<{a:'1',b:'2'},'a'>

/* type Element = string */

interface Visitor<T extends Element = HTMLElement>{
    visit(element: T): void;
}

class HTMLElementVisitor implements Visitor {
    visit(element:HTMLElement){
        return element
    }
}
interface Person{
    name: string;
    height: string;
    weight: string;
}

type PersonProps = keyof Person;
export const ll: PersonProps = 'height'

const Jaime = {
    'name': 'Jaime',
    height: '32',
    weight: 's23'
}

function pluck<T, K extends keyof T>(obj:T, property: K): T[K]{
    return obj[property]
}
pluck(Jaime,'name')

const MESSAGE = {
    listen:'hey',
    sing:'loud',
    yell:'hell'
}

type MessageType = keyof typeof MESSAGE

function reply(key:MessageType):typeof MESSAGE [MessageType]{
    return MESSAGE[key]
}

reply('listen')

// Clases con typescript
class Sale {
    private amount: number;
    constructor(amount:number){
        this.amount = amount
    }

    getTotal():number{
        return this.amount
    }
}

let sale = new Sale(12)
console.log(sale.getTotal())
