import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductComponent } from './Components/all-product/all-product.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { ProductComponent } from './Components/product/product.component';
import { ProductService } from './service/product.service';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AllProductComponent,
    ProductDetailsComponent,
    ProductComponent,
    
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FormsModule
  ],
  exports:[
    AllProductComponent,ProductComponent,ProductDetailsComponent
  ],
  providers: [
    ProductService // Ensure the service is provided
  ]
})
export class ProductsModule { }
