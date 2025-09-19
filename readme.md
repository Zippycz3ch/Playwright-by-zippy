# Project Setup Guide

## 1. Install Dependencies

- Install **Java 8**, **Git**, and **VS Code** using Ninite:  
  [Ninite Installer](https://ninite.com/adoptjavax8-git-vscode/)

- Install **Node.js**:  
  [Download Node.js](https://nodejs.org/en/download)

## 2. Install Project Packages

Open a terminal in the project **root folder** and run:

```bash
npm install
```

## 3. Install Playwright Chromium

```bash
npx playwright install chromium
```

## 4. Configure VS Code

Install the **Playwright Test for VS Code** extension:  
 <img src="extentions.png" alt="Playwright Extension" width="400"/>

If you don’t see tests in the **Testing** tab, click **Refresh**:  
 <img src="image.png" alt="Refresh Tests" width="400"/>

## 5. Run Tests

Once everything is set up, you can run the tests directly from VS Code:  
<img src="image-1.png" alt="Run Tests" width="400"/>
