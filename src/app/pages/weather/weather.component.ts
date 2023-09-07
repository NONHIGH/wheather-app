import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { WeatherData } from 'src/app/shared/interfaces/weather.interface';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.weather);
    
  }
  @Input() weather!: WeatherData;

  
}
