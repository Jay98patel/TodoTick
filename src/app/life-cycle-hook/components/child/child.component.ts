import { Component, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, DoCheck, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  constructor() {
    console.log('%c child-component: Constructor ', 'background: #FFA300; color: #fff');
  }

  ngOnChanges() {
    console.log('%c child-component: ngOnChanges ','background: #FFA300; color: #FFFF;');
  }

  ngOnInit() { 
    console.log('%c child-component: ngOnInit ','background: #FFA300; color: #FFFF;');
  }

  ngDoCheck() { 
    console.log('%c child-component: ngDoCheck ','background: #FFA300; color: #FFFF;');
  }

  ngAfterContentInit() { 
    console.log('%c child-component: ngAfterContentInit ','background: #FFA300; color: #FFFF;');
  }

  ngAfterContentChecked() {
    console.log('%c child-component: ngAfterContentChecked ','background: #FFA300; color: #FFFF;');
  }

  ngAfterViewInit() {
    console.log('%c child-component: ngAfterViewInit ','background: #FFA300; color: #FFFF;');
  }

  ngAfterViewChecked() {
    console.log('%c child-component: ngAfterViewChecked ','background: #FFA300; color: #FFFF;');
  }

  ngOnDestroy() {
    console.log('%c child-component: ngOnDestroy ','background: #FFA300; color: #FFFF;');
  }

}
