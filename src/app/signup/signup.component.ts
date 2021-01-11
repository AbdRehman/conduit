import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import { FormBuilder,Validators } from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  submitted = false;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    this.signupForm = this.fb.group({
      username: ['', [Validators.required,Validators.minLength(3)]],

      email: ['', [
        Validators.required,
        Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
      ]
    ],
      password: ['', [
        Validators.required,
        Validators.minLength(6),
        Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,10}$"
        )
      ]
    ]
    });
    }

    onSubmit(){
      this.submitted = true;
      if(this.signupForm.errors)
      {
        console.log(this.signupForm.errors);
      }
      else{
        console.log("Helooooooo");
      }
      // console.log(this.signupForm.value);
    
    }

  }
