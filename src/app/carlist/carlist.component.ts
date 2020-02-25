import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carlist',
  templateUrl: './carlist.component.html',
  styleUrls: ['./carlist.component.css']
})
export class CarlistComponent implements OnInit {

	cars: any = [
		{ carid: 1, modelName: 'Audi Coupe', photo: 'assets/img/audi-coupe.jpg', description: 'This compact car runs like new. It handles very well. It is slightly expensive. It is 5 years old. It can go from 0-60 in 5.28 seconds and has a top speed of 104 mph.', cost: 200 },
		{ carid: 2, modelName: 'Beetle', photo: 'assets/img/beetle.jpg', description: 'This scratched up pale blue Beetle has an upgraded engine. It handles poorly. It can go from 0-60 in 1.52 seconds and has a top speed of 173 mph. It is brand new.', cost: 100 },
		{ carid: 2, modelName: 'Family Coupe', photo: 'assets/img/family-coupe.jpg', description: 'This spotless coupe is about to need a new transmission. It is 13 years old. It can go from 0-60 in 9.63 seconds and has a top speed of 228 mph. The styling features sweeping lines.', cost: 150 },
		{ carid: 2, modelName: 'Ford Mustang', photo: 'assets/img/ford-mustang.jpg', description: 'This hatchback is running very well. It handles fairly well. It is not very expensive. It has privacy glass, automatic everything, a stick shift and a hybrid engine. It can go from 0-60 in 8.58 seconds and has a top speed of 94 mph.', cost: 150 },
		{ carid: 2, modelName: 'Speedster', photo: 'assets/img/speedster.jpg', description: 'This sports car is in good shape overall. It has leather seats, some panels painted different colors, a rebuilt engine and a diesel engine. It is not very expensive. It handles somewhat poorly.', cost: 220 },
		{ carid: 2, modelName: 'Sports Coupe', photo: 'assets/img/sports-coupe.jpg', description: 'This sports car runs like new. It is 3 years old. The styling features boxy structures. It has some panels painted different colors, a filthy interior, spinning rims and no cupholders.', cost: 200 }
	];

	constructor() {

	}

	showModal(a){
		console.log('Yay!' + a);
	}

	ngOnInit(): void {
  	}

}


