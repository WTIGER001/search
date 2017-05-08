/* tslint:disable */
import { filterValue } from "./filterValue"
import { sortItem } from "./sortItem"
import { column } from "./column"

export class query {
		paging: object;

		filterValues: filterValue[];
		sort: sortItem[];
		columns: column[];
}
