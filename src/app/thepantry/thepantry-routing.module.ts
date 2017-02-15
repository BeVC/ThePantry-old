import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { PantryOverviewComponent } from "./ui/pantry-overview/pantry-overview.component";

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path:'',
                component: PantryOverviewComponent,
                children:[
                    {
                        path: ""
                    },

                ]
            }
        ])
    ],
    exports:[
        RouterModule
    ]
})

export class ThePantryRoutingModule {}