# PlayWright in Typescript with Allure reports

This repository demonstrates how to set up Playwright with TypeScript and integrate Allure reports for better test reporting.

It also contains docker-compose files for easy setup of local QuickPizza from Grafana for learning purposes.

## 1. Install Initial Requirements

- Install **Java 8**, **Git**, and **VS Code** using Ninite:  
  [Ninite Installer](https://ninite.com/adoptjavax8-git-vscode/)

- Install **Node.js**:  
  [Download Node.js](https://nodejs.org/en/download)

## 2. Install Project Packages

Open VS Code and clone the repository

```bash
git clone https://github.com/your-username/playwrightTS.git
```

Open a terminal in the project **root folder** and run:

```bash
npm install
```

## 3. Install Playwright Chromium

```bash
npx playwright install chromium
```

optionally install other browsers:

```bash
npx playwright install chromium firefox webkit
```

## 4. Configure VS Code

Install the **Playwright Test for VS Code** extension:  
 <img src="wiki/extentions.png" alt="Playwright Extension" width="400"/>

If you don’t see tests in the **Testing** tab, click **Refresh**:  
 <img src="wiki/image.png" alt="Refresh Tests" width="400"/>

## 5. Run Tests

Once everything is set up, you can run the tests directly from VS Code:  
<img src="wiki/image-1.png" alt="Run Tests" width="400"/>

Generate reports
UI: npx playwright show-report
API: allure serve

### Start Docker with local QuickPizza

```bash
cd docker
docker-compose up -d
```

open http://localhost:3333/
