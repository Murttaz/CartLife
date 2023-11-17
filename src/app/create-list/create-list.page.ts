import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { Item, ShoppingListService } from '../services/shopping-list.service';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem,IonInput,IonLabel,IonSelect,IonButton,IonSelectOption } from '@ionic/angular/standalone';
import { NavController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {LocalNotificationSchema, LocalNotifications } from '@capacitor/local-notifications';
import { addIcons } from 'ionicons';
import { arrowBack } from 'ionicons/icons';

@Component({
  selector: 'app-create-list',
  templateUrl: 'create-list.page.html',
  styleUrls: ['create-list.page.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  standalone: true,
  imports: [IonHeader,IonContent,IonTitle,IonToolbar,IonList, IonItem,IonInput,IonLabel,IonSelect,IonButton,IonSelectOption, CommonModule,FormsModule],
})
export class CreateListPage {
  shoppingList: Item[]=[];
 
  
  ngOnInit(){
   
  }

  constructor(private shoppingListService: ShoppingListService, private navCtrl:NavController) {
  addIcons({arrowBack})
}
  //ajout d'une ligne d'item
  addItem() {
    this.shoppingList.push({ name: '', quantity: 1 });
  }
// suppressio d'une ligne d'item
  removeItem(item:{ name:string; quantity:number}) {
    const index = this.shoppingList.indexOf(item);
    if (index > -1) {
      this.shoppingList.splice(index, 1);
    }
  }

  submitList() {
    // Vérifier si la liste a au moins un élément
    if (this.shoppingList.length > 0) {
      // Utiliser le service pour soumettre la liste
      this.shoppingListService.submitList(this.shoppingList);
      // Réinitialiser la liste après soumission
      this.shoppingList = [];
      //envoie une notification
      this.sendNotification();
    } else {
      // Afficher une alerte si la liste est vide
      alert('La liste ne peut pas être vide');
    }
  }

  


  async sendNotification() {

    await LocalNotifications.requestPermissions();

    const notif: LocalNotificationSchema = {
      title: 'Nouvelle Liste Disponible',
      body: 'Une nouvelle liste de courses est disponible. Cliquez pour voir!',
      id: 0,
    
    };
    
    await LocalNotifications.schedule({notifications:[notif]})
  }

  
  //retour à l'accueil
  goToHome() {
    this.navCtrl.navigateRoot('/home');
  }
}
