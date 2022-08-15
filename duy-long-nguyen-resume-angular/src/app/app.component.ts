import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ScriptService } from "./script.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit
{
    constructor(
        private $script: ScriptService,
    )
    {
        
    }

    ngOnInit(): void
    {
        this.$script.load("main");
    }

    ngAfterViewInit(): void
    {
    }
}
