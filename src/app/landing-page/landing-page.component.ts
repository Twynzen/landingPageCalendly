import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {

  text: string = 'Conozca a Sandra Patricia Fajardo, nuestra entrenadora personal especializada en ayudarle a alcanzar sus objetivos de fitness. Con su experiencia y conocimientos, Sandra le guiará en su viaje hacia unavida más saludable y activa, desarrollando un plan de entrenamiento personalizado para bajarde peso, tonificarsus músculos y mejorar su capacidad física. Además, le brindaráasesoramiento y apoyo para desarrollar hábitos de vida saludable y duraderos. ¡Agende una sesión de evaluación gratuita con Sandra hoy mismo y comience su camino hacia el éxito en el fitness!';
  url: string = 'https://calendly.com/darmcas';

  redirectSchedule(){
    window.location.replace('https://calendly.com/darmcas');
    // window.location.replace('https://www.google.com/');

  }
}
