import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { CashButtonsComponent } from './cash-buttons/cash-buttons.component';
import { HeaderComponent } from './header/header.component';
import { SelectedNumbersComponent } from './selected-numbers/selected-numbers.component';
import { ModalComponent } from './modal/modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CashButtonsComponent,
    HeaderComponent,
    SelectedNumbersComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule { }
