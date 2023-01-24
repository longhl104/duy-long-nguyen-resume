import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValentineComponent } from "./valentine.component";

const routes: Routes = [
    {
        path: "",
        component: ValentineComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ValentineRoutingModule { }
