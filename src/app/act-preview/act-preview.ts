import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-act-preview',
  imports: [],
  templateUrl: './act-preview.html',
  styleUrl: './act-preview.css',
})
export class ActPreview {
  @Input() fio = '';
  @Input() address = '';
  @Input() date = '';
  @Input() executor =  '';
}
