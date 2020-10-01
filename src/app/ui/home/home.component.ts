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
    "../assets/images/promo/slide1.png", 
    "../assets/images/promo/slide2.png", 
    "../assets/images/promo/slide3.png", 
    "../assets/images/promo/slide4.png", 
    "../assets/images/promo/slide5.png", 
    "../assets/images/promo/slide6.png", 
    "../assets/images/promo/slide7.png", 
    "../assets/images/promo/slide8.png", 
    "../assets/images/promo/slide9.png", 
    "../assets/images/promo/slide10.png", 
    "../assets/images/promo/slide11.png", 
    "../assets/images/promo/slide12.png", 
    "../assets/images/promo/slide13.png"

  ]
}
