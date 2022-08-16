import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ResumeService } from "../resume.service";
import { ScriptService } from "../script.service";

@Component({
    selector: 'app-duy-long-nguyen',
    templateUrl: './duy-long-nguyen.component.html',
    styleUrls: ['./duy-long-nguyen.component.scss']
})
export class DuyLongNguyenComponent implements OnInit, AfterViewInit
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
