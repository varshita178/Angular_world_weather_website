import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { allAppRoutes } from './routes';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ApixuService } from './apixu.service';

@NgModule({
  declarations: [AppComponent, WeatherComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(allAppRoutes),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ApixuService],
  bootstrap: [AppComponent]
})
export class AppModule {}
