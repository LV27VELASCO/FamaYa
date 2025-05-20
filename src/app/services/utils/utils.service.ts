import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  generarId(): string {
    return ('id-' + Math.random().toString(36).substring(2, 9) + '-' + Date.now()).trim();
  }

  convertNumber(number:string):number{
    return Number.parseInt(number)
  }

}
