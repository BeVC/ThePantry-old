import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './ui/login/login.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path:'',
                component: LoginComponent,
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

export class LoginRoutingModule {}