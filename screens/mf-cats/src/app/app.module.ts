import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { CircularProgressIndicatorComponent } from './UI/common/circular-progress-indicator/circular-progress-indicator.component';
import { AnotherComponent } from './UI/pages/another/another.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CatGateway } from './domain/models/Cat/gateway/cat-gateway';
import { CatApiServiceWithoutDelay } from './infraestructure/driven-adapter/cat-api/cat-api-withou-delay.service';
import { InfoComponent } from './UI/common/info/info.component';
import { BuyComponent } from './UI/common/buy/buy.component';
import { SuccessComponent } from './UI/common/success/success.component';

@NgModule({
  declarations: [
    AppComponent,
    EmptyRouteComponent,
    CircularProgressIndicatorComponent,
    AnotherComponent,
    InfoComponent,
    BuyComponent,
    SuccessComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, RouterModule],
  providers: [{ provide: CatGateway, useClass: CatApiServiceWithoutDelay }],
  bootstrap: [AppComponent],
})
export class AppModule {}
