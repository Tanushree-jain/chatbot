import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Simple Chatbot';
  numbers: number[];
constructor()
{
  this.numbers = Array.from({ length: 20 }, (_, i) => i + 1); 
}

}