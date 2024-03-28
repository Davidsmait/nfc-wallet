import { Component } from '@angular/core';
import {IonApp, IonHeader, IonRouterOutlet, IonTitle, IonToolbar} from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet, IonHeader, IonTitle, IonToolbar],
})
export class AppComponent {
  constructor() {}
}
