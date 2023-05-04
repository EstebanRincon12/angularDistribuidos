import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
  })

export class GetInfo{
    
    static hostname = process.env["HOSTNAME"] || 'Unknown';
    serverDate = process.env["SERVER_DATE"] || new Date();

    static getHostName() {
        return this.hostname
      throw new Error('Method not implemented.');
    }
}