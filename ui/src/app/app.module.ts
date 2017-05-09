import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
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
import { ResultsTableComponent } from './results-table/results-table.component';

// Services
import { ApiService } from './api.service';
import { IntentSelectComponent } from './intent-select/intent-select.component';


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
    IntentSelectComponent
  ],
  imports: [
    BrowserModule,
    NgxDatatableModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    SidebarModule.forRoot(),
    NgbModule.forRoot()
  ],
  entryComponents: [TextControlComponent, ToggleComponent, SelectComponent],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
