import { Component, Input, OnInit } from '@angular/core';
import { ResumeService } from "src/app/resume.service";

@Component({
    selector: 'app-resume-button',
    templateUrl: './resume-button.component.html',
    styleUrls: ['./resume-button.component.scss']
})
export class ResumeButtonComponent implements OnInit
{
    @Input() filename?: string;

    constructor(
        private $resume: ResumeService,
    ) { }

    ngOnInit(): void
    {
    }

    downloadResume()
    {
        this.$resume.downloadResume(this.filename);
    }

}
