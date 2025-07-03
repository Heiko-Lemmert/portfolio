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
      colorLight: '#000',
      icon: 'ci-github-light',
      iconLight:'ci-github'
    },
    {
      link: '',
      color: '#007BB6',
      colorLight: '#007BB6',
      icon: 'ci-linkedin',
      iconLight:'ci-linkedin'
    },
    {
      link: 'mailto:heiko.lemmert@outlook.com',
      color: '#34A853',
      colorLight: '#34A853',
      icon: 'ci-gmail',
      iconLight: 'ci-gmail'
    },
    {
      link: '',
      color: '#C300DE',
      colorLight: '#C300DE',
      icon: 'ci-instagram',
      iconLight: 'ci-instagram'
    },
  ]
}
