# Cypress Gold Bar Weighing Test

This repository contains automated tests for identifying a fake gold bar among nine using a balance scale simulation. The tests are implemented using Cypress, an end-to-end testing framework.

## Project Overview

The objective is to determine which one of nine gold bars is lighter (fake) using the fewest possible weighings. The tests automate this process on a web application designed to mimic the weighing scenario.

## Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js**: Download from [Node.js official website](https://nodejs.org/).
- **npm**: Comes with Node.js, verify installation by running `npm -v` in your terminal.

## Installation

1. Clone the Repository:
```git clone <https://github.com/mkeller8619/cypress_fetch_fake_goldbar.git>```

2. Navigate to Project Directory:
```cd FETCH CODING EXERCISE```

3. Install Dependencies:
```npm install```


## Running the Tests

- **Interactive Mode**:
```npx cypress open```

- **Headless Mode**:
```npx cypress run```

## Test Structure

- **`cypress/integration`**: Contains the integration tests simulating the identification of the fake gold bar.
- **`cypress/support`**: Stores configurations and global settings for Cypress.