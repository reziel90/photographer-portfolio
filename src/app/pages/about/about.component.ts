import { Component } from '@angular/core';

/**
 * About page component. Presents a biography and artistic philosophy
 * inspired by fine art photographer Jovana Rikalo, whose ethereal images combine
 * models with nature to create emotional stories【960980889287577†L84-L93】.
 */
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  bio: string = `Photography is more than a craft — it’s a language of feelings. Our
  work blends people with natural scenes to create ethereal images full of
  beauty and emotion, drawing inspiration from life, people and nature【960980889287577†L84-L93】.`;
  philosophy: string = `We believe magic happens when we connect. Through our art
  we invite you to step into new worlds where reality and imagination collide
  — worlds in which you can find yourself and your own stories.`;
}