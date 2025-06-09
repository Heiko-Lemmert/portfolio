import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SociallinksService {

  constructor() { }
  socialLinks =
    { 
      github: 'https://github.com/Heiko-Lemmert',
      linkedin: '',
      mail: 'heiko.lemmert@gmail.com',
      instagram: '',
      facebook: '',
    }
}
