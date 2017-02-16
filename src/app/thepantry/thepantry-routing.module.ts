import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { PantryOverviewComponent } from "./ui/pantry-overview/pantry-overview.component";

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path:'',
                component: PantryOverviewComponent,                
            }
        ])
    ],
    exports:[
        RouterModule
    ]
})

export class ThePantryRoutingModule {}