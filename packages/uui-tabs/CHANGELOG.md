# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [1.3.0](https://github.com/umbraco/Umbraco.UI/compare/v1.3.0-rc.1...v1.3.0) (2023-05-31)

**Note:** Version bump only for package @umbraco-ui/uui-tabs

# [1.3.0-rc.1](https://github.com/umbraco/Umbraco.UI/compare/v1.3.0-rc.0...v1.3.0-rc.1) (2023-05-25)

**Note:** Version bump only for package @umbraco-ui/uui-tabs

# [1.3.0-rc.0](https://github.com/umbraco/Umbraco.UI/compare/v1.2.1...v1.3.0-rc.0) (2023-05-15)

### Features

- change events to align with native browser behavior ([#476](https://github.com/umbraco/Umbraco.UI/issues/476)) ([814bdcc](https://github.com/umbraco/Umbraco.UI/commit/814bdcccebc541aed921e8c78ae91e5c96acacfb))

## [1.2.1](https://github.com/umbraco/Umbraco.UI/compare/v1.2.0...v1.2.1) (2023-04-20)

**Note:** Version bump only for package @umbraco-ui/uui-tabs

# [1.2.0](https://github.com/umbraco/Umbraco.UI/compare/v1.2.0-rc.3...v1.2.0) (2023-04-20)

**Note:** Version bump only for package @umbraco-ui/uui-tabs

# [1.2.0-rc.3](https://github.com/umbraco/Umbraco.UI/compare/v1.2.0-rc.2...v1.2.0-rc.3) (2023-04-14)

**Note:** Version bump only for package @umbraco-ui/uui-tabs

# [1.2.0-rc.2](https://github.com/umbraco/Umbraco.UI/compare/v1.2.0-rc.1...v1.2.0-rc.2) (2023-03-27)

**Note:** Version bump only for package @umbraco-ui/uui-tabs

# [1.2.0-rc.1](https://github.com/umbraco/Umbraco.UI/compare/v1.2.0-rc.0...v1.2.0-rc.1) (2023-03-22)

**Note:** Version bump only for package @umbraco-ui/uui-tabs

# 1.2.0-rc.0 (2023-02-07)

### Bug Fixes

- **test:** add missing test cases ([f1fa095](https://github.com/umbraco/Umbraco.UI/commit/f1fa095f8a15410a10fe3c02069dc8dff0225173))

- Release/0.1.1 (#190) ([d91d346](https://github.com/umbraco/Umbraco.UI/commit/d91d346a0659f52de2a3c4746065c554f95e6328)), closes [#190](https://github.com/umbraco/Umbraco.UI/issues/190) [#188](https://github.com/umbraco/Umbraco.UI/issues/188) [#187](https://github.com/umbraco/Umbraco.UI/issues/187) [#189](https://github.com/umbraco/Umbraco.UI/issues/189)

### Features

- add href attribute to uui-button & uui-tab ([9cda1f8](https://github.com/umbraco/Umbraco.UI/commit/9cda1f8530df0ddf6a9265b6bfafa35b8d9bf385))
- add support for unknown tab elements that extend the base class ([aca64f9](https://github.com/umbraco/Umbraco.UI/commit/aca64f9a7d09917cc4361c81de03d50e4d5f0482))
- **build:** update packages to esmodules and fix rollup import ([0980022](https://github.com/umbraco/Umbraco.UI/commit/0980022acd9fedc79b017f417d4c56d247d129e3))
- support custom tabs by selecting on attributes instead of classes ([0df4cd4](https://github.com/umbraco/Umbraco.UI/commit/0df4cd48339d4e6a593fcf87b9a78c8c214db4a9))
- support custom tabs that do not necessarily extend from UUITab but still follows the interface ([9f99225](https://github.com/umbraco/Umbraco.UI/commit/9f992252561b0e339a841831366d2ae2af868f3c))

### Reverts

- Revert "Publish" ([3d183a4](https://github.com/umbraco/Umbraco.UI/commit/3d183a47c927dd55b2ebabface68a9e28b5b68f9))
- Revert "Publish" ([571707b](https://github.com/umbraco/Umbraco.UI/commit/571707b120b4afb65528851974482c41f4b35d41))

### BREAKING CHANGES

- This should now be configured globally

- internal: add more files to lerna ignore

- Publish

* @umbraco-ui/uui-action-bar@0.1.1
* @umbraco-ui/uui-avatar-group@0.1.1
* @umbraco-ui/uui-avatar@0.1.1
* @umbraco-ui/uui-badge@0.1.1
* @umbraco-ui/uui-base@0.1.1
* @umbraco-ui/uui-boolean-input@0.1.1
* @umbraco-ui/uui-box@0.2.0
* @umbraco-ui/uui-breadcrumbs@0.1.1
* @umbraco-ui/uui-button-group@0.1.1
* @umbraco-ui/uui-button-inline-create@0.1.1
* @umbraco-ui/uui-button@0.2.1
* @umbraco-ui/uui-card-content-node@0.1.1
* @umbraco-ui/uui-card-media@0.1.1
* @umbraco-ui/uui-card-user@0.1.1
* @umbraco-ui/uui-card@0.1.1
* @umbraco-ui/uui-caret@0.1.1
* @umbraco-ui/uui-checkbox@0.1.1
* @umbraco-ui/uui-css@0.1.1
* @umbraco-ui/uui-dialog-layout@0.1.1
* @umbraco-ui/uui-dialog@0.1.1
* @umbraco-ui/uui-form-layout-item@0.1.1
* @umbraco-ui/uui-form-validation-message@0.1.1
* @umbraco-ui/uui-form@0.1.1
* @umbraco-ui/uui-icon-registry-essential@0.1.1
* @umbraco-ui/uui-icon-registry@0.1.1
* @umbraco-ui/uui-icon@0.1.1
* @umbraco-ui/uui-input-lock@0.1.1
* @umbraco-ui/uui-input-password@0.1.1
* @umbraco-ui/uui-input@0.1.1
* @umbraco-ui/uui-keyboard-shortcut@0.1.1
* @umbraco-ui/uui-label@0.1.1
* @umbraco-ui/uui-loader-bar@0.1.1
* @umbraco-ui/uui-loader-circle@0.1.1
* @umbraco-ui/uui-loader@0.1.1
* @umbraco-ui/uui-menu-item@0.1.1
* @umbraco-ui/uui-pagination@0.1.1
* @umbraco-ui/uui-popover@0.1.1
* @umbraco-ui/uui-progress-bar@0.1.1
* @umbraco-ui/uui-radio@0.1.1
* @umbraco-ui/uui-ref-list@0.1.1
* @umbraco-ui/uui-ref-node-data-type@0.1.1
* @umbraco-ui/uui-ref-node-document-type@0.1.1
* @umbraco-ui/uui-ref-node-form@0.1.1
* @umbraco-ui/uui-ref-node-member@0.1.1
* @umbraco-ui/uui-ref-node-package@0.1.1
* @umbraco-ui/uui-ref-node-user@0.1.1
* @umbraco-ui/uui-ref-node@0.1.1
* @umbraco-ui/uui-ref@0.1.1
* @umbraco-ui/uui-scroll-container@0.1.1
* @umbraco-ui/uui-select@0.1.1
* @umbraco-ui/uui-slider@0.1.1
* @umbraco-ui/uui-symbol-expand@0.1.1
* @umbraco-ui/uui-symbol-file@0.1.1
* @umbraco-ui/uui-symbol-folder@0.1.1
* @umbraco-ui/uui-symbol-lock@0.1.1
* @umbraco-ui/uui-symbol-more@0.1.1
* @umbraco-ui/uui-symbol-sort@0.1.1
* @umbraco-ui/uui-table@0.1.1
* @umbraco-ui/uui-tabs@0.1.1
* @umbraco-ui/uui-tag@0.1.1
* @umbraco-ui/uui-textarea@0.1.1
* @umbraco-ui/uui-toast-notification-container@0.1.1
* @umbraco-ui/uui-toast-notification-layout@0.1.1
* @umbraco-ui/uui-toast-notification@0.1.1
* @umbraco-ui/uui-toggle@0.1.1
* @umbraco-ui/uui@0.1.1

- update references

- internal: use npm ci to counter Github Actions oddness

- internal: try with unsafe-perm to counter differentiating OS'es

- internal: downgrade Turbo to 1.1.5 to supposedly work with Github Actions

Co-authored-by: Niels Lyngsø <niels.lyngso@gmail.com>

# [1.1.0](https://github.com/umbraco/Umbraco.UI/compare/@umbraco-ui/uui-tabs@1.0.0...@umbraco-ui/uui-tabs@1.1.0) (2023-01-11)

### Features

- **build:** update packages to esmodules and fix rollup import ([0980022](https://github.com/umbraco/Umbraco.UI/commit/0980022acd9fedc79b017f417d4c56d247d129e3))

# [1.0.0](https://github.com/umbraco/Umbraco.UI/compare/@umbraco-ui/uui-tabs@1.0.0-rc.3...@umbraco-ui/uui-tabs@1.0.0) (2022-08-22)

**Note:** Version bump only for package @umbraco-ui/uui-tabs

# [1.0.0-rc.3](https://github.com/umbraco/Umbraco.UI/compare/@umbraco-ui/uui-tabs@1.0.0-rc.2...@umbraco-ui/uui-tabs@1.0.0-rc.3) (2022-08-15)

**Note:** Version bump only for package @umbraco-ui/uui-tabs

# [1.0.0-rc.2](https://github.com/umbraco/Umbraco.UI/compare/@umbraco-ui/uui-tabs@1.0.0-rc.1...@umbraco-ui/uui-tabs@1.0.0-rc.2) (2022-08-10)

**Note:** Version bump only for package @umbraco-ui/uui-tabs

# [1.0.0-rc.1](https://github.com/umbraco/Umbraco.UI/compare/@umbraco-ui/uui-tabs@1.0.0-rc.0...@umbraco-ui/uui-tabs@1.0.0-rc.1) (2022-06-28)

**Note:** Version bump only for package @umbraco-ui/uui-tabs

# [1.0.0-rc.0](https://github.com/umbraco/Umbraco.UI/compare/@umbraco-ui/uui-tabs@0.2.1...@umbraco-ui/uui-tabs@1.0.0-rc.0) (2022-06-02)

### Features

- add href attribute to uui-button & uui-tab ([9cda1f8](https://github.com/umbraco/Umbraco.UI/commit/9cda1f8530df0ddf6a9265b6bfafa35b8d9bf385))

# [1.0.0-alpha.0](https://github.com/umbraco/Umbraco.UI/compare/@umbraco-ui/uui-tabs@0.2.1...@umbraco-ui/uui-tabs@1.0.0-alpha.0) (2022-06-01)

**Note:** Version bump only for package @umbraco-ui/uui-tabs

## [0.2.1](https://github.com/umbraco/Umbraco.UI/compare/@umbraco-ui/uui-tabs@0.2.0...@umbraco-ui/uui-tabs@0.2.1) (2022-05-31)

**Note:** Version bump only for package @umbraco-ui/uui-tabs

# [0.2.0](https://github.com/umbraco/Umbraco.UI/compare/@umbraco-ui/uui-tabs@0.1.0...@umbraco-ui/uui-tabs@0.2.0) (2022-05-04)

- Release/0.1.1 (#190) ([d91d346](https://github.com/umbraco/Umbraco.UI/commit/d91d346a0659f52de2a3c4746065c554f95e6328)), closes [#190](https://github.com/umbraco/Umbraco.UI/issues/190) [#188](https://github.com/umbraco/Umbraco.UI/issues/188) [#187](https://github.com/umbraco/Umbraco.UI/issues/187) [#189](https://github.com/umbraco/Umbraco.UI/issues/189)

### BREAKING CHANGES

- This should now be configured globally

- internal: add more files to lerna ignore

- Publish

* @umbraco-ui/uui-action-bar@0.1.1
* @umbraco-ui/uui-avatar-group@0.1.1
* @umbraco-ui/uui-avatar@0.1.1
* @umbraco-ui/uui-badge@0.1.1
* @umbraco-ui/uui-base@0.1.1
* @umbraco-ui/uui-boolean-input@0.1.1
* @umbraco-ui/uui-box@0.2.0
* @umbraco-ui/uui-breadcrumbs@0.1.1
* @umbraco-ui/uui-button-group@0.1.1
* @umbraco-ui/uui-button-inline-create@0.1.1
* @umbraco-ui/uui-button@0.2.1
* @umbraco-ui/uui-card-content-node@0.1.1
* @umbraco-ui/uui-card-media@0.1.1
* @umbraco-ui/uui-card-user@0.1.1
* @umbraco-ui/uui-card@0.1.1
* @umbraco-ui/uui-caret@0.1.1
* @umbraco-ui/uui-checkbox@0.1.1
* @umbraco-ui/uui-css@0.1.1
* @umbraco-ui/uui-dialog-layout@0.1.1
* @umbraco-ui/uui-dialog@0.1.1
* @umbraco-ui/uui-form-layout-item@0.1.1
* @umbraco-ui/uui-form-validation-message@0.1.1
* @umbraco-ui/uui-form@0.1.1
* @umbraco-ui/uui-icon-registry-essential@0.1.1
* @umbraco-ui/uui-icon-registry@0.1.1
* @umbraco-ui/uui-icon@0.1.1
* @umbraco-ui/uui-input-lock@0.1.1
* @umbraco-ui/uui-input-password@0.1.1
* @umbraco-ui/uui-input@0.1.1
* @umbraco-ui/uui-keyboard-shortcut@0.1.1
* @umbraco-ui/uui-label@0.1.1
* @umbraco-ui/uui-loader-bar@0.1.1
* @umbraco-ui/uui-loader-circle@0.1.1
* @umbraco-ui/uui-loader@0.1.1
* @umbraco-ui/uui-menu-item@0.1.1
* @umbraco-ui/uui-pagination@0.1.1
* @umbraco-ui/uui-popover@0.1.1
* @umbraco-ui/uui-progress-bar@0.1.1
* @umbraco-ui/uui-radio@0.1.1
* @umbraco-ui/uui-ref-list@0.1.1
* @umbraco-ui/uui-ref-node-data-type@0.1.1
* @umbraco-ui/uui-ref-node-document-type@0.1.1
* @umbraco-ui/uui-ref-node-form@0.1.1
* @umbraco-ui/uui-ref-node-member@0.1.1
* @umbraco-ui/uui-ref-node-package@0.1.1
* @umbraco-ui/uui-ref-node-user@0.1.1
* @umbraco-ui/uui-ref-node@0.1.1
* @umbraco-ui/uui-ref@0.1.1
* @umbraco-ui/uui-scroll-container@0.1.1
* @umbraco-ui/uui-select@0.1.1
* @umbraco-ui/uui-slider@0.1.1
* @umbraco-ui/uui-symbol-expand@0.1.1
* @umbraco-ui/uui-symbol-file@0.1.1
* @umbraco-ui/uui-symbol-folder@0.1.1
* @umbraco-ui/uui-symbol-lock@0.1.1
* @umbraco-ui/uui-symbol-more@0.1.1
* @umbraco-ui/uui-symbol-sort@0.1.1
* @umbraco-ui/uui-table@0.1.1
* @umbraco-ui/uui-tabs@0.1.1
* @umbraco-ui/uui-tag@0.1.1
* @umbraco-ui/uui-textarea@0.1.1
* @umbraco-ui/uui-toast-notification-container@0.1.1
* @umbraco-ui/uui-toast-notification-layout@0.1.1
* @umbraco-ui/uui-toast-notification@0.1.1
* @umbraco-ui/uui-toggle@0.1.1
* @umbraco-ui/uui@0.1.1

- update references

- internal: use npm ci to counter Github Actions oddness

- internal: try with unsafe-perm to counter differentiating OS'es

- internal: downgrade Turbo to 1.1.5 to supposedly work with Github Actions

Co-authored-by: Niels Lyngsø <niels.lyngso@gmail.com>

## [0.1.1](https://github.com/umbraco/Umbraco.UI/compare/@umbraco-ui/uui-tabs@0.1.0...@umbraco-ui/uui-tabs@0.1.1) (2022-04-01)

**Note:** Version bump only for package @umbraco-ui/uui-tabs

# [0.1.0](https://github.com/umbraco/Umbraco.UI/compare/@umbraco-ui/uui-tabs@0.0.17...@umbraco-ui/uui-tabs@0.1.0) (2022-03-31)

### Bug Fixes

- **test:** add missing test cases ([f1fa095](https://github.com/umbraco/Umbraco.UI/commit/f1fa095f8a15410a10fe3c02069dc8dff0225173))

### Features

- add support for unknown tab elements that extend the base class ([aca64f9](https://github.com/umbraco/Umbraco.UI/commit/aca64f9a7d09917cc4361c81de03d50e4d5f0482))
- support custom tabs by selecting on attributes instead of classes ([0df4cd4](https://github.com/umbraco/Umbraco.UI/commit/0df4cd48339d4e6a593fcf87b9a78c8c214db4a9))
- support custom tabs that do not necessarily extend from UUITab but still follows the interface ([9f99225](https://github.com/umbraco/Umbraco.UI/commit/9f992252561b0e339a841831366d2ae2af868f3c))
