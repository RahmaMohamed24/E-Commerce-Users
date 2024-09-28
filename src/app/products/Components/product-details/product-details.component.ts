import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductComponent } from '../product/product.component';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit{

  id:any
  data:any = {}
  loading:boolean = false
constructor(private route :ActivatedRoute,private service:ProductService,private router:Router) {
  //id  param  الا انا عاوزه اجيبه
this.id = route.snapshot.paramMap.get("id")
}
  ngOnInit(): void {
    this.getProduct()
  }
  getProduct(){
  this.loading = true
this.service.getProductById(this.id).subscribe(res=>
{
  this.loading = false
  this.data=res
},error => {
  this.loading = false
  alert(error)
}
)
  }
  
    goHome() {
      this.router.navigate(['/Products']);
    }
  
}
