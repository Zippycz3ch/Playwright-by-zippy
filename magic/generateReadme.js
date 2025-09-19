const fs = require('fs');
const path = require('path');

const packageJsonPath = path.resolve('package.json');
const templatePath = path.resolve('README.template.md');
const outputPath = path.resolve('README.md');

const pkg = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));

const sectionTypes = ['dependencies', 'devDependencies'];
let packageTable = '| Package | Version | Type |\n|---------|---------|------|\n';

for (const section of sectionTypes) {
    const deps = pkg[section];
    if (deps) {
        for (const [name, version] of Object.entries(deps)) {
            packageTable += `| [${name}](https://www.npmjs.com/package/${name}) | ${version} | ${section} |\n`;
        }
    }
}

const template = fs.readFileSync(templatePath, 'utf-8');
const finalReadme = template.replace('{{PACKAGE_LIST}}', packageTable);

fs.writeFileSync(outputPath, finalReadme);
console.log('✅ README.md generated successfully.');
