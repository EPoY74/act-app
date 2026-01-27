import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ActForm } from './act-form/act-form';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ActForm],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('act-app');
}
