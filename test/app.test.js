const request = require('supertest');
const app = require('../src/index');

describe('Application', () => {
  it('should return hello message', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.body.message).toContain('Hello from multi-stage pipeline');
  });

  it('health check should return 200', async () => {
    const response = await request(app).get('/health');
    expect(response.status).toBe(200);
    expect(response.body.status).toBe('healthy');
  });
});
