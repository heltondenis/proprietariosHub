import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome.component';


const routes: Routes = [
  { path: '', component: WelcomeComponent }, // Atenção: Aqui usamos '' pois '/imoveis' já está definido no app-routing
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class WelcomeModule {
  
}
