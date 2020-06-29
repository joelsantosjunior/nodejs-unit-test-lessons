import { expect } from 'chai';
import 'chai/register-should';
import { Request } from 'express';
import { Todo } from '../../src/database/models/todo.model';
import { validateIncomeData, validateIncomeParams, testObject } from '../../src/helpers/todo.helper';

describe('TODO Helper', () => {

    it('Validate a Todo Object', function (done){
        const incomeData = {
            name: 'has name',
            description: 'has description'
        };
        try {
            const validation = validateIncomeData(incomeData as Todo);
            expect(validation).to.be.equal(true);
            done();
        } catch (error) {
            expect(error).to.equal(null);
            done();
        }
    });

    it('Validate a Todo Object [without name] throws an error', function (done) {
        const incomeData = {
            name: '',
            description: 'has description'
        };
        try {
            validateIncomeData(incomeData as Todo);
        } catch (error) {
            expect(error.message).to.equal('Todo name is missing');
        }

        done();
    });
;
    it('Validate a Todo Object [without description] throws an error', function (done) {
        const incomeData = {
            name: 'has name',
            description: ''
        };
        try {
            validateIncomeData(incomeData as Todo);
        } catch (error) {
            expect(error.message).to.equal('Todo description is missing');
        }
        done();
    });

    it('Validate the ID param [without id] throws an error', function (done) {
        try {
            const req = { params: {} } as Request;
            validateIncomeParams(req);
        } catch (error) {
            expect(error.message).to.equal('Id is missing');
        }
        done();
    });

    it('Validate the ID param', function (done) {
        const req = { params: { "id": "fake_id" } };

        const result = validateIncomeParams(req);
        expect(result).to.be.equals(true);

        done();
    });

    it("Validate the test object using SHOULD", function (done) {

        const response = testObject();

        response.should.have.property('percentages').with.length(8);
        response.should.have.nested.include({ "jolera.productSKU": "Insurance + Boxx Score Monitoring" });
        response.should.have.property("membership").that.is.equals("Cyberboxx**");
        response.should.have.nested.include({ "jolera.business.industry": "Educational Services" });

        done();
    });
});