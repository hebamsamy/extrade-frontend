// import { Component, EventEmitter, OnInit, Output } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { ApiService } from 'src/app/service/api.service';
// import { CollectionService } from 'src/app/service/collection.service';

// @Component({
//   selector: 'app-collection',
//   templateUrl: './collection.component.html',
//   styleUrls: ['./collection.component.css']
// })
// export class CollectionComponent implements OnInit {
//   @Output() toggeleSidebarForMe :  EventEmitter<any> =new EventEmitter();
//   listcollection :any =[] ;
//   collectionproduct :any =[];
//   loading: boolean=true;
//   id:any;
//   constructor(private route:ActivatedRoute ,private collection :CollectionService) {
//     this.id =this.route.snapshot.paramMap.get("id")
//   }

//   ngOnInit(): void {
//     this.getcollection(),
//     this.getproduct()
//   }

//   toggleSidebar(){
//     this.toggeleSidebarForMe.emit()
//     }
//   getcollection(){
//     this.loading=true;
//     this.collection.getCollection().subscribe(res=>{
//     console.log(res)
//     this.listcollection =res;
//     this.loading=false;

//     });
//   }
//     getproduct(){
//       this.loading=true;
//     this.collection.getproduct().subscribe(res=>{
//       console.log(res)
//       this.collectionproduct =res;
//       this.loading=false;
  
//       });

//   }
//   addcollection()
//   {
//     this.loading=true;
//     this.collection.addcollection().subscribe(res=>{
//       console.log(res)
//       this.collectionproduct =res;
//       this.loading=false;
  
//   }
//     )}
// }
