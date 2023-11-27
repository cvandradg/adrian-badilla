# DietasAdrianNxWorkspace

This project was generated using [Nx](https://nx.dev).

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="450"></p>

🔎 **Smart, Fast and Extensible Build System**

##Material to read (of personal interest)

1. https://www.youtube.com/watch?v=dau7kQMdH4A&ab_channel=JoshuaMorony
2. https://www.angulararchitects.io/aktuelles/angulars-future-without-ngmodules-lightweight-solutions-on-top-of-standalone-components/
3. https://www.google.com/search?q=nrwl+nx+standalone&oq=nrwl+nx+standalone&aqs=chrome..69i57j33i160l2.3452j0j7&sourceid=chrome&ie=UTF-8#fpstate=ive&vld=cid:3d95c9d5,vid:e-BpE9d3NIw
4. https://blog.nrwl.io/generating-standalone-component-based-angular-applications-and-libraries-with-nx-35462037f6b1
5. https://www.google.com/search?q=how+can+I+make+sure+i%27m+un+subcribing+from+all+observables%3F&oq=how+can+I+make+sure+i%27m+un+subcribing+from+all+observables%3F&aqs=chrome..69i57j33i10i160l3.9335j0j4&sourceid=chrome&ie=UTF-8#fpstate=ive&vld=cid:eb43e9fa,vid:VSiJANdCGsM
6. https://www.youtube.com/watch?v=VSiJANdCGsM&t=11s&ab_channel=nivek
7. https://www.youtube.com/watch?v=4FkFmn0LmLI&ab_channel=JoshuaMorony
8. https://www.youtube.com/shorts/5MOTRAfgYTc
9. https://blog.bitsrc.io/how-i-have-set-up-ngrx-in-angular-16-with-standalone-components-163499804fbb
10. https://www.telerik.com/blogs/angular-14-introducing-standalone-components
11. https://netbasal.com/angular-standalone-components-welcome-to-a-world-without-ngmodule-abd3963e89c5
12. https://www.angulararchitects.io/en/book#getebook
13. https://www.youtube.com/watch?v=f7BrCyxRxlY&ab_channel=KevinDavila
14. https://www.youtube.com/watch?v=e03EHZIVJtM&ab_channel=DecodedFrontend
15. https://www.tiktok.com/@midudev/video/7240112102138989851?_r=1&_t=8d1yheXrXxF
16. https://dorey.github.io/JavaScript-Equality-Table/
17. https://www.youtube.com/watch?v=tWy8zaWvkvk&ab_channel=JoshuaMorony
18. https://state-adapt.github.io/angular
19. https://www.youtube.com/watch?v=EULYt4sHD1k&ab_channel=MikePearson%2FEngineering
20. https://www.youtube.com/watch?v=sIeTGWSUK7M&ab_channel=JoshuaMorony
21. https://www.youtube.com/watch?v=54q7P9PB0WU&ab_channel=JoshuaMorony
22. https://www.youtube.com/watch?v=WvMxnGfqEis&ab_channel=JoshuaMorony
23. https://www.youtube.com/watch?v=xPmtsD5LRqQ&ab_channel=NG-DEConference
24. https://jcs.wtf/catch-switchmap-error-rxjs-operator/
25. https://www.ngxs.io/v/v3.5/ngxs-labs/dispatch-decorator
26. https://github.com/ngrx/platform/issues/3384

important 27. https://dev.to/this-is-angular/removing-boilerplate-code-in-ngrx-component-store-1f83

important 28. https://dev.to/jonrimmer/where-to-initiate-data-load-in-ngrx-358l

## TODO

1. enablePersistance to enable offline mode
2. Escaner de codigos QR para ver si puede comerlo o no
3. Recordatorio de subir los datos.
4. Admin, mandar un correo o mensaje si hace tiempo no entra a la aplicacion.

## Questions

1. I'm trying to simplify components code in ui/components folder. They are all using Service1, Service2 and common variables.
   I Thought into TS mixins to provide them all with SharedModulesModule (which currently, they are all using) but I ran into 2 issues
   first, I can't import a service within a TS mixin
   second, I don't think they all will always consume SharedModulesModule.

So, I created a Handler class with the @Directive decorator, in its constructor I'm providing Injector to provide the service to anyone extending
the Handler class without the need to redeclare it. Not sure if this approach is good.

2. Observables vs Promises, not sure which one to pick when working with Firebase services.

3. I have a bunch of Observers in a Handler helper class to reduce code in components, that doesnt seems to be right but I'm not sure how to reduce
   observers code size

4. Login set a localStorage variable to know if the user already tried to log in to call for the firebase user information, all of firebase authentication calls are taking more than 30 seconds after cache is cleared. I want to avoid using localStorage, how can I do this if fibebase is taking 30secs to 1min to return a call back
   saying if the user is authenticated or not.

5. I have a verify email, and a getSession method, I want to run an Observer for one, and a different observer form another. Basically, 2 subscribtios.
   This, to use the Observer already created and have a clean solution. The reason is beacuse I want to display certain notifications once one finished, and
   different actions once the other finishes, they need to be sequencial. Basically, if the user get verified correctly, I want to notify that, then, I want to get the SSO session and route the user into the application.

6. Should I use defer to add logic before the subscripcion of a observable?

7. How should a spinner be?

8. The firebase uncaught exception always bubbles up/propagates (what is the right word?) to the angular ErrorHandler.This solution is right?:
   https://stackoverflow.com/questions/69270802/uncaught-in-promise-firebaseerror

9. I dont fully understand "composition" vs inheritance.
   I had this { provide: AbstractFirebaseAuthHandler, useClass: HandlerService }
   and "public firebaseAuthHandler: AbstractFirebaseAuthHandler"
   in a component "A".
   I was expecting to inherit HandlerService properties inside the "A" component
   without the need of using the "extend" word. But I was not inheriting the properties.
   To access them I needed de constructor firebaseAuthHandler variable.
10. In ErrorHandlerService i'm using injector to avoid circular dependency, not sure why this is. Why I'm I getting circular dependency? why can't I use
    inject instead?

11. I can't provide store using provideStore() in main, not sure why but It says that StoreModule is not provided (angular is not the one failing, it fails in runtime)

12. In the HTML of login component I'm calling a service Subject property, is this a good practice?
13. How to test effects?

## Userfull resources:

This is not a complete list, but of the things that I remeber were useful.

1. Composition over Inheritance
   https://www.youtube.com/watch?v=rcDsRyVhcxY&ab_channel=JoshuaMorony

## Quick Start & Documentation

[Nx Documentation](https://nx.dev/angular)

[10-minute video showing all Nx features](https://nx.dev/getting-started/intro)

[Interactive Tutorial](https://nx.dev/react-tutorial/01-create-application)

## Adding capabilities to your workspace

Nx supports many plugins which add capabilities for developing different types of applications and different tools.

These capabilities include generating applications, libraries, etc as well as the devtools to test, and build projects as well.

Below are our core plugins:

- [Angular](https://angular.io)
  - `ng add @nx/angular`
- [React](https://reactjs.org)
  - `ng add @nrwl/react`
- Web (no framework frontends)
  - `ng add @nrwl/web`
- [Nest](https://nestjs.com)
  - `ng add @nrwl/nest`
- [Express](https://expressjs.com)
  - `ng add @nrwl/express`
- [Node](https://nodejs.org)
  - `ng add @nrwl/node`

There are also many [community plugins](https://nx.dev/community) you could add.

## Generate an application

Run `ng g @nx/angular:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Run `ng g @nx/angular:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are shareable across libraries and applications. They can be imported from `@dietas-adrian-nx-workspace/mylib`.

## Development server

Run `ng serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng g component my-component --project=my-app` to generate a new component.

## Build

Run `ng build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev/angular) to learn more.

## ☁ Nx Cloud

### Distributed Computation Caching & Distributed Task Execution

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-cloud-card.png"></p>

Nx Cloud pairs with Nx in order to enable you to build and test code more rapidly, by up to 10 times. Even teams that are new to Nx can connect to Nx Cloud and start saving time instantly.

Teams using Nx gain the advantage of building full-stack applications with their preferred framework alongside Nx’s advanced code generation and project dependency graph, plus a unified experience for both frontend and backend developers.

Visit [Nx Cloud](https://nx.app/) to learn more.
