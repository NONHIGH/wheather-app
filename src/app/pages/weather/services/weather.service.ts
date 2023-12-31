import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Coord, WeatherData } from 'src/app/shared/interfaces/weather.interface';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class WeatherService {
  private readonly API_URL: string = environment.openWeather.url;

  constructor(private readonly http: HttpClient) {}

  public getWeatherByName(city: string): Observable<WeatherData> {
    const params = new HttpParams()
      .set('q', city)
    return this.http.get<WeatherData>(`${this.API_URL}weather`, { params });
  }
  public getWeatherByCoords(coord: Coord): Observable<WeatherData> {
    const params = new HttpParams()
        .set('lat', coord.latitude)
        .set('lon', coord.longitude)
    return this.http.get<WeatherData>(`${this.API_URL}/weather`, { params })
  }
}
