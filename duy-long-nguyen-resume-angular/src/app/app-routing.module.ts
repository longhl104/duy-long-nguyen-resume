import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DuyLongNguyenComponent } from "./duy-long-nguyen/duy-long-nguyen.component";
import { HaiYenNgoComponent } from "./hai-yen-ngo/hai-yen-ngo.component";

const routes: Routes = [
    {
        path: "hai-yen-ngo",
        component: HaiYenNgoComponent,
    },
    {
        path: "",
        component: DuyLongNguyenComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
