export default interface IStorage {
    filepath:string;
    (filepath:string, key:string):string|number
}