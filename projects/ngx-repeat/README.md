<p align="center">
  <a href="https://github.com/Celtian/ngx-repeat" target="blank"><img src="assets/logo.svg?sanitize=true" alt="" width="120"></a>
  <h1 align="center">NgxRepeat</h1>
</p>

[![npm version](https://badge.fury.io/js/ngx-repeat.svg)](https://badge.fury.io/js/ngx-repeat)
[![Package License](https://img.shields.io/npm/l/ngx-repeat.svg)](https://www.npmjs.com/ngx-repeat)
[![NPM Downloads](https://img.shields.io/npm/dm/ngx-repeat.svg)](https://www.npmjs.com/ngx-repeat)
[![Build & Publish](https://github.com/celtian/ngx-repeat/workflows/Build%20&%20Publish/badge.svg)](https://github.com/celtian/ngx-repeat/actions)
[![volkswagen status](https://auchenberg.github.io/volkswagen/volkswargen_ci.svg?v=1)](https://github.com/auchenberg/volkswagen)
[![codecov](https://codecov.io/gh/Celtian/ngx-repeat/branch/master/graph/badge.svg?token=1IRUKIKM0D)](https://codecov.io/gh/celtian/ngx-repeat/)
[![stars](https://badgen.net/github/stars/celtian/ngx-repeat)](https://github.com/celtian/ngx-repeat/)
[![forks](https://badgen.net/github/forks/celtian/ngx-repeat)](https://github.com/celtian/ngx-repeat/)
[![HitCount](http://hits.dwyl.com/celtian/ngx-repeat.svg)](http://hits.dwyl.com/celtian/ngx-repeat)

> Angular directive for repeating HTML element by count

> ✓ _Angular 11, Ivy and SSR compatible_

Here's the [demo](http://celtian.github.io/ngx-repeat/) or [stackblitz live preview](https://stackblitz.com/edit/ngx-repeat)

- Lightweight
- No dependencies!
- Directive way
- Highly customizable [options](#options)...
- Responsivity supported
- Predefined breakpoints (Bootrstrap, CDK, FxLayout)

## Install

1. Use yarn (or npm) to install the package

```terminal
yarn add ngx-repeat
```

2. Add NgxRepeatModule into your module `imports`

```typescript
  import { NgxRepeatModule } from 'ngx-repeat';

  @NgModule({
   // ...
   imports: [
     // ...
     NgxRepeatModule.forRoot({
       // directive without [size] uses this value
       size: 1,
       // custom breakpoints
       breakpoints: { sm: 300, md: 400, lg: 500, xl: 600 },
       // lines be truncated in responsive mode
       responsiveSizes: {
         xs: { xs: 1, sm: 2, md: 3, lg: 4, xl: 5 },
         sm: { xs: 2, sm: 3, md: 4, lg: 5, xl: 6 },
         md: { xs: 3, sm: 4, md: 5, lg: 6, xl: 7 },
         lg: { xs: 4, sm: 5, md: 6, lg: 7, xl: 8 },
         xl: { xs: 5, sm: 6, md: 7, lg: 8, xl: 9 }
       }
     })
   ]
  })

  // or

  @NgModule({
   // ...
   imports: [
     // ...
     NgxRepeatModule.forRoot({
       // directive without [size] uses responsiveSizes.sm
       size: 'sm',
       // predefined breakpoint ('BOOTSTRAP', 'FX_LAYOUT' or 'CDK')
       breakpoints: 'BOOTSTRAP',
       // lines be truncated in responsive mode
       responsiveSizes: {
         xs: { xs: 1, sm: 2, md: 3, lg: 4, xl: 5 },
         sm: { xs: 2, sm: 3, md: 4, lg: 5, xl: 6 },
         md: { xs: 3, sm: 4, md: 5, lg: 6, xl: 7 },
         lg: { xs: 4, sm: 5, md: 6, lg: 7, xl: 8 },
         xl: { xs: 5, sm: 6, md: 7, lg: 8, xl: 9 }
       }
     })
   ]
  })

  // or

  @NgModule({
   // ...
   imports: [
     // ...
     NgxRepeatModule
   ]
  })
```

## Quick start

### Example code

```html
<p ngxRepeat>some long text</p>
```

### Result

```code
  some long...
```

## Options

### Root options

| Option              | Type             | Default                  | Description                                            |
| ------------------- | ---------------- | ------------------------ | ------------------------------------------------------ |
| **size**            | string or number | 1                        | Number of truncated lines                              |
| **breakpoints**     | object           | DEFAULT_BREAKPOINTS      | Breakpoints used in responsive mode                    |
| **responsiveSizes** | object           | DEFAULT_RESPONSIVE_SIZES | How many lines should be truncated for each breakpoint |

### Directive

| Option                 | Type         | Default                       | Description                                  |
| ---------------------- | ------------ | ----------------------------- | -------------------------------------------- |
| **[size]**             | object       | value taken from root options | Number of truncated lines or responsive mode |
| **[truncateDisabled]** | boolean      | false                         | Whether truncation is active or not          |
| **(truncateChange)**   | () => object | none                          | Event called when truncation is changed.     |

## Dependencies

_None_

## License

Copyright &copy; 2020 [Dominik Hladik](https://github.com/Celtian)

All contents are licensed under the [MIT license].

[mit license]: LICENSE
