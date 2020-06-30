import chai, { expect } from 'chai';
import app from '../../src/app';
import http from 'chai-http';

chai.use(http);

const mockTodo = {
    name: 'Task Test 1',
    description: 'Task Test Description 1'
};

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
        agent.post('/todo').send(mockTodo).end(function (err, res) {

            expect(res.body).to.have.property('name', 'Task Test 1');
            expect(res.body).to.have.property('description', 'Task Test Description 1');
            
            expect(err).to.be.null;

            done();
        });
    });

    it('Removes the Todo previously added', function(done) {
        agent.get('/todo').then(function (todos) {
            agent.delete(`/todo/${todos.body[0]._id}`)
                .end(function (err, res) {
                    
                    expect(res.body).to.have.property("deleted", true);

                    done();
                });
        });
    });


    // it('Removes the Todo previously added [Async / Await]', async function() {
    //     const todos = await agent.get('/todo'); //.send();
        
    //     const deleted = await agent.delete(`/todo/${todos.body[0]._id}`); //.send();
        
    //     expect(deleted.body).to.have.property("deleted", true);
    // });
});