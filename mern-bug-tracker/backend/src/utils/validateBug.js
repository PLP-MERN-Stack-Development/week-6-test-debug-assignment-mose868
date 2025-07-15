const validStatuses = ['open', 'in-progress', 'resolved'];

function validateBug(bug) {
  if (!bug.title || typeof bug.title !== 'string') {
    return { error: 'Title is required' };
  }
  if (bug.status && !validStatuses.includes(bug.status)) {
    return { error: 'Invalid status value' };
  }
  return { value: bug };
}

module.exports = validateBug; 