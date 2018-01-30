import { Component, OnInit, Input, HostListener } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html'
})
export class ProgressComponent implements OnInit {

  @Input() value

  constructor() { }

  ngOnInit() {
  }

  displayValue(): string {
    return `${this.value}%`
  }

}
