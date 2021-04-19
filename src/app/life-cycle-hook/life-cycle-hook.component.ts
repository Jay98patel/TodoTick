import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-cycle-hook',
  templateUrl: './life-cycle-hook.component.html',
  styleUrls: ['./life-cycle-hook.component.scss']
})
export class LifeCycleHookComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  constructor() {
    console.log("Grand-Parent-component: Constructor");
  }

  ngOnChanges() {
    console.log("Grand-Parent-component: OnChanges");
  }

  ngOnInit() {
    console.log("Grand-Parent-component: OnInit");
  }

  ngDoCheck() {
    console.log("Grand-Parent-component: DoCheck");
  }

  ngAfterContentInit() {
    console.log("Grand-Parent-component: AfterContentInit");
  }

  ngAfterContentChecked() {
    console.log("Grand-Parent-component:AfterContentChecked");
  }

  ngAfterViewInit() {
    console.log("Grand-Parent-component:AfterViewInit");
  }

  ngAfterViewChecked() {
    console.log("Grand-Parent-component:AfterViewChecked");
  }

  ngOnDestroy() {
    console.log("Grand-Parent-component:OnDestroy");
  }

}
