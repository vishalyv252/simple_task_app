import { Component } from '@angular/core';
import { HeaderComponentComponent } from './nested_components/header-component/header-component.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HeaderComponentComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
