import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { ResumeService } from "../resume.service";
import { ScriptService } from "../script.service";

@Component({
    selector: 'app-hai-yen-ngo',
    templateUrl: './hai-yen-ngo.component.html',
    styleUrls: ['./hai-yen-ngo.component.scss']
})
export class HaiYenNgoComponent implements OnInit
{

    constructor(
        private $title: Title,
        private $script: ScriptService,
    ) { 
        this.$title.setTitle("Hai Yen Ngo - Resume")
    }

    ngOnInit(): void
    {
        this.$script.load("main");
    }
}
