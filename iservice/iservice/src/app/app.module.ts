import { AuthGuardService } from "./auth-guard.service";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { SignupComponent } from "./signup/signup.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { IserviceService } from "./iservice.service";
import { ServicesComponent } from "./services/services.component";
import { UserComponent } from "./user/user.component";
import { UploadImageComponent } from "./upload-image/upload-image.component";
import { RegisterComponent } from "./register/register.component";
import { JwtModule } from "@auth0/angular-jwt";
import { DisplaycurrentuserComponent } from "./displaycurrentuser/displaycurrentuser.component";
import { SignupStepComponent } from './signup-step/signup-step.component';
import { SignupStep1Component } from './signup-step1/signup-step1.component';
import { SignupStep2Component } from './signup-step2/signup-step2.component';
import { SignupStep3Component } from './signup-step3/signup-step3.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "signup", component: SignupComponent },
  { path: "login", component: LoginComponent },
  { path: "services", component: ServicesComponent },
  { path: "userdetail/:id",component: DetailComponent},
  { path: "user/:id", component: UserComponent },
  { path: "upload", component: UploadImageComponent },
  { path: "loggedinuser", component: DisplaycurrentuserComponent },
  { path: "step1",component:SignupStepComponent},
  { path: "step2",component:SignupStep1Component},
  { path: "step3",component:SignupStep2Component},
  { path: "welcome",component:SignupStep3Component},
  {
    path: "register",
    component: RegisterComponent,
    canActivate: [AuthGuardService]
  },
  { path: "", pathMatch: "full", redirectTo: "home" }
];

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    HomeComponent,
    LoginComponent,
    ServicesComponent,
    UserComponent,
    UploadImageComponent,
    RegisterComponent,
    DisplaycurrentuserComponent,
    SignupStepComponent,
    SignupStep1Component,
    SignupStep2Component,
    SignupStep3Component,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [IserviceService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule {}
