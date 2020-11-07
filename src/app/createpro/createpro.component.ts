import { Component, OnInit,  EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { UserdataService } from '../userdata.service';
import { startWith, map } from 'rxjs/operators'

import { cards } from '../models/cards'
import { ActivatedRoute, Router } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-createpro',
  templateUrl: './createpro.component.html',
  styleUrls: ['./createpro.component.css']
})

export class CreateproComponent{
     profileform: FormGroup;
     pageTitle: string;

  constructor(private fromBuilder: FormBuilder, private userdataService:UserdataService,
    private router: Router, private route: ActivatedRoute, private titleService: Title) { 
      this.titleService.setTitle("Profile Details");
  } 

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.pageTitle = 'Edit Profile';
      this.userdataService.getCard(+id).subscribe(
        res => {
          this.profileform.patchValue({
            first: res.first,
            lastname: res.lastname,
            eid: res.eid,
            country: res.country,
            id: res.id,
            dob: res.dob,
            imagepath: res.imagepath
          });
        }
      );
    } else {
      this.pageTitle = 'Create Profile';
    }


    this.profileform = this.fromBuilder.group({
      id: [''],
      first:  ['',Validators.required],
      lastname: ['',Validators.required],
      eid: ['',[Validators.required, Validators.email]],
      dob: ['',Validators.required],
      country: ['Indian'],
      imagepath: ['']
    });

  }

getErrorMessageEmail(){
  if(this.profileform.get('emailid').hasError('required')){
    return 'You must enter a value in email field';
  }
  return this.profileform.get('emailid').hasError('email') ? 'Not a valid email' : '';
}
getErrorMessageFirstname(){
  if(this.profileform.get('firstname').hasError('required')){
    return 'You must enter a value in First-Name field';
  }
}
getErrorMessageLastname(){
  if(this.profileform.get('lastname').hasError('required')){
    return 'You must enter a value in Last-Name field';
  }
}
getErrorMessageDob(){
  if(this.profileform.get('dob').hasError('required')){
    return 'You must enter your Date Of Birth'
  }

}
onSelectedFile(event){
  if(event.target.files.length >0){
    const file = event.target.files[0];
    this.profileform.get('imagepath').setValue(file);
  }
}

onResetForm()
{
  this.profileform.reset();
}
onSubmit()
{

    const formData = {
    id: this.profileform.get('id').value,
    first: this.profileform.get('first').value,
    lastname: this.profileform.get('lastname').value,
    eid:  this.profileform.get('eid').value,
    dob: this.profileform.get('dob').value,
    country: this.profileform.get('country').value,
    imagepath: this.profileform.get('imagepath').value
  };
  

    const id = this.profileform.get('id').value;

    if (id) {
      this.userdataService.updateCard(formData, +id).subscribe(
        res => {
            this.router.navigate(['/']);
        },
      );
    } else {
      this.userdataService.createCard(formData).subscribe(
        res => {
            this.router.navigate(['/']); 
        },
      );
    }
  }
}



