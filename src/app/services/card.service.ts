import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import {Card, Cards} from 'scryfall-sdk';


@Injectable({providedIn: 'root'})

export class CardService {

  constructor( private messageService: MessageService) { }

  getCards(query: string): Promise<Card[]>
  {
    return Cards.search(query)
      .on("end", ()=> this.messageService.add("cards found"))
      .waitForAll();
  }

}
