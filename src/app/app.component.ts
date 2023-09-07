import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherData } from './shared/interfaces/weather.interface';
import { WeatherService } from './pages/weather/services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  constructor(private readonly weatherService: WeatherService){

  }
  public weather$!: Observable<WeatherData>;

  public onSearch(city: string): void {
    this.weather$ = this.weatherService.getWeatherByName(city);
    
    // this.weather$ = search
  }
}
