import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shard/shared.module';
import { CartComponent } from './cart/cart.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { GetProductToCollectionsComponent } from './get-product-to-collections/get-product-to-collections.component';
import { ProductListComponent } from './product-list/product-list.component';


let routes:Routes=[
 
  {path:'cart' , component: CartComponent},
  {path:'favourite' , component: FavouriteComponent},
  {path:'details/:id',component:ProductDetailsComponent},
  {path:'ProductDetails',component:ProductDetailsComponent},
  {path:'getproducttocollection',component:GetProductToCollectionsComponent},
  {path:'productlist',component:ProductListComponent}
]

@NgModule({
  declarations: [
    FavouriteComponent,
    CartComponent,
    ProductDetailsComponent,
    GetProductToCollectionsComponent,
    ProductListComponent,
    
    
  ],
  imports:[
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],

  exports:[
    RouterModule,
    FavouriteComponent,
    CartComponent,
  ]
})
export class ProductsModule { }