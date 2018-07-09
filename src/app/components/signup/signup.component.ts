import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { GeneralService } from '../../services/general/general.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  userModel: any = {}
  disableButton: boolean;
  response: any;
  errMsg: string;
  succesCreated: string;

  constructor(public generalService: GeneralService, private router: Router) {
    if (localStorage.getItem('token')) { this.router.navigate(['/']) }
  }

  ngOnInit() {
  }

  createUserFn() {
    this.disableButton = true;
    if (this.userModel.password === this.userModel.passwordRep) {
      this.generalService.register(this.userModel).subscribe(data => {
        this.response = data;
        if (!this.response.msg) { 
          this.errMsg = undefined; 
          this.userModel = {};
          this.succesCreated = 'Te hemos registrado satisfactoriamente'
        } else { 
          this.disableButton = false;
          this.errMsg = this.response.msg;
        }
      });
    } else { this.disableButton = false; this.errMsg = 'Las contraseñas no coinciden' }
  }

}
