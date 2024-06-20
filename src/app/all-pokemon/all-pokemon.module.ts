import { NgModule } from "@angular/core";
import { AllPokemonComponent } from "./all-pokemon.component";
import { AllPokemonRoutingModule } from "./all-pokemon-routing.module";
import { CommonModule } from "@angular/common";
import { MatTableModule } from "@angular/material/table";
import { MatIconModule } from "@angular/material/icon";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations:[AllPokemonComponent],
    imports:[AllPokemonRoutingModule,CommonModule,MatTableModule,MatIconModule,FormsModule],
    exports:[AllPokemonComponent]
})
export class AllPokemonModule{}