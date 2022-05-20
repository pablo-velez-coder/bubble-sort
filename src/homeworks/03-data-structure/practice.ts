export const last =  <T>(arr: Array<T>): T=>{
    return arr[arr.length - 1]
}
last([2,567,7])

export const makeArray = <T,Y= number>(x:T, y: Y):[T,Y] =>{
    return [x, y]
}

makeArray<string|null>(null,3)

const makeFullName = <T extends {first:string, last:string}>(obj:T):T =>{
    return {
        ...obj,
        fullName: obj.first + obj.last
    }
}

makeFullName({first:'dfsds', last:'fsd', age:5})

interface Tab<T> {
    id: string;
    position: number;
    data: T;
}

export type NumberTab = Tab<number>
export type StringTab = Tab<string>

export const numberTab: NumberTab = {
    id: '32',
    position: 3,
    data: 5,
}
export const stringTab: StringTab = {
    id: '32',
    position: 3,
    data: 'das',
}