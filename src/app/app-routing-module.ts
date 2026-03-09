import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UiLayout } from './layouts/ui-layout/ui-layout';
import { Home } from './ui-components/discover/home/home';

const routes: Routes = [
  //UI Routes
  {path:'',component:UiLayout,children:[
    {path:'',component:Home},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
