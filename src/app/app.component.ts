import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Project2';
  mrngMsg: string = "Good Morning";
  noonMsg: string = "Good Afternoon";
  displayMsg: string = "";
  evenOrOdd: string = "even";

  showMrngMsg() {
    this.displayMsg = ", "+this.mrngMsg;
  }
  showNoonMsg() {
    this.displayMsg = ", "+this.noonMsg;
  }

  count = 0;
  incrementFn() {
    this.count++;
    this.showNature();
  }
  decrementFn() {
    this.count--;
    this.showNature();
  }
  showNature() {
    this.evenOrOdd = this.count%2 == 0 ? "even" : "odd";
  }
}
