import { Component } from '@angular/core';
import { AboutMeEnhanceComponent } from "./about-me-enhance/about-me-enhance.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-me',
  imports: [AboutMeEnhanceComponent, CommonModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
  aboutMe:string = `Hey, ich bin Heiko! 
Meine Reise in die Welt des Webentwickelns hat schon 2017 begonnen, als ich mit meinem Bruder an unserer ersten eigene Webseite gearbeitet habe. Schon damals hat mich die kreative Gestaltung von Frontends begeistert: Farben, Formen, Layouts – es war einfach cool, alles zum Leben zu erwecken und mit Code zu verbinden.

Heute bin ich Frontend-Entwickler und habe ein gutes Auge für Struktur, Usability und die neuesten Webtechnologien. Es macht mir Freude, komplexe Anforderungen in durchdachte, visuell ansprechende Interfaces zu verwandeln. Jedes Projekt bietet mir die Chance, mich weiterzuentwickeln – sei es durch neue Frameworks, anspruchsvolle Designs oder spannende Teamarbeit.

Lass uns zusammen Ideen in digitale Erlebnisse verwandeln, die begeistern.`

}
