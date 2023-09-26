import { Component } from '@angular/core';
import { Item } from './item.model';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
})
export class ItemListComponent {
  itemList: Item[] = [];

  addItem() {
    const newItem = new Item();
    this.itemList.push(newItem);
  }

  calculateTotal(item: Item) {
    item.total = item.quantity * item.price;
  }

  deleteItem(index: number) {
    this.itemList = this.itemList.filter((ele, i) => i != index);
  }
}
