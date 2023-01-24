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
        path: "hai-yen-ngo/valentine",
        loadChildren: () => import("./hai-yen-ngo/valentine/valentine.module").then(m => m.ValentineModule),
    },
    {
        path: "",
        component: DuyLongNguyenComponent,
    },
    { path: '2048-plus', loadChildren: () => import('./two-zero-four-eight-plus/two-zero-four-eight-plus.module').then(m => m.TwoZeroFourEightPlusModule) },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
