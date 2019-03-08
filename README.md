# freddev-toast

This is a simple web component demo, adapted from a [presentation by Chris Lorenzo](https://github.com/ComcastSamples/wc-toast) at the 2018 RVA JavaScript Conference in Richmond, Virginia. This presentation was made at the [Fredericksburg Developers Group (FredDev)](https://www.meetup.com/FredDev/) meetup of [March 12, 2019](https://www.meetup.com/FredDev/events/256946280/).

## Installing

Run this demo by cloning this repo, and opening `index.html` in a greenfield browser such as Chrome or Firefox. This demonstration does not require a web server. (Similarly the other `*.html` files may be openned with a `file:///` URL.)

If you are using Edge, you _must_ run `npm i` to install the web components polyfill. You may also run `npm i` if you wish to install ESLint, which is listed as a dev dependency in `package.json`.

This demo is _not_ suitable for IE11. That would have required [babel](https://babeljs.io/) which is beyond the scope of this demo.

## Individual Demos

These demos are on the master branch. The do not vary between branches.

- `template-ex.html`: A simple `<template>` example.
- `custom-element-ex.html`: A simple custom element example with lifecycle methods.
- `shadowdom-ex.html`: Attaching the Shadow DOM inside a custom element (introduces `<slot>`).
- `template-shadow.html`: Instantiating a `<template>` in a custom element, and attaching the Shadow DOM.

## Element Demo

The `master` branch is the final web component. The other branches break down as follows:

- `step1`: Create a toast component that we can open and close.
- `step2`: Add a `duration` attribute, and close the toast after _n_ seconds.
- `step3`: Cache the parsed template.
- `step4`|`master`: Use to custom elements on the same page.
