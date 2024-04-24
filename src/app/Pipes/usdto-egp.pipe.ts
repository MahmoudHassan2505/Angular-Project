import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uSDtoEGP'
})
export class USDtoEGPPipe implements PipeTransform {

  transform(value:number): number {
    return value/50;
  }

}