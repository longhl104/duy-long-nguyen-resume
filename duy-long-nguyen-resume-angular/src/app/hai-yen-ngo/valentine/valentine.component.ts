import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
    selector: 'app-valentine',
    templateUrl: './valentine.component.html',
    styleUrls: ['./valentine.component.scss']
})
export class ValentineComponent implements OnInit
{

    constructor() { }

    ngOnInit()
    {
        var canvas = $('#canvas');
        console.log(canvas);
    }

}
