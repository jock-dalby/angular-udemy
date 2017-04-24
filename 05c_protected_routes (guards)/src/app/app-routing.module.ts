import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { AuthGuard } from './auth-guard.service';

const appRoutes: Routes = [
    // By default, Angular matches paths by prefix. That means, that the following route will match any route that begins with '/' (i.e. all routes). By adding pathMatch you only get redirected, if the full path is ''  (so only if you got NO other content in your path).
    {path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {path: 'home',
        component: HomeComponent
    },
    {path: 'users',
        component: UsersComponent,
        children: [
            {path: ':id/:name', component: UserComponent}
    ]},
    {path: 'servers',

        // canActivate will protect the 'servers' route and all it's child routes
        // canActivate: [AuthGuard],

        // canActivateChild will protect just the child routes
        canActivateChild: [AuthGuard],

        component: ServersComponent,
        children: [
            {path: ':id', component: ServerComponent},
            {path: ':id/edit', component: EditServerComponent}
            ]
    },
    {path: 'not-found',
        component: PageNotFoundComponent
    },
    {path: '**',
        redirectTo: '/not-found'
    } // ** wild card route which means catch all routes you don't know. IMPORTANT: THIS NEEDS TO BE THE LAST ROUTE IN THE ROUTES ARRAY AS THEY GET CHECKED TOP TO BOTTOM.
];

@NgModule({
    imports: [
        // import RouterModule and configure it.
        RouterModule.forRoot(appRoutes)
    ],
    // export RouterModule for use in other files.
    exports: [RouterModule]
})

export class AppRoutingModule {

}