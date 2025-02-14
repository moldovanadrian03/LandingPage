import { Component } from '@angular/core';
import { AboutComponent } from "../../components/about/about.component";
import { PeopleOpinionComponent } from '../../components/people-opinion/people-opinion.component';

@Component({
  selector: 'app-home',
  imports: [
    AboutComponent,
    PeopleOpinionComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
