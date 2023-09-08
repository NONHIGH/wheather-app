import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Coord, WeatherData } from './shared/interfaces/weather.interface';
import { WeatherService } from './pages/weather/services/weather.service';
import { GeoLocationService } from './shared/services/geo-location.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  constructor(
    private readonly weatherService: WeatherService, 
    private readonly geoLocationService: GeoLocationService){
      if(navigator?.geolocation){
        this.getLocation()
      }
  }
  public weather$!: Observable<WeatherData>;

  public onSearch(city: string): void {
    this.weather$ = this.weatherService.getWeatherByName(city);
  }
  private async getLocation(): Promise<void>{
    try {
      const result = await this.geoLocationService.getCurrentPosition();
      console.log(result);
      this.weather$ = this.weatherService.getWeatherByCoords(result.coords);
      
      
      
    } catch (error) {
      console.log(error);
    }
    
  }
}
