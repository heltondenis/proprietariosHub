import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ImoveisComponent } from './imoveis.component';



const routes: Routes = [
  { path: '', component: ImoveisComponent }, // Atenção: Aqui usamos '' pois '/imoveis' já está definido no app-routing
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ImoveisModule {}
