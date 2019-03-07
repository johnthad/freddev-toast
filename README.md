# freddev-toast

This is a simple web component demo, adapted from a [presentation by Chris Lorenzo](https://github.com/ComcastSamples/wc-toast) at the 2018 RVA JavaScript Conference in Richmond, Virginia. This presentation was made at the [Fredericksburg Developers Group (FredDev)](https://www.meetup.com/FredDev/) meetup of [March 12, 2019](https://www.meetup.com/FredDev/events/256946280/).

Run this demo by cloning this repo, and opening `index.html` in a greenfield browser such as Chrome or Firefox. This demonstration does not require a web server.

If you are using IE11 or Edge, you _must_ run `npm i` to install the web components polyfill. You may also choose to install ESLint which is listed as a dev dependency in `package.json`.

The `master` branch is the final web component. The other branches break down as follows:

- `step1`: The bare web component and the component lifecycle.
- `step2`: Adding a `<slot>`
- `step3`: Attaching the shadow root.
