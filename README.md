<p align="center">
  <a href="https://github.com/Celtian/ngx-repeat" target="blank"><img src="assets/logo.svg?sanitize=true" alt="" width="120"></a>
  <h1 align="center">NgxRepeat</h1>
</p>

[![npm version](https://badge.fury.io/js/ngx-repeat.svg)](https://badge.fury.io/js/ngx-repeat)
[![Package License](https://img.shields.io/npm/l/ngx-repeat.svg)](https://www.npmjs.com/ngx-repeat)
[![NPM Downloads](https://img.shields.io/npm/dm/ngx-repeat.svg)](https://www.npmjs.com/ngx-repeat)
[![Snyk](https://snyk.io/advisor/npm-package/ngx-repeat/badge.svg)](https://snyk.io/advisor/npm-package/ngx-repeat)
[![codecov](https://codecov.io/gh/Celtian/ngx-repeat/branch/master/graph/badge.svg?token=1IRUKIKM0D)](https://codecov.io/gh/celtian/ngx-repeat/)
[![stars](https://badgen.net/github/stars/celtian/ngx-repeat)](https://github.com/celtian/ngx-repeat/)
[![forks](https://badgen.net/github/forks/celtian/ngx-repeat)](https://github.com/celtian/ngx-repeat/)
[![HitCount](http://hits.dwyl.com/celtian/ngx-repeat.svg)](http://hits.dwyl.com/celtian/ngx-repeat)

> Angular directive for repeating HTML element by count

> ✓ _Angular 19 compatible_

Here's the [demo](http://celtian.github.io/ngx-repeat/) or [stackblitz live preview](https://stackblitz.com/edit/ngx-repeat) or [codesandbox live preview](https://codesandbox.io/s/ngx-repeat-bew8f)

- Lightweight
- No dependencies!
- Directive way

## 🛠️ Install

1. Use yarn (or npm) to install the package

```terminal
yarn add ngx-repeat
```

2. Add NgxRepeatDirective into your component`

```typescript
import { NgxRepeatDirective } from 'ngx-repeat';

@Component({
  standalone: true,
  imports: [NgxRepeatDirective /*, ...*/],
   // ...
})
```

or module

```typescript
import { NgxRepeatDirective } from 'ngx-repeat';

@NgModule({
 // ...
 imports: [
   // ...
   NgxRepeatDirective
 ]
})
```

## 🚀 Quick start

### Example code

```html
<div
  *ngxRepeat="3; 
    let index = index;
    let even = even;
    let odd = odd;
    let first = first;
    let last = last;"
>
  {{ index }} {{ even }} {{ odd }} {{ first }} {{ last }}
</div>
```

### Result

```code
  0 true false true false
  1 false true false false
  2 true false false true
```

## 🔧 Compatibility

| Angular   | ngx-repeat | Install                 |
| --------- | ---------- | ----------------------- |
| >= 14     | 2.x        | `yarn add ngx-repeat  ` |
| >= 12     | 1.x        | `yarn add ngx-repeat@1` |
| >= 5 < 13 | 0.x        | `yarn add ngx-repeat@0` |

## 📦 Dependencies

_None_

## 🪪 License

Copyright &copy; 2021 - 2024 [Dominik Hladik](https://github.com/Celtian)

All contents are licensed under the [MIT license].

[mit license]: LICENSE
