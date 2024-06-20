import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, forkJoin, map, switchMap } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class PokemonService{
    private apiPokemon = 'https://pokeapi.co/api/v2/pokemon/';
    public idNumber : any;

    constructor(private http:HttpClient){}

    getAllPokemon(limit:number = 151):Observable<any>{
        const url = `${this.apiPokemon}?limit=${limit}`
        // return this.http.get<any>(url);
        return this.http.get<any>(url)
    }
        
    

    getPokemonDetails(detailsUrl:string):Observable<any>{
        return this.http.get<any>(detailsUrl)
    }
    
    getTypePokemon(typeUrl:string):Observable<any>{
        return this.http.get<any>(typeUrl)
    }    
    

    getAllPokemonDetails(limit: number = 151): Observable<any[]> {
        return this.getAllPokemon(limit).pipe(
          switchMap((pokemonList: any) => {
            const detailObservables = pokemonList.results.map((pokemon: any) => this.getPokemonDetails(pokemon.url));
            return forkJoin(detailObservables) as Observable<any[]>;
          })
        );
    }

    getSinglePokemon(){
        return this.http.get<any>(`${this.apiPokemon}${this.idNumber}`)
    }
}
