import { Component, Input, OnInit, AfterViewInit, ViewChild, ComponentFactoryResolver, ViewContainerRef, Type, OnChanges } from '@angular/core';
import { ApiService } from '../api.service'
import { Configuration, Filter } from '../models/configuration'
import { FilterControl } from '../filters/filter-control'
import { TextControlComponent } from '../filters/text-control/text-control.component'
import { ToggleComponent } from '../filters/toggle/toggle.component'
import { SelectComponent } from '../filters/select/select.component'

/**
 * Lists all the filters in a configuration
 */
@Component({
    selector: 'app-filter-host',
    templateUrl: './filter-list.component.html',
    styleUrls: ['./filter-list.component.css']
})
export class FilterHostComponent implements AfterViewInit, OnInit {
    @Input() public filter: Filter

    public value: string
    private filterControls = {};
    constructor(
        private _api: ApiService,
        private _componentFactoryResolver: ComponentFactoryResolver,
        private _viewRef: ViewContainerRef) {

        this.filterControls["text"] = TextControlComponent
        this.filterControls["toggle"] = ToggleComponent
        this.filterControls["select"] = SelectComponent
    }

    ngOnInit() {
        this.makeFilter();
    }

    ngAfterViewInit() {

    }

    public makeFilter() {
        let f = this.filter
        if (f == null || (f.hasOwnProperty("visible") && !f.visible)) return

        let controlId = f.control

        // Get the id
        if (controlId == null) {
            let id = f.datafieldId
            controlId = this._api.getFilterControl(id)
        }

        if (controlId == null) {
            controlId = "text"
        }

        // Look up the control
        let comp = this.filterControls[controlId]
        if (comp != null) {
            // Create and init the control
            let componentFactory = this._componentFactoryResolver.resolveComponentFactory(comp);
            this._viewRef.clear();
            let componentRef = this._viewRef.createComponent(componentFactory);

            // componentRef.instance.value = "HI"
            // Set the value
        }


    }
}

