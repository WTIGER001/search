export interface Operator {
    createValueObj(): any
    getKey(): string
    accept(datatype: string): boolean
}

export class EqualOperator implements Operator {
    public getKey(): string {
        return "eq"
    }
    public createValueObj(): any {
        return {
            operator: "eq",
            value: undefined
        }
    }
    public accept(datatype: string): boolean {
        return true
    }
}

export class BetweenOperator implements Operator {
    public getKey(): string {
        return "between"
    }
    public createValueObj(): any {
        return {
            operator: "eq",
            value1: undefined,
            value2: undefined
        }
    }
    public accept(datatype: string): boolean {
        return true
    }
}

export class LastN implements Operator {
    public getKey(): string {
        return "LastN"
    }
    public createValueObj(): any {
        return {
            operator: "LastN",
            value1: 1,
            units: "weeks"
        }
    }
    public accept(datatype: string): boolean {
        return true
    }
}