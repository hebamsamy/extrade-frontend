import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EditUserProfile } from 'src/app/Models/EditUserProfile';
import { MarketerService } from 'src/app/service/marketer.service';

@Component({
  selector: 'app-updateprofile',
  templateUrl: './updateprofile.component.html',
  styleUrls: ['./updateprofile.component.css']
})
export class UpdateprofileComponent implements OnInit {

  @Output() toggeleSidebarForMe: EventEmitter<any> = new EventEmitter();
  id: any;
  public infmarketer: any = []
  public signupform: FormGroup = new FormGroup([]);
  public EditUserProfile: EditUserProfile = new EditUserProfile();
  constructor(private route: ActivatedRoute, private marketer: MarketerService, private Formbuilder: FormBuilder) {
    this.id = this.route.snapshot.paramMap.get("id")
  }

  ngOnInit(): void {
    this.id = localStorage.getItem("id");
    this.marketer.getmarketerById(this.id).subscribe(res => {
      console.log(res)
      this.EditUserProfile = res.data as EditUserProfile;
      this.signupform = this.Formbuilder.group({
        nameen: [this.EditUserProfile.NameEn??''],
        namear: [this.EditUserProfile.NameAr??''],
        email: [this.EditUserProfile.Email??''],
        password: [this.EditUserProfile.Password??''],
        country: [this.EditUserProfile.Country??''],
        city: [this.EditUserProfile.City??''],
        street: [this.EditUserProfile.Street??''],
        phone: [this.EditUserProfile.Phones[0]??''],
      })
    })
  }

  updatemarketer() {
    if(localStorage.getItem("id")){

      this.EditUserProfile.ID = localStorage.getItem("id")??"";
      this.marketer.updatemarketer(this.EditUserProfile).subscribe(res => {
        this.infmarketer = res
      })
    }
    else{
      alert("")
    }
  }

}
