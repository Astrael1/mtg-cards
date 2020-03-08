import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsComponent } from './components/cards/cards.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { MessagesComponent } from './components/messages/messages.component';

import { from } from 'rxjs';
import { AdvancedCardSearchComponent } from './components/advanced-card-search/AdvancedCardSearchComponent';

@NgModule({
  declarations: [
    AppComponent,
    CardListComponent,
    CardsComponent,
    MessagesComponent,
    AdvancedCardSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
