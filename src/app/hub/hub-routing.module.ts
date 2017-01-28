import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { HubComponent } from './ui/hub.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path:'',
                component: HubComponent,
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

export class HubRoutingModule {}