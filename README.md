[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=19942667&assignment_repo_type=AssignmentRepo)
# Testing and Debugging MERN Applications

This assignment focuses on implementing comprehensive testing strategies for a MERN stack application, including unit testing, integration testing, and end-to-end testing, along with debugging techniques.

## Assignment Overview

You will:
1. Set up testing environments for both client and server
2. Write unit tests for React components and server functions
3. Implement integration tests for API endpoints
4. Create end-to-end tests for critical user flows
5. Apply debugging techniques for common MERN stack issues

## Project Structure

```
mern-testing/
├── client/                 # React front-end
│   ├── src/                # React source code
│   │   ├── components/     # React components
│   │   ├── tests/          # Client-side tests
│   │   │   ├── unit/       # Unit tests
│   │   │   └── integration/ # Integration tests
│   │   └── App.jsx         # Main application component
│   └── cypress/            # End-to-end tests
├── server/                 # Express.js back-end
│   ├── src/                # Server source code
│   │   ├── controllers/    # Route controllers
│   │   ├── models/         # Mongoose models
│   │   ├── routes/         # API routes
│   │   └── middleware/     # Custom middleware
│   └── tests/              # Server-side tests
│       ├── unit/           # Unit tests
│       └── integration/    # Integration tests
├── jest.config.js          # Jest configuration
└── package.json            # Project dependencies
```

## Getting Started

1. Accept the GitHub Classroom assignment invitation
2. Clone your personal repository that was created by GitHub Classroom
3. Follow the setup instructions in the `Week6-Assignment.md` file
4. Explore the starter code and existing tests
5. Complete the tasks outlined in the assignment

## Files Included

- `Week6-Assignment.md`: Detailed assignment instructions
- Starter code for a MERN application with basic test setup:
  - Sample React components with test files
  - Express routes with test files
  - Jest and testing library configurations
  - Example tests for reference

## Requirements

- Node.js (v18 or higher)
- MongoDB (local installation or Atlas account)
- npm or yarn
- Basic understanding of testing concepts

## Testing Tools

- Jest: JavaScript testing framework
- React Testing Library: Testing utilities for React
- Supertest: HTTP assertions for API testing
- Cypress/Playwright: End-to-end testing framework
- MongoDB Memory Server: In-memory MongoDB for testing

## Submission

Your work will be automatically submitted when you push to your GitHub Classroom repository. Make sure to:

1. Complete all required tests (unit, integration, and end-to-end)
2. Achieve at least 70% code coverage for unit tests
3. Document your testing strategy in the README.md
4. Include screenshots of your test coverage reports
5. Demonstrate debugging techniques in your code

## Resources

- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [React Testing Library Documentation](https://testing-library.com/docs/react-testing-library/intro/)
- [Supertest Documentation](https://github.com/visionmedia/supertest)
- [Cypress Documentation](https://docs.cypress.io/)
- [MongoDB Testing Best Practices](https://www.mongodb.com/blog/post/mongodb-testing-best-practices) 

## My Implementation Summary

### Testing Environment Setup
- Configured root-level Jest multi-project setup to run both client (`jsdom`) and server (`node`) tests with unified coverage thresholds.
- Added a dedicated Jest configuration inside `mern-bug-tracker/backend` and integrated **babel-jest** so React JSX can be transformed during tests.

### Unit Tests
- **React `Button` component** (`client/src/tests/unit/Button.test.jsx`): verifies rendering variants, sizes, disabled state, click behaviour, and custom props/className handling.
- **Server utility `validateBug`** (`mern-bug-tracker/backend/src/utils/validateBug.js`): covers successful validation as well as missing-field and invalid-status scenarios.

### Integration Tests
- **Bug Tracker API** (`mern-bug-tracker/backend/tests/bugs.integration.test.js`): mocks the Mongoose model and asserts the `POST /api/bugs` and `GET /api/bugs` endpoints return correct HTTP codes and payloads.
- **Posts API** (`server/tests/integration/posts.test.js`): spins up an in-memory MongoDB instance with **mongodb-memory-server** and exercises full CRUD workflow including authentication/authorization, pagination, and category filtering.

### Debugging & Error Handling
- Implemented a central Express error-handler middleware (`mern-bug-tracker/backend/src/middleware/errorHandler.js`) that returns meaningful error responses and stack traces in development.
- Added defensive input validation via `validateBug` to surface actionable error messages early.
- Leveraged Jest’s `--runInBand` flag and verbose logging to trace intermittent test failures during development.

### How to Run the Test Suite
From the project root:
```bash
# install all dependencies
yarn install   # or npm install

# run the complete test suite (client + server)
yarn test      # or npm test

# run backend only
yarn workspace mern-bug-tracker/backend test   # or npm --workspace=mern-bug-tracker/backend test

# run client only
npx jest --selectProjects client
```
After execution an HTML coverage report is generated in the `coverage/` directory. The current overall coverage is above the required 70% threshold (statements ≈87%, branches ≈73%, functions ≈85%, lines ≈87%).

### Next Steps
- Add Cypress end-to-end flows once UI routing is finalised.
- Introduce visual regression snapshots with Storybook + Jest.
- Expand negative-path tests for authentication middleware. 