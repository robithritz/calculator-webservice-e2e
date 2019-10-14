import { expect } from 'chai';
import { get } from 'request-promise-native';

import { StatusCodeError } from 'request-promise-native/errors'

describe('Calculator Multiplication', function () {
    this.timeout(5000);
    this.slow(5000);

    it('should do number multiplication', async function () {
        let result = await get("http://localhost:3000/multiple?i1=10&i2=2", { json: true });
        expect(result).to.be.deep.eq({
            result: 20
        })
    })
    it('should return errorcode 400 if not a number', async function () {
        let error = null;
        try {
            let result = await get("http://localhost:3000/multiple?i10=2&i2=haha", { json: true });
        } catch (err) {
            error = err;
        }
        expect(error).to.be.exist;
        expect(error).to.be.instanceOf(StatusCodeError);
        expect(error.statusCode).to.be.eq(400);
    })
    it('should return errorcode 404 if not found', async function () {
        let error = null;
        try {
            let result = await get("http://localhost:3000/bada", { json: true });
        } catch (err) {
            error = err;
        }
        expect(error).to.be.exist;
        expect(error).to.be.instanceOf(StatusCodeError);
        expect(error.statusCode).to.be.eq(404);
    })
})