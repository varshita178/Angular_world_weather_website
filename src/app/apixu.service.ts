import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {
  constructor(private http: HttpClient) {}

  getWeather(location) {
    return this.http.get(
      'http://api.weatherstack.com/current?access_key=64ce33ccb9fe845efd36e11c081a80a8&query=New%20York' +
        location
    );
  }
}
