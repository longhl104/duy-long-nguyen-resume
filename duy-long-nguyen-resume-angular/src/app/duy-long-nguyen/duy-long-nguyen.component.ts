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
    leftSkills = [
        "HTML, CSS, Javascript, Typescript",
        "Angular & AngularJS",
        "ReactJS",
    ];

    rightSkills = [
        "Node.js, Express.js",
        "C#, .Net Frameworks",
        "Microsoft SQL Server",
        "MongoDB",
    ];

    leftMiscellaneousSkills = [
        "Data Structures",
        "Algorithm Design",
        "Test Automation, CI/CD",
        "Micro Frontend, Micro Services"
    ];

    rightMiscellaneousSkills = [
        "Agile Development",
        "Git",
        "JWT, End-to-end encryption",
        "AWS, Google Cloud Platform, Firebase",
    ];

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
