import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-parameter-view',
  templateUrl: './parameter-view.component.html',
  styleUrls: ['./parameter-view.component.scss']
})
export class ParameterViewComponent implements OnInit {
  currentId!: number;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.currentId = Number(params.id);
    })

    console.log(this.route);
  }

}
