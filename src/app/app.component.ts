import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Project2';
  data:string = "test string";
  intValue:number = 0;
  tempVal:number=0;
  output:string="even";

  checkValue() {
    this.tempVal = this.intValue;
    this.output = this.intValue%2 == 0 ? "even" : "odd";
  }
}
