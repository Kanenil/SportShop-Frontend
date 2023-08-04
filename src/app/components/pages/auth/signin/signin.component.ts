import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../../services/auth.service";
import {EventBusService} from "../../../../shared/event-bus.service";
import {Router} from "@angular/router";
import {EventData} from "../../../../shared/event.class";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html'
})
export class SigninComponent implements OnInit {

  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private eventBusService: EventBusService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        username: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
          ]
        ],
      }
    );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    this.authService.login(this.form.value).subscribe(resp => {
      this.saveAndRedirectToHome(resp);
    })

  }

  private saveAndRedirectToHome(resp: any) {
    localStorage.setItem("token", resp.token);
    this.eventBusService.emit(new EventData("authorize", resp.token));
    this.router.navigate(['/'], {replaceUrl: true});
  }

}
