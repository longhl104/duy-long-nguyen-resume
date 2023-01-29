import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
    selector: 'app-spinning-wheel',
    templateUrl: './spinning-wheel.component.html',
    styleUrls: ['./spinning-wheel.component.scss']
})
export class SpinningWheelComponent implements OnInit
{
    @ViewChild('wheel') wheel?: ElementRef<HTMLDivElement>;

    constructor() { }

    ngOnInit(): void
    {

    }

    spin()
    {
        let value = Math.ceil(Math.random() * 14400);

        if(this.wheel)
        {
            this.wheel.nativeElement.style.transform = "rotate(" + value + "deg)";
            value += Math.ceil(Math.random() * 14400);
        }
    }
}
