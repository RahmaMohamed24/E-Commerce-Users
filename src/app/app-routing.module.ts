import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductComponent } from './products/Components/all-product/all-product.component';
import { ProductDetailsComponent } from './products/Components/product-details/product-details.component';
import { CartsComponent } from './card/Components/carts/carts.component';

const routes: Routes = [
  { path: 'Products', component: AllProductComponent },
  { path: 'details/:id', component:  ProductDetailsComponent},
  { path: 'carts', component: CartsComponent },

  { path: '**', redirectTo:'/Products', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
