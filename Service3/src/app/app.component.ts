import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './features/user/user.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserComponent],
  template: `
  <user-comp></user-comp>
  `,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Service3';
}
