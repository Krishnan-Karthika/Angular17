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
    {name: 'Mango', price:150},
    {name: 'Apple', price:250},
    {name: 'Grape', price:350},
    {name: 'Guava', price:450},
    {name: 'Papaya', price:550}
  ]
}

interface Fruits {
  name: string,
  price: number
}
