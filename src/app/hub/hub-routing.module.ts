import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HubComponent } from './ui/hub.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'hub',
                component: HubComponent,
                children: [{
                    path: "pantry",
                    loadChildren: "app/thepantry/thepantry.module#ThePantryModule"
                }]
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})

export class HubRoutingModule { }