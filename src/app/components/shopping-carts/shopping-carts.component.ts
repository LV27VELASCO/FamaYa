import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-shopping-carts',
  imports: [],
  templateUrl: './shopping-carts.component.html',
})
export class ShoppingCartsComponent {
    @Input() shoppingCart:boolean=false
    @Output() closeShCart = new EventEmitter<boolean>()

    closeShopingCart(){
      this.closeShCart.emit(false);
    }

}
