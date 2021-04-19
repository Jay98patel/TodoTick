import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, ElementRef, OnChanges, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ParentComponent } from './components/parent/parent.component';

@Component({
  selector: 'app-life-cycle-hook',
  templateUrl: './life-cycle-hook.component.html',
  styleUrls: ['./life-cycle-hook.component.scss']
})
export class LifeCycleHookComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  title: string = "This is LifeCycle Hook Example";
  secondaryTitle: string = "this is Secondary Title";
  thirdTitle:string="this is third Title";

  @ViewChild(ParentComponent, { static: false }) parentComponent: ParentComponent;
  @ViewChild('secondTitle', { static: false }) toggleTitleText: ElementRef<HTMLElement>;
  @ViewChild('thirdTitle', { static: true }) toggleThirdTitleText: ElementRef<HTMLElement>;

  constructor() {
    console.log('%c Grand-Parent-component: Constructor ', 'background: #0000FF; color: #fff');
  }

  ngOnChanges() {/*when any Input property change then this method will execute after constructor */
    console.log('%c Grand-Parent-component: ngOnChanges ', 'background: #0000FF; color: #FFFF;');
  }

  ngOnInit() {
    console.log('%c Grand-Parent-component: ngOnInit ', 'background: #0000FF; color: #FFFF;');
    this.toggleThirdTitleText.nativeElement.innerHTML = "Title has been change with view child decorator(static is True)"
  }

  ngDoCheck() { /* when button is click and our component's part reRendered*/
    console.log('%c Grand-Parent-component: ngDoCheck ', 'background: #0000FF; color: #FFFF;');
  }

  ngAfterContentInit() { /*when data is projected through ngcontent */
    console.log('%c Grand-Parent-component: ngAfterContentInit ', 'background: #0000FF; color: #FFFF;');
  }

  ngAfterContentChecked() {/*when data is change in projected through ngcontent */
    console.log('%c Grand-Parent-component: ngAfterContentChecked ', 'background: #0000FF; color: #FFFF;');
  }

  ngAfterViewInit() {/* when our component is initialized and component's view rendered */
    this.toggleTitleText.nativeElement.innerHTML = "Title has been change with view child decorator(static is FALSE)"
    console.log('%c Grand-Parent-component: ngAfterViewInit ', 'background: #0000FF; color: #FFFF;');
  }

  ngAfterViewChecked() { /* when parent comp. and its child comp. full initailized */
    console.log('%c Grand-Parent-component: ngAfterViewChecked ', 'background: #0000FF; color: #FFFF;');
  }

  toggleTitle() {
    this.title = "Title has been Changed";
  }

  changeTitle() {
    this.toggleTitleText.nativeElement.innerHTML = "Title has been change with view child decorator on button Click"
  }

  ngOnDestroy() {
    console.log('%c Grand-Parent-component: ngOnDestroy ', 'background: #0000FF; color: #FFFF;');
  }

}
