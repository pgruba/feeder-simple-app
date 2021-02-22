import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsModule } from '@ngxs/store';
import { environment } from 'src/environments/environment';
import { APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { FormComponent } from './components/form/form.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { TwitterService } from './services/twitter.service';
import { FeedState } from './state/feed.state';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WelcomeDialogComponent } from './components/dialogs/welcome-dialog/welcome-dialog.component';
import { IconComponent } from './components/icon/icon.component';
import { NgMaterialModule } from './ng-material/ng-material.module';
import { StudioService } from './services/studio.service';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    FormComponent,
    WelcomeDialogComponent,
    IconComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxsModule.forRoot([FeedState]),
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgMaterialModule,
  ],
  providers: [
    TwitterService,
    {
      provide: APP_INITIALIZER,
      useFactory: (ts: TwitterService) => () => {
        ts.enable(true);
      },
      deps: [TwitterService],
      multi: true,
    },
    StudioService,
    {
      provide: APP_INITIALIZER,
      useFactory: (ts: StudioService) => () => {
        ts.enable(true);
      },
      deps: [StudioService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
