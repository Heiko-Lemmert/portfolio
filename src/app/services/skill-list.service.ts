import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SkillListService {

  constructor() { }

  skillList = [
    {
      name: 'HTML',
      icon: 'ci-html',
      colored: '#f0662b'
    },
    {
      name: 'CSS',
      icon: 'ci-css',
      colored: '#1673b5'
    },
    {
      name: 'JavaScript',
      icon: 'ci-javascript',
      colored: '#f0db4f'
    },
    {
      name: 'TypeScript',
      icon: 'ci-typescript',
      colored: '#3178c6'
    },
    {
      name: 'Angular',
      icon: 'ci-angular',
      colored: '#cb0c97'
    },
    {
      name: 'Tailwind',
      icon: 'ci-tailwindcss',
      colored: '#38bdf8'
    },
    {
      name: 'Bootstrap',
      icon: 'ci-bootstrap',
      colored: '#8712fb'
    },
    {
      name: 'Firebase',
      icon: 'ci-firebase',
      colored: '#ffa000'
    },
    {
      name: 'Scrum',
      icon: 'ci-scrum',
      colored: '#1f7cbf'
    },
    {
      name: 'Rest Api',
      icon: 'ci-rest-api',
      colored: '#9d9d9dad'
    },
    {
      name: 'Git',
      icon: 'ci-git',
      colored: '#f03c2e'
    },
    {
      name: 'Github',
      icon: 'ci-github',
      colored: '#9d9d9dad'
    },
    {
      name: 'VS Code',
      icon: 'ci-vscode',
      colored: '#24adf3'
    },
    {
      name: 'Growth Mindset',
      icon: 'ci-mindset',
      colored: '#34d29b'
    },
  ]
}
