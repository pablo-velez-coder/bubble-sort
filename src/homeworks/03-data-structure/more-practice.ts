
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

class SaleWithTax extends Sale {
    private tax: number 
    constructor(tax: number, amount: number){
        super(amount)
        this.tax = tax
    }

    override getTotal():number{
        return this.tax  + super.getTotal()
    }
}

let saleWithTax =  new SaleWithTax(12,2)
saleWithTax.getTotal()

type Beer  = {
    readonly name: string
    alcohol: number
    brand?: string;
}
type Snack = {
    snackName: string;
    price: number;
}
function show(beer:Beer){
    console.log(beer.name + beer.alcohol);
}

const myBeer: Beer = {
    name:'cusqueña',
    alcohol: 5
}
myBeer.brand = 'Pilsen'

show(myBeer)

export const combo: Beer & Snack = {
    name: 'sa',
    alcohol: 32,
    brand: '32',
    snackName: '324',
    price: 23,
}

interface Drink {
    name: string
}

interface AlcoholicDrink extends Drink {
    alcohol: number;
    showInfo(): string
}

class Wine implements AlcoholicDrink {
    alcohol: number;
    name: string;

    constructor(name: string, alcohol:number){
        this.name = name;
        this.alcohol = alcohol
    }

    showInfo():string{
        return 'a'
    }
}

interface MixedDrink {
    ingredients: string[]
}

class CockTail implements AlcoholicDrink, MixedDrink {
    alcohol: number;
    name: string;
    ingredients: string[];

    constructor(name: string, alcohol:number, ingredients: string[]){
        this.name = name;
        this.alcohol = alcohol
        this.ingredients = ingredients;
    }

    showInfo():string{
        return 'a'
    }
}