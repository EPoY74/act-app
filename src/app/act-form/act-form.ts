import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";

@Component({
  standalone: true,
  selector: 'app-act-form',
  imports: [FormsModule],
  templateUrl: './act-form.html',
  styleUrls: ['./act-form.css'],
})
export class ActForm {
  fio = '';
  address = '';


  submit() {
    console.log ("ФИО: ", this.fio);
    console.log ("Адрес: ", this.address);
  }
}
