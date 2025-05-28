const fs = require('fs');
const path = require('path');

const packageJson = JSON.parse(fs.readFileSync(path.join(__dirname, '../package.json')));
const peerDeps = packageJson.peerDependencies || {};

const missingDeps = Object.entries(peerDeps)
  .filter(([dep]) => {
    if (packageJson.peerDependenciesMeta?.[dep]?.optional) {
      return false;
    }
    try {
      require.resolve(dep);
      return false;
    } catch {
      return true;
    }
  })
  .map(([dep, version]) => `${dep}@${version}`);

if (missingDeps.length > 0) {
  console.error('\n⚠️  @escapps/esc-set: Required dependencies not found:');
  missingDeps.forEach(dep => console.error(`   - ${dep}`));
  console.error('\nRun the following command to install the dependencies:');
  console.error('\nnpm install --save-dev ' + missingDeps.join(' '));
  console.error('\nOr add to your package.json:\n');
  console.error(JSON.stringify({
    devDependencies: Object.fromEntries(missingDeps.map(dep => {
      const [name, version] = dep.split('@');
      return [name, version];
    }))
  }, null, 2));
  process.exit(1);
}
