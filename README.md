# Cypress CURA Healthcare Service Testing

Welcome to the Mock Test Suite! This repository contains automated end-to-end tests for the CURA Healthcare Service application using Cypress. CURA is a demo healthcare application that allows users to book medical appointments.The test is limited but covers core functionality.

## Table of Contents

- [Overview](#overview)
- [Key Features of CURA](#key-features-of-cura)
- [Why Automated Testing?](#why-automated-testing)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running Tests](#running-tests)
- [Set Up Environment Variables](#set-up-environment-variables)
- [Test Scenarios](#test-scenarios)
- [Writing The First Test](#writing-the-first-test)
- [Best Practices](#best-practices)
- [Contributing](#contributing)
- [Additional Resources](#additional-resources)
- [Support](#support)


## Overview

The CURA Healthcare Service is a demo web application designed for testing and learning purposes. This Cypress test suite provides comprehensive coverage of the application's core functionality, including user authentication, appointment booking, and appointment management.

**Application URL:** https://katalon-demo-cura.herokuapp.com/

### Key Features of CURA
- Login
- Appointment booking with date and time selection
- Appointment confirmation and details
- Appointment history management
- User profile management (this is under construction)

### Why Automated Testing?
- **Catch bugs early**: Find issues before users do
- **Save time**: Tests run faster than manual testing
- **Consistency**: Same tests run the same way every time
- **Confidence**: Deploy with certainty that features work

# Getting Started

## Prerequisites

Before getting started, ensure you have the following installed on your system:

- **Node.js** (version 14.0 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)
- **Git** (for version control)
- A code editor (Any IDE of choice)

To verify installation:
```bash
node --version
npm --version
```

## 📦 Installation

1. **Clone the repository:**
```bash
git clone <repository-url>
cd cypress-cura-healthcare
```

2. **Install dependencies:**
```bash
npm install
```

This will install Cypress and all necessary dependencies listed in `package.json`.


3. **Verify Cypress installation:**
```bash
npx cypress --version
```

# 3. Running Tests

`npm test` # Gets the execution commmand from the `package.json` file

```npx cypress open --e2e ``` # Launches the Cypress test runner for browsers

`npx cypress run` # Runs test in headless mode for CI/CD

# 4. Set Up Environment Variables

Create a `cypress.env.json` file in the project root as best practise. 

## Test Scenarios

### 1. Authentication Tests
- Valid user login
- Invalid credentials handling
- User logout
- Session management

### 2. Appointment Booking And Management Tests
- Valid appointment creation
- Date/time validation
- Required field validation
- Successful booking confirmation
- Appointment details display
- View appointment history

### 4. User Profile Tests
- Not Included as page still under construction

## Writing The First Test

### Step 1: Create Custom Commands

```javascript
// cypress/support/commands.js
Cypress.Commands.add('login', (email, password) => {
  cy.request({
    method: 'POST',
    url: '/api/auth/login',
    body: { email, password }
  }).then((response) => {
    window.localStorage.setItem('authToken', response.body.token)
  })
})

// Usage in tests
cy.login('test@example.com', 'password123')
```

## Best Practices

- Write tests that are independent and can run in any order
- Use meaningful test descriptions
- Avoid hard-coded timeouts; use intelligent waits
- Keep selectors maintainable
- Use fixtures for test data
- Clear application state between tests
- Use page object model for complex applications)


## 🤝 Contributing

1. Create a new branch for your changes
2. Follow the existing test structure
3. Ensure all tests pass before submitting
4. Add documentation for new test scenarios
5. Submit a pull request with a clear description

## 📚 Additional Resources

- [Cypress Documentation](https://docs.cypress.io)
- [TDD Best Practices](https://martinfowler.com/bliki/TestDrivenDevelopment.html)
- [CURA Healthcare Demo Application](https://katalon-demo-cura.herokuapp.com/)

---

## 📞 Support

If you need help:
- 📧 Email: [beatricek006@gmail.com](mailto:beatricek006@gmail.com)
- LinkedIn: [Oshanimi Oluwakemisola](https://www.linkedin.com/in/oluwakemisola-b-oshanimi/)


---

**Have Fun Testing!** 🎉

Remember: Good tests are like good documentation - they should tell a story that anyone can understand.












































