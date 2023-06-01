import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogConsoleService {
  write(logMessage: string) {
    console.log(logMessage);
  }
}
