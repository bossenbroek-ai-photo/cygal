# Cygal
Cygal is an application using SvelteJs Kit and Typescript for the frontend.

## Packaging set-up
It uses pre-commit hooks to automatically point out issues in code such as trailing whitespace and debug statements.
By pointing these issues out before code review, we hope this will allow a code reviewer to focus on the architecture of a change while not wasting time with trivial style nitpicks.

### Pre-requisites
* npm - `npm install -g`
* Node version >= v16.7.0

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
