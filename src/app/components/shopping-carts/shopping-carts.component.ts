import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartService } from '../../services/shoppingCart/cart-service.service';
import { Product } from '../../interface/models';

@Component({
  selector: 'app-shopping-carts',
  imports: [],
  templateUrl: './shopping-carts.component.html',
})
export class ShoppingCartsComponent {
    @Input() shoppingCart:boolean=false
    @Output() closeShCart = new EventEmitter<boolean>();
    productsCart:Product[]=[];

    constructor(private cartService:CartService){

    }

    closeShopingCart(){
      this.closeShCart.emit(false);
    }

    getProducts(){
      this.productsCart = this.cartService.getProducts();
    }

    removeItem(id:string){
      this.cartService.removeFromCart(id);
      this.getProducts()
    }

    getTotal(){
      return this.cartService.getTotal();
    }

}
