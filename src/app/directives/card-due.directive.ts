import { Directive, ElementRef, Renderer2, Input, OnChanges, OnInit } from '@angular/core';

@Directive({
  selector: '[appCardDue]'
})
export class CardDueDirective implements OnInit{
  @Input() dueDate: Date;
  ngOnInit() {
    if (this.dueDate) {
      const delta=this.dueDate.getDate() - new Date().getDate();
      if (delta < 3) {
        this.renderer.setStyle(this.elementRef.nativeElement, "background-color", "red");
      } else {
        if (delta < 7) {
          this.renderer.setStyle(this.elementRef.nativeElement, "background-color", "yellow");
        }
      }
    }
  };
  constructor(private elementRef: ElementRef, private renderer: Renderer2){
  }
}
