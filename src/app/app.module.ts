import { BloodReqeustService } from './core/dataServices/blood-reqeust.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomeComponent } from './home/home.component';
import { LoginmoduleComponent } from './loginmodule/loginmodule.component';
import { RegisterComponent } from './register/register.component';

import { MatIconModule} from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { CookieService } from 'ngx-cookie-service';
import { RequestHomeComponent } from './request-home/request-home.component'
import { OnlyNumber } from './core/directives/onlyNumber';
import { InfoBarComponent } from './info-bar/info-bar.component';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule,MatMomentDateModule  } from '@coachcare/datepicker';
import { BloodReqeustFormComponent } from './blood-reqeust-form/blood-reqeust-form.component'
import { CredentialsService } from './core/dataServices/credentials.service';
import { requestConstants } from './core/dataServices/requestConstants';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    LoginmoduleComponent,
    RegisterComponent,
    RequestHomeComponent,
    OnlyNumber,
    InfoBarComponent,
    BloodReqeustFormComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMomentDateModule,
    MatIconModule
  ],
  providers: [CookieService,CredentialsService,BloodReqeustService, requestConstants],
  bootstrap: [AppComponent]
})
export class AppModule { }
