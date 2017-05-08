import { filterValue, column } from '../swagger/models'

export class Configuration {


    id: string
    name: string
    description: string
    ownedBy: string
    sharedWith: string
    mapTableSplit: number[]
    filters: Filter[]
    filterValues: filterValue[]
    columns: column[]

}

export class Filter {
    datafieldId: string
    label: string
    editable: boolean
    visible: boolean
    order: number
    control: string
}