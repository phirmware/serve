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

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "signup", component: SignupComponent },
  { path: "login", component: LoginComponent },
  { path: "services", component: ServicesComponent },
  { path: "user/:id", component: UserComponent },
  { path: "upload", component: UploadImageComponent },
  { path: "loggedinuser", component: DisplaycurrentuserComponent },
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
    DisplaycurrentuserComponent
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
