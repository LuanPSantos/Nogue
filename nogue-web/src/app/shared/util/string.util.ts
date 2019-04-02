export function lPad(text:string | number, padChar:string, size:number): string {
    return (String(padChar).repeat(size) + text).substr( (size * -1), size) ;
}

export function dateAsString(date: Date): string {
    try{
        return `${lPad(date.getDate(), '0',2)}/${lPad(date.getMonth(),'0',2)}/${date.getFullYear()}`;
    }catch(err) {
        return dateAsString(new Date(date));
    }
}

export function stringAsDate(date: string): Date {
    const day = date.substr(0, 2);
    const month = Number.parseInt(date.substr(3, 2)) + 1;
    const year = date.substr(6, 4);

    return new Date(`${year}-${month}-${day}`);
}