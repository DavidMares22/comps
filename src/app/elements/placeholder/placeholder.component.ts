import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-placeholder',
  templateUrl: './placeholder.component.html',
  styleUrl: './placeholder.component.css'
})
export class PlaceholderComponent implements OnInit {
  
  @Input() header = true;
  @Input() lines = 3;
  
  constructor() { }

  ngOnInit(): void {
    // Initialization logic can go here
  }

}
