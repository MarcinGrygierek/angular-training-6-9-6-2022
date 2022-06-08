import { AfterViewChecked, AfterViewInit, Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Observable } from 'rxjs';
import { TestComponent } from './test/test.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, AfterViewChecked {
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
