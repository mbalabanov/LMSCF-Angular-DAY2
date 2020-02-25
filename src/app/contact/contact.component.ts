import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

	contactinfo = new FormGroup({
		name: new FormControl(''),
		email: new FormControl(''),
		message: new FormControl('')
	});

	constructor() { }

	ngOnInit(): void {
	}

	onSubmit(){
		var a = this.contactinfo.value;
		console.log(a)
	}



}
