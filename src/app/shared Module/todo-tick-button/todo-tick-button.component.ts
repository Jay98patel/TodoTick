import { Attribute, Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'button',
  templateUrl: './todo-tick-button.component.html',
  styleUrls: ['./todo-tick-button.component.scss']
})
export class TodoTickButtonComponent implements OnInit {
  @HostBinding("class.loading")
  @HostBinding("attr.aria-disabled")
  @Input()loading = false;

  @HostBinding("class")
  get classes(): string {
    return this.buttonColor || "primary"; /*by default it will be primary color */
  }

  constructor(@Attribute("buttonColor") private buttonColor: "primary" | "secondary" | "outline" = "primary") { }

  ngOnInit(): void {
  }

}
