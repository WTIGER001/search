/* tslint:disable */
import { FilterValue } from "./filterValue"
import { SortItem } from "./sortItem"
import { Column } from "./column"

export class Query {
	page: number = 1;
	limit: number = 100;
	filterValues: FilterValue[];
	sort: SortItem[];
	columns: Column[];
}
