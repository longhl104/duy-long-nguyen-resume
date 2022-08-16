import { Injectable } from '@angular/core';

declare var html2pdf: any;

@Injectable({
    providedIn: 'root'
})
export class ResumeService
{
    // Html2pdf options
    private _opt: {[key: string]: any} = {
        margin: 0,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 4 },
        jsPDF: { format: 'a4', orientation: 'portrait' }
    }

    constructor() { }

    downloadResume(filename: string = 'duy-long-nguyen-resume.pdf')
    {
        // 1. The class .scale-cv is added to the body, where it reduces the size of the elements
        this._scaleCv();

        // 2. The PDF is generated
        this._generateResume(filename);

        // 3. The .scale-cv class is removed from the body after 5 seconds to return to normal size.
        setTimeout(this._removeScale, 5000)
    }

    private _scaleCv()
    {
        document.body.classList.add('scale-cv')
    }

    private _generateResume(filename: string)
    {
        this._opt["filename"] = filename;
        // PDF generated area
        const areaCv = document.getElementById('area-cv');
        html2pdf(areaCv, this._opt);
    }

    private _removeScale(_removeScale: any, arg1: number)
    {
        document.body.classList.remove('scale-cv')
    }
}
