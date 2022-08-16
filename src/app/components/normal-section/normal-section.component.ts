import { Section } from './../../interfaces/section';
import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-normal-section',
	templateUrl: './normal-section.component.html',
	styleUrls: ['./normal-section.component.scss'],
})
export class NormalSectionComponent implements OnInit {
	@Input() sectionInfo!: Section;

	constructor() {}

	ngOnInit(): void {}
}
