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
  data = {
    d1 : "text1",
    d2 : "text2",
    d3 : "text3",
    d4 : "text4",
  };
  colorFunction() {
    return "purple";
  }
}
