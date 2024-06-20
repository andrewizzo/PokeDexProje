import { RouterModule, Routes } from "@angular/router";
import { AllPokemonComponent } from "./all-pokemon.component";
import { NgModule } from "@angular/core";

const routes : Routes = [
    {
        path:'',
        component:AllPokemonComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllPokemonRoutingModule{}