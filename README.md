# Contenta CMS Ionic Demo

An example Ionic Framework demo using Contenta CMS as a backend.

This project also uses [angular2-jsonapi](https://github.com/ghidoz/angular2-jsonapi),
modeling each of the relevant resources as models in src/models/. This enables
writing code at a high level and never making http calls directly.

It's highly recommended that you use this example application on a mobile
device, so that you get to see all the great native features Ionic provides!

# Quick preview

![Contenta Ionic demo screenshot](/screenshots/contenta_ionic.gif?raw=true "Contenta Ionic demo screenshot")

# Installation

1. Install [contenta_jsonapi](https://github.com/contentacms/contenta_jsonapi)
 locally
1. Edit src/app/app.config.ts and replace `baseUrl` with your JSON API URL (ex:
 http://localhost:8888/api)
1. Ensure that the latest Node 6 LTS and NPM 3+ are installed
1. Run `sudo npm install -g ionic@latest`
1. Run `npm install`
1. Run `ionic serve -p 1234` where "1234" is an unused port
1. You're done!

# Building iOS/Android packages

Ionic Framework allows you to build packages fit for publishing on the App and
Google Play Store. Please read the [Ionic documentation](https://ionicframework.com/docs/cli/build/)
for more details.

# Progressive web app (PWA) integration

This application includes the minimum headers required to be added to your
phone's home screen and behave as a native application. That said, service
workers, additional PWA tags, and offline support has not been added yet.
