import { Component, OnInit } from '@angular/core';
import { SampleweconnecttemplatesService } from './sampleweconnecttemplates.service';

@Component({
  selector: 'app-sampleweconnecttemplates',
  templateUrl: './sampleweconnecttemplates.component.html',
  styleUrls: ['./sampleweconnecttemplates.component.scss'],
})

export class SampleweconnecttemplatesComponent implements OnInit {

    constructor (
        private sampleweconnecttemplatesService: SampleweconnecttemplatesService,
    ) { }

    ngOnInit() {
    }
}