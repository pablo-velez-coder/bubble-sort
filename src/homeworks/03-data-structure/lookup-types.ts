export type Developer = {
    frontend: {
        tool: string;
        language: string;
        styles: string;
    };
    backend: {
        tool: string;
        language: string;
        bd: string;
    }
}

type ReactDeveloper = Developer['frontend']
type NodeDeveloper =  Developer['backend']

export const reactDeveloper : ReactDeveloper = {
    tool: 'React',
    language: 'Typescript',
    styles: 'Sass' 
}
export const nodeDeveloper : NodeDeveloper = {
    tool: 'React',
    language: 'Typescript',
    bd: 'MongoDB' 
}