import { expect } from 'chai';
import { add, divide, multiple, substract } from "./calculator";


describe('Calculator', function () {
    describe('Add', function () {
        it('should do number addition', function () {
            expect(add(1, 3)).to.be.eq(4);
        })
    })
})