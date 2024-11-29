export interface Iuser {
    name:string,
    email:string,
    role:'user' | 'admin',
    age:number,
    photo?: string | null,
}