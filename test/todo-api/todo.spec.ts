import chai, { expect } from 'chai';
import app from '../../src/app';
import http from 'chai-http';
import { doesNotMatch } from 'assert';

chai.use(http);

describe('TODO API', function() {

    let agent: ChaiHttp.Agent;

    before('Open connection with server', function() {
        agent = chai.request(app).keepOpen();
    });

    after('Close the connection with server', function() {
        agent.close();
    });

    it('Getting all TODOs', function(done) {
        agent.get('/todo').end(function (err, res) {
            expect(res.status).to.equal(200);
            expect(res.body).to.have.length(0);

            done();
        });
    });

    it('Adding a new TODO', function(done) {
        agent.post('/todo').send({
            name: 'Task Test 1',
            description: 'Task Test Description 1'
        }).end(function (err, res) {

            expect(res.body).to.have.property('name', 'Task Test 1');
            expect(res.body).to.have.property('description', 'Task Test Description 1');
            
            expect(err).to.be.null;

            done();
        });
    });
});