import { expect } from 'chai';
import { add, divide, multiple, substract } from "./calculator";


describe('Calculator', function () {
    describe('Add', function () {
        it('should do number addition', function () {
            expect(add(1, 3)).to.be.eq(4);
        })

    })
    describe('Substract', function () {
        it('should do number substraction', function () {
            expect(substract(4, 2)).to.be.eq(2);
        })

    })
    describe('Multiple', function () {
        it('should do number multiplication', function () {
            expect(multiple(10, 3)).to.be.eq(30);
        })

    })
    describe('Divide', function () {
        it('should do number divison', function () {
            expect(divide(12, 4)).to.be.eq(3);
        })

    })
})