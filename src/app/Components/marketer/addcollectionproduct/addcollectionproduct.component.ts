import { Component, OnInit } from '@angular/core';
import { MarketerService } from 'src/app/service/marketer.service';
import { HttpClient } from '@angular/common/http';
import { addcollectionViewModel } from 'src/app/Models/addcollectionViewMpdel';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CollectionService } from 'src/app/service/collection.service';
import { CollectionEditViewModel, CollectionViewModel } from 'src/app/Models/CollectionViewModel';

@Component({
  selector: 'app-addcollectionproduct',
  templateUrl: './addcollectionproduct.component.html',
  styleUrls: ['./addcollectionproduct.component.css']
})
export class AddcollectionproductComponent implements OnInit {
  // public collectionform :FormGroup = new FormGroup([]);
  public formcollection !:FormGroup;
  Collection:CollectionEditViewModel =new CollectionEditViewModel()
  constructor(private router:Router,private marketer :MarketerService ,private CollectionServices :CollectionService, private http :HttpClient ,private Formbuilder:FormBuilder ) { }

  ngOnInit(): void {
    //this. CollectionServices.getCollection().subscribe();
      // this.collectionform = this.Formbuilder.group({
      //  NameEN:[""],
      //  NameAr:[""],
      // })
      this.CollectionServices.getCollection().subscribe();
      this.formcollection=this.Formbuilder.group({
        NameEN:[""],
         NameAr:[""],
      })
   }
  add(){
    
    this.Collection.NameEN=this.formcollection.value["NameEN"];
    this.Collection.NameAr=this.formcollection.value["NameAr"];
    
    this.CollectionServices.addCollection(this.Collection).subscribe(

      res=>{
        
        console.log(res)
        this.router.navigateByUrl("/GetCollections")
      }
      );
  }
}
