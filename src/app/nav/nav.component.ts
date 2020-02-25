import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

	customerStatus: string = '';
	clickCounter: number = 0;

	constructor() { }

	countClick(){
		this.clickCounter += 10;
	}

	ngOnInit(): void {
	}

}
