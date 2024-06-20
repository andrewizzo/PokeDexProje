import { NgModule } from "@angular/core";
import { DetailPokemonComponent } from "./detail-pokemon.component";
import { DetailPokemonRoutingModule } from "./detail-pokemon-routing.module";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations:[DetailPokemonComponent],
    imports:[DetailPokemonRoutingModule,CommonModule],
    exports:[DetailPokemonComponent]
})
export class DetailPokemonModule{}