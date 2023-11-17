import { Component } from '@angular/core';
import { IonHeader,IonToolbar,IonMenuButton,IonTitle,IonCard,IonCardHeader,IonCardTitle,IonCardSubtitle,IonCardContent } from '@ionic/angular/standalone';




@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader,IonToolbar,IonMenuButton,IonTitle,IonCard,IonCardHeader,IonCardTitle,IonCardSubtitle,IonCardContent],
})
export class HomePage {
  constructor() {
   
  }




}
