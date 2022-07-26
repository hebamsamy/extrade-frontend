
import { MarketerMainLayoutComponent } from './layout/marketer/marketer-main-layout/marketer-main-layout.component';
import { UserMainLayoutComponent } from './layout/user/user-main-layout/user-main-layout.component';
import { MarketerPageComponent } from './Components/marketer-page/marketer-page.component';
import { AddcollectionproductComponent } from './Components/marketer/addcollectionproduct/addcollectionproduct.component';
import { ProductincollectionComponent } from './Components/marketer/productincollection/productincollection.component';
import { WalletComponent } from './Components/marketer/wallet/wallet.component';
import { ProtuctchossebymarketerComponent } from './Components/marketer/protuctchossebymarketer/protuctchossebymarketer.component';
import { GetCollectionsComponent } from './Components/get-collections/get-collections.component';
import { GetProductToCollectionsComponent } from './Components/Products/get-product-to-collections/get-product-to-collections.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { LoginComponent } from './Components/account/login/login.component';
import { MarketerSignupComponent } from './Components/account/marketer-signup/marketer-signup.component';
import { SignupComponent } from './Components/account/signup/signup.component';
import { CartComponent } from './Components/Products/cart/cart.component';
import { FavouriteComponent } from './Components/Products/favourite/favourite.component';
import { ProductDetailsComponent } from './Components/Products/product-details/product-details.component';
import { HomepageComponent } from './Components/Products/homepage/homepage.component';
import { UpdateprofileComponent } from './Components/marketer/updateprofile/updateprofile.component';

const routes: Routes = [
  {path:"",redirectTo:"user",pathMatch:"full"},
  {
    path: 'marketer',
    component: MarketerMainLayoutComponent,
    children: [
      { path: '', component: MarketerPageComponent},
      { path:'addcollectionproduct',component:AddcollectionproductComponent},
      {path:'productincollection',component:ProductincollectionComponent},
      {path:'wallet',component:WalletComponent},
      {path:'chooseproduct',component:ProtuctchossebymarketerComponent},
      {path:"GetCollections",component:GetCollectionsComponent},
      {path:"addToCollections/:id",component:GetProductToCollectionsComponent},
      {path:'updateprofile' ,component:UpdateprofileComponent}
    ]
  },
  {
    path: 'user',
    component: UserMainLayoutComponent,
    children: [
      { path: '', component: HomepageComponent },
      {path:'login',component:LoginComponent},
      {path:'marketersignup',component:MarketerSignupComponent},
      {path:'signup',component:SignupComponent},
      {path:'cart',component:CartComponent},
      {path:'favourite',component:FavouriteComponent},
      {path:'get-product-to-collection',component:GetProductToCollectionsComponent},
      {path:'productdetails',component:ProductDetailsComponent},
      
      
    ]
  },
  {
    path: 'account', 
    loadChildren: () => import('./Components/account/account.module').then(m => m.AccountModule)
  },
  {path:'**',component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
