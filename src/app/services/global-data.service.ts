import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalDataService {
  readonly domain: string = 'https://heiko.lemmert.dev';
  readonly mail: string = 'heiko.lemmert@outlook.com';
  readonly address: string = `Heiko Lemmert<br>Rudolf-Diesel-Str. 11 A<br>89257 Illertissen`
  private _lightModeActivated:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
  readonly lightModeActivated$:Observable<boolean> = this._lightModeActivated.asObservable()

  constructor() { }

  // Methode, um den Wert der globalen Variable zu ändern
  setGlobalVariable(newValue: boolean) {
    this._lightModeActivated.next(newValue);
  }

  // Optional: Methode, um den aktuellen Wert direkt abzurufen (aber reaktiver Ansatz bevorzugt)
  getGlobalVariable(): boolean {
    return this._lightModeActivated.getValue();
  }
}
