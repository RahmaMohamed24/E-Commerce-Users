import { Component } from '@angular/core';
import { CartService } from '../../Service/cart.service';
import { Product } from '../../../products/Models/product';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrl: './carts.component.css'
})
export class CartsComponent {
  constructor(private service:CartService) { }
  cartProducts:any[] = [];
  total:number = 0;
  success:boolean = false
  ngOnInit(): void {
    this.getCartProducts()
  }


  getCartProducts() {
    if("cart" in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem("cart")!)
    }
    this.CartTotal()
  }
CartTotal(){
  this.total=0
  for(let x in this.cartProducts){
    this.total += this.cartProducts[x].item.price * this.cartProducts[x].quantity ;
  }
}
minsAmount(index:number){
this.cartProducts[index].quantity--
this.CartTotal()
localStorage.setItem("cart",JSON.stringify(this.cartProducts))
}
PlusAmount(index:number){
  this.cartProducts[index].quantity++
  this.CartTotal()
  localStorage.setItem("cart",JSON.stringify(this.cartProducts))
  }
  //detect input changes
  detectChange(){
    localStorage.setItem("cart",JSON.stringify(this.cartProducts))
  }
  //delete Product
  deleteProduct(index:number) {
    this.cartProducts.splice(index , 1)
    this.CartTotal()
    localStorage.setItem("cart" , JSON.stringify(this.cartProducts))
  }
  ClearCart(){
    this.cartProducts=[]
    this.CartTotal()
    localStorage.setItem("cart" , JSON.stringify(this.cartProducts))
  }
  addCart(){
    //map  بترجعلي  array  جديده
    let products = this.cartProducts.map(item => {
      return {productId:item.item.id , quantity:item.quantity}
     })

    let Model = {
      userId:5,
      date: new Date(),
      products:products
    }
    this.service.createNewCart(Model).subscribe(res => {
      this.success = true
    })
    console.log(Model)
  }
}
