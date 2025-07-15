const validateBug = require('../src/utils/validateBug');

describe('validateBug', () => {
  it('should pass with valid data', () => {
    const { error } = validateBug({ title: 'Bug A', status: 'open' });
    expect(error).toBeUndefined();
  });

  it('should fail when title missing', () => {
    const { error } = validateBug({ status: 'open' });
    expect(error).toBeDefined();
  });

  it('should fail when status invalid', () => {
    const { error } = validateBug({ title: 'Bug', status: 'invalid' });
    expect(error).toBeDefined();
  });
}); 