function readPackage(pkg) {
  pkg.devDependencies = {
    ...pkg.devDependencies,
    prettier: '^2.7.1',
    typescript: '^4.7.4',
  }

  return pkg
}

module.exports = {
  hooks: {
    readPackage,
  },
}
