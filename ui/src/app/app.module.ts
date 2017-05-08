import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@angular/material';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SidebarModule } from 'ng-sidebar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Components
import { AppComponent } from './app.component';
import { TextControlComponent } from './filters/text-control/text-control.component';
import { HeaderComponent } from './header/header.component';
import { IntentHeaderComponent } from './intent-header/intent-header.component';
import { FilterListComponent } from './filter-list/filter-list.component';
import { FilterHostComponent } from './filter-list/filter-host.component';
import { ToggleComponent } from './filters/toggle/toggle.component';
import { SelectComponent } from './filters/select/select.component';

// Services
import { ConfigurationService } from './configuration.service';
import { UserService } from './user.service';
import { OptionsService } from './options.service';
import { ResultsTableComponent } from './results-table/results-table.component';
import { DemoComponent } from './demo'

@NgModule({
  declarations: [
    AppComponent,
    TextControlComponent,
    HeaderComponent,
    IntentHeaderComponent,
    FilterListComponent,
    FilterHostComponent,
    ToggleComponent,
    SelectComponent,
    ResultsTableComponent,
    DemoComponent
  ],
  imports: [
    BrowserModule,
    NgxDatatableModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    SidebarModule.forRoot(),
    NgbModule.forRoot()
  ],
  entryComponents: [TextControlComponent, ToggleComponent, SelectComponent],
  providers: [ConfigurationService, UserService, OptionsService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
