import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { BuyComponent } from './UI/common/buy/buy.component';
import { InfoComponent } from './UI/common/info/info.component';
import { SuccessComponent } from './UI/common/success/success.component';
import { AnotherComponent } from './UI/pages/another/another.component';

const routes: Routes = [
  {
    path: 'mf-cats',
    component: AnotherComponent,
    children: [
      { path: 'info', component: InfoComponent },
      { path: 'buy', component: BuyComponent },
      { path: 'success', component: SuccessComponent },
    ],
  },
  { path: '**', component: EmptyRouteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
})
export class AppRoutingModule {}
