import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ErrorPageComponent } from './error-page/error-page.component';

import { AuthGuard } from './auth-guard.service';
import { CanDeactivateGuard } from './servers/edit-server/can-deactivate-guard.service';
import { ServerResolver } from './servers/server/server-resolver.service';


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
            {path: ':id', component: ServerComponent, resolve: {server: ServerResolver}},
            // resolve will now map the data we receive back from ServerResolver and store it in the server property we will have available in this to-be loaded component. See ServerComponent.ts
            {path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard]}
            ]
    },

    // Generic when page not found, show PageNotFoundComponent
    // {path: 'not-found',
    //     component: PageNotFoundComponent
    // },

    // More detailed, when page not found, show detailed error message component
    {path: 'not-found',
        component: ErrorPageComponent,
        data: {message: 'Page not found!'}
    },

    {path: '**',
        redirectTo: '/not-found'
    } // ** wild card route which means catch all routes you don't know. IMPORTANT: THIS NEEDS TO BE THE LAST ROUTE IN THE ROUTES ARRAY AS THEY GET CHECKED TOP TO BOTTOM.
];

@NgModule({
    imports: [
        // import RouterModule and configure it.
        RouterModule.forRoot(appRoutes, {useHash: true}) // If your app will not work in production mode, add {useHash: true}. useHash will # before all routes. In production, this will inform the web server hosting my app to only take notice of the part of the url before the hash, ignore anything afterwards. Without this the web server will try to find a path for all routes, which it will not have. The only route the web server has is to index.html and then all routing is handled on the client-side. This will stop your app from hitting 404 errors
    ],
    // export RouterModule for use in other files.
    exports: [RouterModule]
})

export class AppRoutingModule {

}