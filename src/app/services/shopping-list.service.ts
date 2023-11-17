import { Injectable } from '@angular/core';

export interface Item {
  name:string,
  quantity:number,
}

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  private shoppingLists: Item[][] = [];

  constructor() {}

  submitList(shoppingList: Item[]) {
    this.shoppingLists.push(shoppingList);
  }

  getShoppingLists() {
    return this.shoppingLists;
  }

}
