import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Project2';
  fruits: Fruits[] = [
    {name: 'Mango', price:50},
    {name: 'Apple', price:50},
    {name: 'Grape', price:50},
    {name: 'Guava', price:50},
    {name: 'Papaya', price:50}
  ]
}

interface Fruits {
  name: string,
  price: number
}
