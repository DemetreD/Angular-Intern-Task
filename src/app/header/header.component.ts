import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterLink, RouterModule } from "@angular/router";

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  
  currentDateTime!: string;
  private timer: any;

 ngOnInit() {
  this.timer = setInterval(() => {
  this.currentDateTime = new Date().toLocaleString();
  }, 1000)
 }

 ngOnDestroy() {
  clearInterval(this.timer);
}

}
