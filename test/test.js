var chai = require('chai');
    chaiHttp = require('chai-http'),
    expect = chai.expect;

chai.use(chaiHttp);

describe('GET /api/question1', function() {
    it('res should return JSON', function (done) {
        chai.request('http://localhost:8080/api/question1')
            .get('/')
            .end(function (err, res) {
                expect(res).to.be.json;
                done();
            });
    });
});

describe('GET /api/question2/185828', function() {
    it('res should return HTML', function (done) {
        chai.request('http://localhost:8080/question2/185828')
            .get('/')
            .end(function (err, res) {
                expect(res).to.be.html;
                done();
            });
    });
});

describe('GET /api/question3/185828', function() {
    it('res should return HTML', function (done) {
        chai.request('http://localhost:8080/question3/185828')
            .get('/')
            .end(function (err, res) {
                expect(res).to.be.html;
                done();
            });
    });
});

describe('GET homepage', function () {
    it('should return HTTP 200 status', function (done) {
        chai.request('http://localhost:8080/')
        .get('/')
        .end(function (err ,res) {
            expect(res).to.have.status(200);
            done();
        })
    });
});

describe('GET question 1', function () {
    it('should return HTTP 200 status', function (done) {
        chai.request('http://localhost:8080/question1')
        .get('/')
        .end(function (err ,res) {
            expect(res).to.have.status(200);
            done();
        })
    });
});