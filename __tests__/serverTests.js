const request = require('supertest');
const app = require('../server/src/server.ts')



  describe('GET /', function() {
    it('responds with JSON', function(done) {
      request(app)
        .get('/api')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
  });
  