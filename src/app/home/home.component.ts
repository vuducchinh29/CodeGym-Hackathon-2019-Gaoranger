import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {HomeNeedServiceService} from '../service/home-need-service.service';
import {ITurn} from '../Model/turn';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  userForm: FormGroup;
  turn: ITurn;

  constructor(private homeService: HomeNeedServiceService,
              private route: ActivatedRoute,
              private router: Router,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]]
  });
  }

  nhap(n: number) {
    if (this.userForm.valid) {
      const {value} = this.userForm;
      this.homeService.updateUser(value).subscribe(() => console.log('ok'), e => console.log(e));
      // @ts-ignore
      this.homeService.postTurn(this.turn).subscribe(() => console.log('ok'));
    }
  }
}

