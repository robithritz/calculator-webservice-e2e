class Calculator {
    result: number;

    add(input1: number, input2: number): number {
        this.result = input1 + input2;
        return this.result;
    }
    substract(input1: number, input2: number): number {
        this.result = input1 - input2;
        return this.result;
    }
    multiple(input1: number, input2: number): number {
        this.result = input1 * input2;
        return this.result;
    }
    divide(input1: number, input2: number): number {
        this.result = input1 / input2;
        return this.result;
    }
}

export { Calculator };