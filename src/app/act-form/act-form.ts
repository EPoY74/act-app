import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { JsonPipe } from "@angular/common";

import { ActPreview } from '../act-preview/act-preview';
import { Act } from "../models/act.model"

@Component({
  standalone: true,
  selector: 'app-act-form',
  imports: [FormsModule, ActPreview, JsonPipe],
  templateUrl: './act-form.html',
  styleUrls: ['./act-form.css'],
})

export class ActForm {
  fio = '';
  address = '';
  date = '';
  executor = ''
  acts: Act[] = [];

  submit() {
    // console.log ("ФИО: ", this.fio);
    // console.log ("Адрес: ", this.address);

    const newAct: Act = {
      fio: this.fio,
      address: this.address,
      date: this.date,
      executor: this.executor,
      createdAt: new Date()
    }

    this.acts.push(newAct)
    console.log('Новый акт добавлен: ', newAct)

    this.fio = '';
    this.address = '';
    this.date = '';
    this.executor = '';

  }
}
