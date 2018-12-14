import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
// import { RouterTestingModule } from '@angular/router/testing';
// import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { StartComponent } from './components/start/start.component';
import { FooterComponent } from './components/footer/footer.component';
import { FreeComponent } from './components/free/free.component';
import { MusicComponent } from './components/music/music.component';
import { SubboardComponent } from './components/subboard/subboard.component';
import { SuggestComponent } from './components/suggest/suggest.component';
import { LoginpageComponent } from './components/loginpage/loginpage.component';
import { JoinComponent } from './components/join/join.component';
import { ContentComponent } from './components/content/content.component';

import { NgFlashMessagesModule } from 'ng-flash-messages';
import { HandleuserService } from './services/handleuser.service';
import { HandleboardService } from './services/handleboard.service';
import { WriteComponent } from './components/write/write.component';
import { SubsComponent } from './components/subs/subs.component';
import { AdminComponent } from './components/admin/admin.component';
import { FindComponent } from './components/find/find.component';
import { FixComponent } from './components/fix/fix.component';
import { NoticeComponent } from './components/notice/notice.component';
import { SubadminComponent } from './components/subadmin/subadmin.component';

const appRoutes: Routes = [
  { path: '', component: StartComponent },
  { path: 'start', component: StartComponent },
  { path: 'free', component: FreeComponent },
  { path: 'music', component: MusicComponent },
  { path: 'subs', component: SubsComponent },
  { path: 'subboard', component: SubboardComponent },
  { path: 'suggest', component: SuggestComponent },
  { path: 'loginpage', component: LoginpageComponent },
  { path: 'content', component: ContentComponent },
  { path: 'join', component: JoinComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'find', component: FindComponent },
  { path: 'fix', component: FixComponent },
  { path: 'notice', component: NoticeComponent },
  { path: 'subadmin', component: SubadminComponent },
  { path: 'astart', component: StartComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    StartComponent,
    FooterComponent,
    FreeComponent,
    MusicComponent,
    SubboardComponent,
    SuggestComponent,
    LoginpageComponent,
    MusicComponent,
    ContentComponent,
    JoinComponent,
    WriteComponent,
    SubsComponent,
    AdminComponent,
    FindComponent,
    FixComponent,
    NoticeComponent,
    SubadminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes, {
      onSameUrlNavigation: 'reload'
    }),
    // RouterTestingModule.withRoutes(appRoutes),
    NgFlashMessagesModule.forRoot()
  ],
  providers: [
    HandleuserService,
    HandleboardService
  ],
  bootstrap: [
    AppComponent
  ],
  exports: [
    RouterModule
  ]
})
export class AppModule { }
