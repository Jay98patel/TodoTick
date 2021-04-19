import { Component, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, DoCheck, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  constructor() {
    console.log('%c Parent-component: Constructor ', 'background: #FF0000; color: #fff');
  }

  ngOnChanges() {
    console.log('%c Parent-component: ngOnChanges ','background: #FF0000; color: #FFFF;');
  }

  ngOnInit() { 
    console.log('%c Parent-component: ngOnInit ','background: #FF0000; color: #FFFF;');
  }

  ngDoCheck() { 
    console.log('%c Parent-component: ngDoCheck ','background: #FF0000; color: #FFFF;');
  }

  ngAfterContentInit() { 
    console.log('%c Parent-component: ngAfterContentInit ','background: #FF0000; color: #FFFF;');
  }

  ngAfterContentChecked() {
    console.log('%c Parent-component: ngAfterContentChecked ','background: #FF0000; color: #FFFF;');
  }

  ngAfterViewInit() {
    console.log('%c Parent-component: ngAfterViewInit ','background: #FF0000; color: #FFFF;');
  }

  ngAfterViewChecked() {
    console.log('%c Parent-component: ngAfterViewChecked ','background: #FF0000; color: #FFFF;');
  }

  ngOnDestroy() {
    console.log('%c Parent-component: ngOnDestroy ','background: #FF0000; color: #FFFF;');
  }

}
