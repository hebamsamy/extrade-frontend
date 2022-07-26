import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarketerMainLayoutComponent } from './layout/marketer/marketer-main-layout/marketer-main-layout.component';
import { SideNavTogglerComponent } from './layout/marketer/side-nav-toggler/side-nav-toggler.component';
import { SideNavComponent } from './layout/marketer/side-nav/side-nav.component';
import { TopNavComponent } from './layout/marketer/top-nav/top-nav.component';
import { FooterComponent } from './layout/user/footer/footer.component';
import { UserMainLayoutComponent } from './layout/user/user-main-layout/user-main-layout.component';
import { LandingPageComponent } from './Components/landing-page/landing-page.component';
import { MarketerPageComponent } from './Components/marketer-page/marketer-page.component';
import { NavComponent } from './layout/user/nav/nav.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GetCollectionsComponent } from './Components/get-collections/get-collections.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { PageContentComponent } from './layout/page-content/page-content.component';
import { SharedModule } from './shard/shared.module';
import { HomepageComponent } from './Components/Products/homepage/homepage.component';
import { WalletComponent } from './Components/marketer/wallet/wallet.component';
import { ProductincollectionComponent } from './Components/marketer/productincollection/productincollection.component';
import { ProtuctchossebymarketerComponent } from './Components/marketer/protuctchossebymarketer/protuctchossebymarketer.component';
import { AddcollectionproductComponent } from './Components/marketer/addcollectionproduct/addcollectionproduct.component';
import { UpdateprofileComponent } from './Components/marketer/updateprofile/updateprofile.component';

@NgModule({
  declarations: [
    AppComponent,
    MarketerPageComponent,
    SideNavComponent,
    SideNavTogglerComponent,
    TopNavComponent,
    MarketerMainLayoutComponent,
    LandingPageComponent,
    FooterComponent,
    NavComponent,
    UserMainLayoutComponent,
    GetCollectionsComponent,
    NotfoundComponent,
    PageContentComponent,
    HomepageComponent,
    WalletComponent,
    ProductincollectionComponent,
    ProtuctchossebymarketerComponent,
    AddcollectionproductComponent,                                                                                                                                                                                                                                                     
   UpdateprofileComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
