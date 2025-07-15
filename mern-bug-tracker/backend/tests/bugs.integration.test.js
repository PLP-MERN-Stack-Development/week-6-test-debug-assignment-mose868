const request = require('supertest');
const app = require('../src/server');
const Bug = require('../src/models/bug');

jest.mock('../src/models/bug');

describe('Bug API', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('POST /api/bugs', () => {
    it('should create a bug and return 201', async () => {
      const mockBug = { _id: '123', title: 'Bug', status: 'open' };
      Bug.create.mockResolvedValue(mockBug);

      const res = await request(app)
        .post('/api/bugs')
        .send({ title: 'Bug' });

      expect(res.statusCode).toBe(201);
      expect(res.body.title).toBe('Bug');
    });
  });

  describe('GET /api/bugs', () => {
    it('should return bugs list', async () => {
      const mockBugs = [{ _id: '123', title: 'Bug' }];
      Bug.find.mockResolvedValue(mockBugs);

      const res = await request(app).get('/api/bugs');

      expect(res.statusCode).toBe(200);
      expect(res.body.length).toBe(1);
    });
  });
}); 