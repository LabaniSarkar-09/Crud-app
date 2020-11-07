import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { cards } from "../models/cards";
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() card: cards;
  @Output() deleteCard: EventEmitter<cards> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {

  }
  onDelete(card){
    this.deleteCard.emit(card);
    console.log('Item Deleted');
  }

}

