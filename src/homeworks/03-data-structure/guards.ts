
// in
type DeliminatedDocument = {
    text: string;
    seperator: "comma" | "tab"
}
interface PlainTextDocument {
    text: string;
}
export const printDeliminated = (doc: DeliminatedDocument) =>{

}
export const printPlainText = (doc: PlainTextDocument) =>{

}

export const printdocument = (doc:DeliminatedDocument |PlainTextDocument ) =>{
    if("seperetor" in doc){
        printDeliminated(doc)
    } else {
        printPlainText(doc)
    }
}

//Type predicates
export type FinalInvoice = {
    __typename: 'FinalInvoice';
    insertedAt: string;
}
export type DraftInvoice = {
    __typename: 'DraftInvoice';
    insertedAt: string;
}

export type Invoice = FinalInvoice | DraftInvoice

const invoice: Invoice = {
    __typename:'DraftInvoice',
    insertedAt: '2021-05-02'
}

export const isFinalInvoice = (invoice: Invoice): invoice is FinalInvoice =>{
    return invoice.__typename === 'FinalInvoice';
}
export const isDraftInvoice = (invoice: Invoice): invoice is DraftInvoice =>{
    return invoice.__typename === 'DraftInvoice';
}

isDraftInvoice(invoice)

// Assert functions
function assertIsNumber(val:any): asserts val is number {
    if(typeof val !== 'number'){
        throw new Error("It's not a number!")
    }
}

export function double(input: any) {
    assertIsNumber(input)

    return 2 * input
}

// Type predicates is most used