---
sidebar_position: 1
---

# Intro

A methodology for designing *frontend projects*, aimed [**at dividing the application according to business logic and scopes of responsibility.**][refs-splitting]

- Provides [**clarity, controllability and adaptability**][refs-arch-req] architecture
- Based on [**time-tested**][refs-motivation-why] design practices and concepts
    > `SOLID`, `GRASP`, `DDD`, `Separation of Concerns`, `Vertical Slices`, `Public API`, `Isolation`
- Suggests dividing the project according to [**business units**][ext-ubiq-lang]

:::note

The methodology is not tied to a specific stack and is applicable *to any frontend projects* in general.

But the current version gives examples and is developed on the basis of a bunch of `JavaScript` + `React`

:::

![feature-sliced-banner](/img/banner.jpg)

[Getting Started][refs-getstarted] | [Fundamental Concepts][refs-concepts] | [Practical Guides & Examples][refs-guides] | [Reference material][refs-reference] | [About metodolology][refs-about]
|---|---|---|---|---|

---

## Overview

The methodology is designed to **simplify and standardize the decomposition of logic for large and long-lived projects.**

To do this, it introduces a number of [concepts][refs-concepts] and [abstractions][refs-splitting], on which the architecture *can be based* from project to project - from here we get *a number of advantages*

:::info

[Module][refs-module] - the structural unit of the project (file / directory)

:::

### Explicit business logic

Modules are distributed according to [scope of influence, business responsibility and technical purpose][refs-splitting]

Thanks to this, *the architecture is standardized and becomes easier to read*

### Adaptation to new conditions

Each component of the architecture has its own purpose and does not affect the others

Thanks to this *it is possible to independently modify the functionality of the application to meet new requirements without unforeseen consequences*

### Technical debt and refactoring

Each module is independent and self-sufficient

Thanks to this *you can rewrite it from scratch without unexpected side effects*

### Scaling the project and the team

The increase in functionality leads to significantly less complexity of the project, since all the logic is distributed deterministically and in isolation

Thanks to this *it is easy to add and onboard new people to the team, as well as expand the functionality of the project*

### Controlled reuse of logic

Each module has its own limitations and recommendations for reuse according to [its layer][refs-splitting--layers]

Thanks to this, *a balance is maintained between compliance with the `DRY` principle and the ability to customize the module logic without overhead overrides*

## See also

- [Reasons for creating the methodology][refs-motivation]
- [(Guide) How to reach a low coupling of modules][refs-low-coupling]
- [Examples of the methodology application][refs-examples]
- [(Guide) Migration from feature-slices (v1)][refs-migration-v1]
  - *Also contains a comparison of the two versions and the reasons for creating v2*

[refs-motivation]: /docs/get-started/motivation

[refs-splitting--layers]: /docs/concepts/app-splitting#group-layers
<!-- FIXME: Refer to the root later, not to the first element -->

[refs-module]: /docs/reference/glossary#module

[refs-low-coupling]: /docs/guides/low-coupling
[refs-migration-v1]: /docs/guides/migration-from-v1
<!-- FIXME: Refer to the root later, not to the first element -->
[refs-examples]: /docs/guides/examples/viewer

[refs-getstarted]: /docs/get-started/overview
[refs-concepts]: /docs/concepts/architecture
[refs-guides]: /docs/guides/migration-from-v1
[refs-reference]: /docs/reference/glossary
[refs-about]: /docs/about/mission

[refs-splitting]: /docs/concepts/app-splitting
[refs-arch-req]: https://feature-sliced.design/docs/concepts/architecture#требования
[refs-motivation-why]: https://feature-sliced.design/docs/get-started/motivation#-почему-не-хватает-существующих-решений

[ext-ubiq-lang]: https://thedomaindrivendesign.io/developing-the-ubiquitous-language