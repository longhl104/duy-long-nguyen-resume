import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivacyPolicyComponent } from "./privacy-policy/privacy-policy.component";
import { TwoZeroFourEightPlusComponent } from './two-zero-four-eight-plus.component';

const routes: Routes = [
    { path: '', redirectTo: "privacy-policy", pathMatch: "full" },
    { path: "privacy-policy", component: PrivacyPolicyComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TwoZeroFourEightPlusRoutingModule { }
