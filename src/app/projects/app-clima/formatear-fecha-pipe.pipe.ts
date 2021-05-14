import { Pipe, PipeTransform } from '@angular/core';
import { WeatherService } from '../../service/weather.service';

@Pipe({
  name: 'formatearFecha'
})
export class FormatearFechaPipe implements PipeTransform {

  constructor(private weatherService: WeatherService) { }

  transform(value: string): string {
    return this.weatherService.parsearFecha(value);
  }

}
