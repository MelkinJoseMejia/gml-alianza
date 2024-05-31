import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListClienteComponent } from './components/list-cliente/list-cliente.component';
import { ListskClienteComponent } from './components/listsk-cliente/listsk-cliente.component';
import { AddClienteComponent } from './components/add-cliente/add-cliente.component';

const routes: Routes = [
  { path: '', redirectTo: 'clientes', pathMatch: 'full' },
  { path: 'clientes', component: ListClienteComponent },
  { path: 'clientes/:id', component: ListskClienteComponent },
  { path: 'add', component: AddClienteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
