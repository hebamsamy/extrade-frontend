
// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup } from '@angular/forms';
// import { Router } from '@angular/router';
// import { CollectionEditViewModel, CollectionViewModel } from 'src/app/Models/CollectionViewModel';
// import { CollectionService } from 'src/app/service/collection.service';

// @Component({
//   selector: 'app-collection',
//   templateUrl: './collection.component.html',
//   styleUrls: ['./collection.component.css']
// })
// export class CollectionComponent implements OnInit {

//   Collection:CollectionEditViewModel =new CollectionEditViewModel()
//   url:string = ""
//   CollectionForm:FormGroup=new FormGroup([]);
//   constructor(private formBuilder:FormBuilder ,private CollectionServices :CollectionService ,private route:Router ) { }

//   ngOnInit(): void {
//    //this. CollectionServices.getCollection().subscribe();
//      this.CollectionForm = this.formBuilder.group({
//       NameEN:[""],
//       NameAr:[""],
//      })
//   // 
//   add(){
    
//     this.Collection.NameEN=this.CollectionForm.value["NameEN"];
//     this.Collection.NameAr=this.CollectionForm.value["NameAr"];
    
//     this.CollectionServices.addCollection(this.Collection).subscribe(

//       res=>{
        
//         console.log(res)
//         this.route.navigateByUrl("/GetCollections")
//       }
//       );
//   }
// }
