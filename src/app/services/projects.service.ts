import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor() { }

  projectsList = [
    {
      name: 'Crused Kingdom',
      description: 'projects.project-cursed-kingdom',
      repositorie: 'https://github.com/Heiko-Lemmert/cursed_kingdom',
      live: '',
      techstack: ['JavaScript', 'HTML', 'CSS'],
      cover: '/images/projects/crused-kingdom.png'
    },
    {
      name: 'Join',
      description: 'projects.project-join',
      repositorie: 'https://github.com/Heiko-Lemmert/join-project',
      live: '',
      techstack: ['JavaScript', 'HTML', 'CSS', 'Firebase'],
      cover: '/images/projects/join.png'
    },
    {
      name: 'PokeDex',
      description: 'projects.project-pokedex',
      repositorie: 'https://github.com/Heiko-Lemmert/PokeDex',
      live: '',
      techstack: ['JavaScript', 'HTML', 'CSS', 'API'],
      cover: '/images/projects/pokedex.png'
    },
    {
      name: 'Upcoming Project',
      description: 'projects.projet-upcoming',
      repositorie: '#',
      live: '#',
      techstack: ['Angular', 'TypeScript', 'CSS'],
      cover: '/images/projects/next-project.jpg'
    }
  ]
}
