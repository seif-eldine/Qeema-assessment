import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartmentsComponent } from './components/departments/departments.component';
import { DepartmentBoxComponent } from './components/department-box/department-box.component';
import { SectionComponent } from './components/section/section.component';

import { MatProgressBarModule } from '@angular/material/progress-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgApexchartsModule } from 'ng-apexcharts';
import { CustomProgressBarComponent } from './components/custom-progress-bar/custom-progress-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentsComponent,
    DepartmentBoxComponent,
    SectionComponent,
    CustomProgressBarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatProgressBarModule,
    BrowserAnimationsModule,
    NgApexchartsModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
