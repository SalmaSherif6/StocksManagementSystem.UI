import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarketScreenComponent } from './market-screen/market-screen.component';
import { OrderScreenComponent } from './order-screen/order-screen.component';

const routes: Routes = [
  { path: 'market', component: MarketScreenComponent },
  { path: 'order', component: OrderScreenComponent },
  { path: '', redirectTo: '/market', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
