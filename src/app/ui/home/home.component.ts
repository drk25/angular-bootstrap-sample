import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  slides = [
    "../assets/images/home 1.png",
    "../assets/images/promo/Day 1.png", 
    "../assets/images/promo/Day 2.png", 
    "../assets/images/promo/Day 3.png", 
    "../assets/images/promo/Day 4.png", 
    "../assets/images/promo/Day 5.png", 
    "../assets/images/promo/Day 6.png", 
    "../assets/images/promo/Day 7.png", 
    "../assets/images/promo/Slide 8.png", 
    "../assets/images/promo/Slide 9.png"
  ]
}
