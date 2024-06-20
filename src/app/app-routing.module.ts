import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'all-pokemon',
    loadChildren: () => import('./all-pokemon/all-pokemon.module').then(a => a.AllPokemonModule),
  },
  {
    path:'detail-pokemon',
    loadChildren: () => import('./detail-pokemon/detail-pokemon.module').then(d => d.DetailPokemonModule),
  },
  {
    path:'',redirectTo:'/all-pokemon',pathMatch:'full'
  },
  {
    path:'**',redirectTo:'/all-pokemon'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
