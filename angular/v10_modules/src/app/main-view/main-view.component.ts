import { AfterViewChecked, AfterViewInit, Component, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { TestComponent } from '../test/test.component';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements AfterViewInit, AfterViewChecked {
  flag: boolean = true;

  // 
  @ViewChildren(TestComponent) 
  allTestComponents!: QueryList<TestComponent>

  // Pobieramy pierwsze wystąpienie
  @ViewChild('test') 
  secondTestComponent!: TestComponent;

  // ngOnInit nie zadziała bo wykonuje się przez inicjalizacją @ViewChildren
  ngAfterViewInit(): void {
    console.log(this.allTestComponents);
    console.log(this.secondTestComponent);
  }

  ngAfterViewChecked(): void {
    console.log(this.secondTestComponent);
  }

  

  displaySum() {
    let sum = 0;
    this.allTestComponents.forEach(test => {
      sum += test.publicVal;
    })
    console.log(sum);
  }

  firstClick() {
    console.log('first click');
  }

  secondClick(event: Event) {
    event.stopPropagation();
    console.log('second click');
  }


}
