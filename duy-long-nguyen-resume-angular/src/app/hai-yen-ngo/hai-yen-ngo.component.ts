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
    experiences: Array<{
        title: string,
        startDate: string,
        endDate: string,
        companyName: string,
        responsibilities: string[],
    }> = [
            {
                title: "Food and Beverage Attendant",
                startDate: "02/2022",
                endDate: "Present",
                companyName: "The Star Entertainment Group",
                responsibilities: [
                    "Memorised the restaurant's wine stock and the meals they should accompany.",
                    "Wrote patrons' food orders on slips, memorised orders, or entered them into handhelds for transmittal to the kitchen staff in a 120+ seat restaurant.",
                    "Served food and beverages to patrons and prepared or served specialty dishes at tables.",
                ]
            },
            {
                title: "Sushi Maker and All-rounder",
                startDate: "01/2022",
                endDate: "02/2022",
                companyName: "Niko Niko Sushi",
                responsibilities: [
                    "Took customers' orders and prepared bills for food.",
                    "Performed cleaning duties such as sweeping, mopping, and washing dishes, to keep equipment and facilities sanitary.",
                    "Provided excellent customer service consistently.",
                ]
            },
            {
                title: "Administration Assistant",
                startDate: "01/2021",
                endDate: "12/2021",
                companyName: "The Universe Phoenix Services",
                responsibilities: [
                    "Designed surveys, tracked responses, and generated data reports from Microsoft Excel.",
                    "Successfully planned and coordinated company events and teamwork activities.",
                    "Prepared, proofread and formatted the correspondence.",
                ]
            },
            {
                title: "Waitress and All-rounder",
                startDate: "02/2020",
                endDate: "04/2021",
                companyName: "Rolls on Oxford",
                responsibilities: [
                    "Commended for multitasking in the busiest section of the restaurant during peak hours.",
                    "Maintained perfect attendance for working lifetime.",
                    "Resolved internal conflicts between members of the team.",
                ]
            },
        ]

    constructor(
        private $title: Title,
        private $script: ScriptService,
    )
    {
        this.$title.setTitle("Hai Yen Ngo - Resume")
    }

    ngOnInit(): void
    {
        this.$script.load("main");
    }
}
