import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SociallinksService {

  constructor() { }
  socialLinks = [
    {
      link: 'https://github.com/Heiko-Lemmert',
      color: '#ffffff',
      icon: 'ci-github',
      iconLight:'ci-github-light'
    },
    {
      link: '',
      color: '#007BB6',
      icon: 'ci-linkedin'
    },
    {
      link: 'mailto:heiko.lemmert@outlook.com',
      color: '#34A853',
      icon: 'ci-gmail'
    },
    {
      link: '',
      color: '#C300DE',
      icon: 'ci-instagram'
    },
  ]
}
