import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { error } from 'console';
import { Product } from '../../Models/product';

@Component({
  selector: 'app-all-product',
  templateUrl: './all-product.component.html',
  styleUrls: ['./all-product.component.css']
})
export class AllProductComponent implements OnInit {
  Products:Product[] = [];
  categories : string[] = [];
  loading:Boolean = false;
CartProducts:any[] =[];
  constructor(private service: ProductService) {}

  ngOnInit(): void {
    this.getAllProducts();
    this.getCategories();
  }

  getAllProducts(): void {
    this.loading = true;
    this.service.getAllProducts().subscribe((res: any) => {
      this.Products = res; // Make sure to assign the response to Products
      this.loading = false;
    },error => {
      alert('Error fetching Products: ' + error);
  });
  }
  getCategories(): void {
    this.loading = true;
    this.service.getAllCategories().subscribe(
      
      (res: any) => {
        this.categories = res;
        this.loading = false;
        console.log(res);
      },
      error => {
        alert('Error fetching categories: ' + error);
        this.loading = false;
      }
    );
  }
  filterProduct(event: any) {
    
    //عشان احدد القيمه
    let value = event.target.value;
    if (value === 'all') {
      this.getAllProducts();
    } else {
      this.getProductWithCategory(value);
    
    }
  }

  getProductWithCategory(keyword: string) {
    this.loading = true;
    this.service.getProductByCategory(keyword).subscribe(
      res => {
        //هبعته القيمه الجديده ل  array
        this.Products = res;
       this.loading = false;
      },
      error => {
        alert('Error fetching products by category: ' + error);
        this.loading = false;
      }
    );
  }
  addToCart(event:any){
    //JSON.stringify(event)  احفظلي الداتا زي ما انا بعتها
    //JSONزParse  اعرضها زي ما هي محفوظه
    if("cart" in localStorage){
      //هيجيب الداتا من ال  localstorage
      this.CartProducts=JSON.parse(localStorage.getItem("cart")!)
      let Exit= this.CartProducts.find(item => item.item.id == event.item.id)
      if(Exit){
        alert("This Product Already Added To Cart");
      }else{
        this.CartProducts.push(event)
        localStorage.setItem("cart",JSON.stringify(this.CartProducts))
      }
      
    }else{
      //كده مش موجوده في  localStoradge هيعملها  push  من الاول
      this.CartProducts.push(event)
      localStorage.setItem("cart",JSON.stringify(this.CartProducts))
    }


  }
}
