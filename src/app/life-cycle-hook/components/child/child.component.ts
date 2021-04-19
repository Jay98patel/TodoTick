import { Component, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, DoCheck, OnChanges, OnDestroy, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input() valueFromParent:string;
  
  constructor() {
    console.log('%c child-component: Constructor ', 'background: #FFA300; color: #000');
  }

  ngOnChanges() {
    console.log('%c child-component: ngOnChanges ','background: #FFA300; color: #000;');
  }

  ngOnInit() { 
    console.log('%c child-component: ngOnInit ','background: #FFA300; color: #000;');
  }

  ngDoCheck() { 
    console.log('%c child-component: ngDoCheck ','background: #FFA300; color: #000;');
  }

  ngAfterContentInit() { 
    console.log('%c child-component: ngAfterContentInit ','background: #FFA300; color: #000;');
  }

  ngAfterContentChecked() {
    console.log('%c child-component: ngAfterContentChecked ','background: #FFA300; color: #000;');
  }

  ngAfterViewInit() {
    console.log('%c child-component: ngAfterViewInit ','background: #FFA300; color: #000;');
  }

  ngAfterViewChecked() {
    console.log('%c child-component: ngAfterViewChecked ','background: #FFA300; color: #000;');
  }

  ngOnDestroy() {
    console.log('%c child-component: ngOnDestroy ','background: #FFA300; color: #000;');
  }

}
