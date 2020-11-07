import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { cards } from "../models/cards";
import { UserdataService } from '../userdata.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   card:cards[];

  constructor(private userdataService:UserdataService, private titleService:Title) { 
    this.titleService.setTitle("Home");
  }


  ngOnInit(){
   this.userdataService.getData().subscribe(cards =>{
     this.card = cards;
   });

  }
  deleteCard(card){
    this.userdataService.deleteCard(card).subscribe(res =>{
      console.log(res);
      this.ngOnInit();
    })
  }
  
  }



