import { Component} from '@angular/core';
import { IonHeader,IonToolbar,IonMenuButton,IonTitle,IonCard,IonCardHeader,IonCardTitle,IonCardSubtitle,IonCardContent,IonMenu,IonContent,IonLabel,IonIcon,IonMenuToggle,IonList,IonRouterOutlet } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { addIcons } from 'ionicons';
import { create,cart } from 'ionicons/icons'
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonHeader,IonToolbar,IonMenuButton,IonTitle,IonCard,IonCardHeader,IonCardTitle,IonCardSubtitle,IonCardContent,IonMenu,IonContent,IonLabel,IonIcon,IonMenuToggle,IonList,IonRouterOutlet ,RouterLink,CommonModule],
})
export class AppComponent {
  constructor(private navCtrl:NavController) {

    addIcons({cart, create});
  }

  goToCreateListPage() {
    this.navCtrl.navigateForward('/create-list'); 
  }

  goToShoppingPage() {
    this.navCtrl.navigateForward('/shopping'); 
  }
  public appPages:Page[]=[
    {title:'Créer-une-liste',url:'/create-list',icon:'create'},
    {title:'Shopping',url:'/shopping',icon:'cart'}
    ]
  
}
  
  export interface Page {
  
    title:string,
    url:string,
    icon?:string,
  }

