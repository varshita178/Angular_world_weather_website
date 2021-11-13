import { Routes } from '@angular/router';
import { WeatherComponent } from './weather/weather.component';
import { Component } from '@angular/core';

export const allAppRoutes: Routes = [{ path: '', component: WeatherComponent }];
