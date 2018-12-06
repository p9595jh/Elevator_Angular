import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

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

const appRoutes: Routes = [
  { path: '', component: StartComponent },
  { path: 'start', component: StartComponent },
  { path: 'free', component: FreeComponent },
  { path: 'music', component: MusicComponent },
  { path: 'subboard', component: SubboardComponent },
  { path: 'suggest', component: SuggestComponent },
  { path: 'loginpage', component: LoginpageComponent },
  { path: 'content', component: ContentComponent },
  { path: 'join', component: JoinComponent }
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
    WriteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    NgFlashMessagesModule.forRoot()
  ],
  providers: [
    HandleuserService,
    HandleboardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
