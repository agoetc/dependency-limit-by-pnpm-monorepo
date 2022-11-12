function readPackage(pkg) {
  pkg.devDependencies = {
    ...pkg.devDependencies,
    typescript: '^4.7.4',
  }

  return pkg
}

module.exports = {
  hooks: {
    readPackage,
  },
}
