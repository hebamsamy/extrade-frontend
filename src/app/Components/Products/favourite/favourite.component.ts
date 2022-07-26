import { Component, OnInit } from '@angular/core';
import { faviourtService } from 'src/app/service/faviourt.service';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {

  public products:any=[];
   
    constructor(private faviourtService:faviourtService ) { }
  
    ngOnInit(): void {
      this.faviourtService.getProducts().subscribe(res=>{
        this.products=res;
             
      })
    }
    removeitem(item :any){
      this.faviourtService.removeCartItem(item);
    }
    emptycart(){
      this.faviourtService.removeAllCart();
    }
    }

