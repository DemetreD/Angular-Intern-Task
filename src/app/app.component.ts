import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { UsersComponent } from './users/users.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, NavigationComponent, UsersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'task';
}
