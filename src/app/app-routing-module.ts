import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UiLayout } from './layouts/ui-layout/ui-layout';
import { Home } from './ui-components/discover/home/home';
import { TopCharts } from './ui-components/charts/top-charts/top-charts';

const routes: Routes = [
  //UI Routes
  {path:'',component:UiLayout,children:[
    {path:'',component:Home},
    {path:'charts',component:TopCharts},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{bindToComponentInputs:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
