import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Haptics } from '@capacitor/haptics';
import { AlertController,NavController } from '@ionic/angular';
import { Item, ShoppingListService } from '../services/shopping-list.service';
import { addIcons } from 'ionicons';

import { arrowBack } from 'ionicons/icons';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.page.html',
  styleUrls: ['./shopping.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ShoppingPage implements OnInit {
  shoppingList: Item[]|undefined = [];
  itemsChecked: boolean[] = [];
  
  
  constructor( private alertController: AlertController, private navCtrl:NavController, private shoppingListService: ShoppingListService) {

    addIcons({arrowBack})
   }


  ngOnInit() {
  }

  ionViewWillEnter() {
  // stocker les listes dans le service appelé shoppingListService :
     this.shoppingList = this.shoppingListService.getShoppingLists().pop();
  }
 // Fonction appelée lorsqu'une checkbox est cliquée
 onCheckboxChange(index: number) {
  this.itemsChecked[index] = !this.itemsChecked[index];
}

// Fonction pour vérifier si tous les éléments de la liste ont été validés
allItemsChecked() {
  return this.itemsChecked.every((checked) => checked);
}

// Fonction appelée lors du clic sur le bouton "finir"
async finishShopping() {
  if (this.allItemsChecked()) {
    // Supprimer la liste ici (vous devrez ajuster en fonction de votre logique)
    this.shoppingList = [];
  } else {
    // Émettre une vibration
    await Haptics.vibrate();

    // Afficher une alerte avec les éléments oubliés
    this.presentAlert();
  }
}

// Fonction pour afficher une alerte avec les éléments oubliés
async presentAlert() {
  const alert = await this.alertController.create({
    header: 'Éléments oubliés',
    message: 'Vous avez oublié de cocher certains articles.',
    buttons: ['OK'],
  });

  await alert.present();


}
goToHome() {
  this.navCtrl.navigateRoot('/home');
}
}
