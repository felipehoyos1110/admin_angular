import { Injectable } from "@angular/core";

const URL_MOCARGO: string = 'urlMocargo';

@Injectable({
    providedIn: 'root'
})

export class Config {

    public urls: Map<string, string> = new Map<string, string>();

    constructor(){}

    public load(): Promise<boolean>{
        return new Promise((resolve, reject)=> {
        if (this.urls.size>0){
            resolve(true);
        }else{
            this.urls.set(URL_MOCARGO, 'https://localhost:5001');
            resolve(true);
        } 
        });
    }

    public getUrlMocargo(): string{
        return this.urls.get(URL_MOCARGO)!;
    }

    public isDevelopment(): boolean{
        return window.location.origin.includes('127.0.0.1')||window.location.origin.includes('localhost')
    }



}
