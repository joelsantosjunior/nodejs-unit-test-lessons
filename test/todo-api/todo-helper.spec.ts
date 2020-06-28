import chai, { expect } from 'chai';
import { Request } from 'express';
import { Todo } from '../../src/database/models/todo.model';
import { validateIncomeData, validateIncomeParams } from '../../src/helpers/todo.helper';

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
        try {
            const req = { params: { "id": "fake_id" } };

            const result = validateIncomeParams(req);
            expect(result).to.be.equals(true);

        } catch (error) {
            expect(error).to.equal(null);
        }
        done();
    });
});