import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../Models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  addButton:boolean=false;
  amount:number=0
  @Input() data!:Product
  @Output() item = new EventEmitter()
  add(){
    //هبعتله  item  الا انا واقف عليه الا هو  data
    this.item.emit({item:this.data ,quantity:this.amount })
  }
}
