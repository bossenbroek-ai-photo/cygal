# three-js-tutorial
Three JS tutorial

## Packaging set-up

### Setup
Install pre-commit and set-up hooks.

```bash
$ pipx install pre-commit
  installed package pre-commit 2.19.0, installed using Python 3.10.4
  These apps are now globally available
    - pre-commit
    - pre-commit-validate-config
    - pre-commit-validate-manifest
done! ✨ 🌟 ✨
```

```bash
$ npm install -g prettier eslint
+ eslint@8.17.0
+ prettier@2.7.1
added 83 packages from 51 contributors in 4.192s
```

Then run,

```bash
$ pre-commit install --install-hooks
pre-commit installed at .git/hooks/pre-commit
[INFO] Initializing environment for https://github.com/pre-commit/mirrors-eslint.
[INFO] Initializing environment for https://github.com/pre-commit/mirrors-eslint:eslint-config-airbnb-base@15.0.0,eslint-config-airbnb-typescript@17.0.0,eslint-loader@1.6.1,eslint-plugin-import@2.26.0,eslint-plugin-prettier@4.0.0,eslint@8.15.0.
[INFO] Installing environment for https://github.com/pre-commit/mirrors-eslint.
[INFO] Once installed this environment will be reused.
[INFO] This may take a few minutes...
....
```
