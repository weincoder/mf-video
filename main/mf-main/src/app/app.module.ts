import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlbumCardComponent } from './UI/view-models/album-card/album-card.component';
import { CircularProgressIndicatorComponent } from './UI/common/circular-progress-indicator/circular-progress-indicator.component';
import { HttpClientModule } from '@angular/common/http';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { AlbumGateway } from './domain/models/Album/gateway/album-gateway';
import { AlbumApiService } from './infraestructure/driven-adapter/album-api/album-api.service';
import { AlbumApiServiceWithoutDelay } from './infraestructure/driven-adapter/album-api/album-api-withou-delay.service';

@NgModule({
  declarations: [
    AppComponent,
    AlbumCardComponent,
    EmptyRouteComponent,
    CircularProgressIndicatorComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [{ provide: AlbumGateway, useClass: AlbumApiServiceWithoutDelay }],
  bootstrap: [AppComponent],
})
export class AppModule {}
