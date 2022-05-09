import { Component } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [],
})
export class BasicsComponent {
  nameLowercase = 'john doe';
  nameUppercase = 'JOHN DOE';
  nameCapitalize = 'John Doe';

  currentDate: Date = new Date();
}
