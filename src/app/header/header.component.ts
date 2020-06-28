import { Component, OnInit } from '@angular/core';
import { getToken } from '../../services/tokenService';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  token: String;

  constructor() {
    this.token = getToken();
  }

  ngOnInit(): void {}
}
