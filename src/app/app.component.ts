import {Component , OnInit } from '@angular/core';
import { FormControl , FormGroup} from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'angular-reactive-forms';

  reactiveForm: FormGroup;

  //lifecycle hook
  ngOnInit(){
    this.reactiveForm = new FormGroup({
      firstname : new FormControl(null),
      lastName  : new FormControl(null),
      email: new FormControl(null),
      username: new FormControl(null),
      dob:new FormControl(null),
      gender:new FormControl(null),
      street:new FormControl(null),
      country: new FormControl(null),
      city:new FormControl(null),
      region:new FormControl(null),
      postal:new FormControl(null),
    })  
  }
}
