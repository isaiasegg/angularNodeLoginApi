import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userModel: any = {}

  constructor(private actRoute: ActivatedRoute, private router: Router) {
    if (!localStorage.getItem('token')) {
      this.router.navigate(['/login']);
    }
  }
 
  ngOnInit() {
    //
  }

}

 