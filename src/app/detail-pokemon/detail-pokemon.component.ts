import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonService } from '../services/all-pokemon.service';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./detail-pokemon.component.css']
})
export class DetailPokemonComponent implements OnInit {

  // private idNumber : number = 0;
  pokemon: any | null;
  imagePokemon:any;
  namePokemon:any;
  numberPokemon:any;
  genderPokemon:any;
  typePokemon:any[] = [];
  colorTypePokemon:any;
  movesPokemon:any[] = []
  weightPokemon:any;
  statsPokemonNumber:any[] = [];
  statsPokemonName:any[] = [];
  statsPokemonCombined:any;

  constructor(private router: Router, private pokemonService: PokemonService) { }
  ngOnInit(): void {

    const savedPokemon = localStorage.getItem('currentPokemon')
    if (savedPokemon) {
      this.pokemon = JSON.parse(savedPokemon)
      this.setPokemonDetails(this.pokemon)
    }else{
      this.pokemonService.getSinglePokemon().subscribe((res) => {
        this.pokemon = res;
        this.setPokemonDetails(this.pokemon)
        localStorage.setItem('currentPokemon',JSON.stringify(this.pokemon))
      })
    }

    // this.pokemonService.getSinglePokemon().subscribe((res) => {
    //   this.pokemon = res
    //   this.imagePokemon = this.pokemon.sprites.front_default
    // })


  }

  setPokemonDetails(pokemon:any){
    this.imagePokemon = pokemon.sprites.front_default;
    this.namePokemon = this.capitalizeFirstLetter(pokemon.name)
    this.numberPokemon = pokemon.id
    this.typePokemon = this.pokemon.types.map((typeInfo:any) => this.capitalizeFirstLetter(typeInfo.type.name))
    this.colorTypePokemon = this.getColorForType(pokemon.types[0].type.name)
    this.movesPokemon = pokemon.moves.slice(0,4).map((movesInfo:any) => this.capitalizeFirstLetter(movesInfo.move.name))
    this.weightPokemon = pokemon.weight
    

    const firstThreeStats = pokemon.stats.slice(0,3)
    this.statsPokemonName = firstThreeStats.map((nameStat:any) => this.capitalizeFirstLetter(nameStat.stat.name))
    this.statsPokemonNumber = firstThreeStats.map((numberStat:any) => numberStat.base_stat)

    this.statsPokemonCombined = this.statsPokemonName.map((name, index) => `${name}: ${this.statsPokemonNumber[index]}`).join(', ');

    console.log(this.statsPokemonNumber);
    console.log(this.statsPokemonName);
    console.log(this.statsPokemonCombined);
  }

  goToAllPokemon() {
    this.clearPokemon()
    this.router.navigate(['all-pokemon'])
  }

  clearPokemon(){
    localStorage.removeItem('currentPokemon')
  }

  capitalizeFirstLetter(name:string):string{
    return name.charAt(0).toUpperCase() + name.slice(1)
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
        break;
      case 'water':
        return '#6890f0';
        break;
      case 'grass':
        return '#78c850';
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
}

