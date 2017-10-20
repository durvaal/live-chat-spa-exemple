import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterSelfComponent } from './register-self/register-self.component';
import { LiveChatComponent } from './live-chat/live-chat.component';

import { AuthGuard } from './app.guard';

const appRoutes: Routes = [
    { path: 'login', component: RegisterSelfComponent},
    { path: '', component: LiveChatComponent, canActivate: [AuthGuard]},
    { path: '**', redirectTo: 'login'}
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule {}