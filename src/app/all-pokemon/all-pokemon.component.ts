import { Component, OnInit } from '@angular/core';
import { TablePokemon } from '../models/tablePokemon.model';
import { MatTableDataSource } from '@angular/material/table';
import { PokemonService } from '../services/all-pokemon.service';
import { forkJoin, map, switchMap } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-pokemon',
  templateUrl: './all-pokemon.component.html',
  styleUrls: ['./all-pokemon.component.css']
})
export class AllPokemonComponent implements OnInit{
  
  displayedColumns: string[] = ['image','name','number','type','button']
  pokemonList : MatTableDataSource<TablePokemon> 
  allPokemon : TablePokemon[] = []
  search : string = '';


  constructor(private pokemonService : PokemonService,private router : Router){
    this.pokemonList = new MatTableDataSource<TablePokemon>();
  }
  ngOnInit(): void {
    this.getAllPokemon()
  }

  getAllPokemon() {
    this.pokemonService.getAllPokemon().subscribe((pokemons: any) => {
      const pokemonDetailsObservables = pokemons.results.map((pokemon: any) => 
        this.pokemonService.getPokemonDetails(pokemon.url)
      );

      forkJoin<any[]>(pokemonDetailsObservables).subscribe((pokemonDetails: any[]) => {
        const pokemonWithTypes: TablePokemon[] = pokemonDetails.map((pokemonDetail: any) => {
          const types = pokemonDetail.types.map((typeInfo: any) => 
            this.capitalizeFirstLetter(typeInfo.type.name)
          ).join(', ');
          return {
            name: this.capitalizeFirstLetter(pokemonDetail.name),
            type: types,
            color: this.getColorForType(pokemonDetail.types[0].type.name),
            image: pokemonDetail.sprites?.front_default || 'default-image-url.png',
            id: pokemonDetail.id
          };
        });
        console.log('dettagliPoke', pokemonDetails);
        
        this.pokemonList.data = pokemonWithTypes;
      });
    });
  }
  
  private capitalizeFirstLetter(name: string): string {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

  public getColorForType(type:string):string{
    switch(type.toLowerCase()){
      case 'normal':
        return '#a8a878';
        break;
      case 'fire':
        return '#f08030';
        break;
      case 'psychic':
        return '#f85888';
        // return 'linear-gradient( to right , #ffffff , #f85888)';
        break;
      case 'water':
        return '#6890f0';
        break;
      case 'grass':
        return '#78c850';
        // return 'linear-gradient(to right, #ffffff, #78c850)';
        break;
      case 'fighting':
        return '#c03028';
        break;
      case 'bug':
        return '#a8b820';
        break;
      case 'electric':
        return '#f8d030';
        break;
      case 'poison':
        return '#a040a0';
        break;
      case 'ground':
        return '#e0c068';
        break;
      case 'fairy':
        return '#f0b6bc';
        break;
      case 'rock':
        return '#b8a038';
        break;
      case 'ghost':
        return '#705898';
        break;
      case 'flying':
          return '#93c2f0';
          break;
      case 'steel':
        return '#60a1b8';
        break;
      case 'ice':
        return '#3fd8ff';
        break;
      case 'dragon':
        return '#5060e1';
        break;
      case 'dark':
        return '#4b3d3b';
        break; 
      default:
        return '#000000'
        break;
    }
  }

  applyFilter() {
    const searchTerm = this.search.toLowerCase();
    if (searchTerm === '') {
      this.pokemonList.filter = ''
      this.pokemonList.data = this.pokemonList.filteredData;
    } else {
      this.pokemonList.filter = searchTerm;
    }
  }

  goToDetailPokemon(idNumber : number){
    this.pokemonService.idNumber = idNumber
    this.router.navigate(['detail-pokemon'])
  }

}
