# Diagnostica dei Sistemi Fisici


### Node.js and Tools

- Get [Node.js][node].
- Install the tool dependencies: `npm install`


## Workings of the Application

- The application filesystem layout structure is based on the [angular-seed][angular-seed] project.


## Development with `angular-phonecat`

The following docs describe how you can test and develop this application further.

### Installing Dependencies

The application relies upon various Node.js tools, such as [Bower][bower], [Karma][karma] and
[Protractor][protractor]. You can install these by running:

```
npm install
```

This will also run Bower, which will download the Angular files needed for the current step of the
tutorial.

Most of the scripts described below will run this automatically but it doesn't do any harm to run
it whenever you like.

### Running the Application during Development

- Run `npm start`.
- Navigate your browser to [http://localhost:8000/](http://localhost:8000/) to see the application 
  running.



## Application Directory Layout

```
app/                     --> all the source code of the app (along with unit tests)
  bower_components/...   --> 3rd party JS/CSS libraries, including Angular and jQuery
  jointjs                --> joint Library
  jointjs                --> joint Library
  core/                  --> all the source code of the core module 
    editor/...           --> all the source code of the editor
    foglio-di-lavoro/... --> all the source code of the Foglio di lavoro
    ....                 --> other source code
  app.css                --> default stylesheet
  app.js                 --> the main app module
  index.html             --> app layout file (the main HTML template file of the app)

e2e-tests/               --> config and source files for e2e tests
  protractor.conf.js     --> config file for running e2e tests with Protractor
  scenarios.js           --> e2e specs

node_modules/...         --> development tools (fetched using `npm`)

scripts/                 --> handy scripts
  private/...            --> private scripts used by the Angular Team to maintain this repo
  update-repo.sh         --> script for pulling down the latest version of this repo (!!! DELETES ALL CHANGES YOU HAVE MADE !!!)

bower.json               --> Bower specific metadata, including client-side dependencies
karma.conf.js            --> config file for running unit tests with Karma
package.json             --> Node.js specific metadata, including development tools dependencies
```


## Contact

For more information on AngularJS, please check out https://angularjs.org/.


[angular-seed]: https://github.com/angular/angular-seed
[bower]: http://bower.io/
[git-home]: https://git-scm.com/
[git-setup]: https://help.github.com/articles/set-up-git
[google-phone-gallery]: http://web.archive.org/web/20131215082038/http://www.android.com/devices
[jasmine]: https://jasmine.github.io/
[jdk]: https://wikipedia.org/wiki/Java_Development_Kit
[jdk-download]: http://www.oracle.com/technetwork/java/javase/downloads
[karma]: https://karma-runner.github.io/
[node]: https://nodejs.org/
[protractor]: http://www.protractortest.org/
[selenium]: http://docs.seleniumhq.org/
