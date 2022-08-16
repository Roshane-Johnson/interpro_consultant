import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/app/interfaces/card.type';

@Component({
	selector: 'app-info-section',
	templateUrl: './info-section.component.html',
	styleUrls: ['./info-section.component.scss'],
})
export class InfoSectionComponent implements OnInit {
	@Input() card?: Card;
	@Input() reverse: boolean = false;

	constructor() {}

	ngOnInit(): void {}
}
