import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { ListStudentComponent } from './components/list-student/list-student.component';
import { LoginStudentComponent } from './components/login-student/login-student.component';
import { RegistrationStudentComponent } from './components/registration-student/registration-student.component';
import { AppRoutingModule } from './app-routing.module';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { EditStudentComponent } from './components/edit-student/edit-student.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { DuplicateCheckAppComponent } from './duplicate-check-app/duplicate-check-app.component';
import { FormsModule } from '@angular/forms';
import { PositionFinderComponent } from './position-finder/position-finder.component';
import { DuplicateCheckComponent } from './duplicate-check/duplicate-check.component';
import { NumberPositionComponent } from './number-position/number-position.component';
import { NumberInfoComponentComponent } from './number-info-component/number-info-component.component';
import { DigitCheckerComponent } from './digit-checker/digit-checker.component';
import { PositionFinder1Component } from './position-finder1/position-finder1.component';
import { NumberGeneratorComponentComponent } from './number-generator-component/number-generator-component.component';
import { NumberCheckerComponent } from './number-checker/number-checker.component';
import { DigitInfoComponentComponent } from './digit-info-component/digit-info-component.component';
import { DigitDuplicateCheckerComponentComponent } from './digit-duplicate-checker-component/digit-duplicate-checker-component.component';
import { DuplicatedValue123Component } from './duplicated-value123/duplicated-value123.component';
import { PostionCheckValueComponent } from './postion-check-value/postion-check-value.component';
import { TextCompareComponentValuesComponent } from './text-compare-component-values/text-compare-component-values.component';
import { DigitDuplicationCheckerComponent } from './digit-duplication-checker/digit-duplication-checker.component';




@NgModule({
  declarations: [
    AppComponent,

    AddStudentComponent,
    EditStudentComponent,
    ListStudentComponent,
    LoginStudentComponent,
    RegistrationStudentComponent,
    DuplicateCheckAppComponent,
    PositionFinderComponent,
    DuplicateCheckComponent,
    NumberPositionComponent,
    NumberInfoComponentComponent,
    DigitCheckerComponent,
    PositionFinder1Component,
    NumberGeneratorComponentComponent,
    NumberCheckerComponent,
    DigitInfoComponentComponent,
    DigitDuplicateCheckerComponentComponent,
    DuplicatedValue123Component,
    PostionCheckValueComponent,
    TextCompareComponentValuesComponent,
    DigitDuplicationCheckerComponent,


    
    
        
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     HttpClientModule,
     ReactiveFormsModule,
     FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
