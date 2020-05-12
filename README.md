# DeutscheBankTechTest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## What tech have I used

- Angular Cli 
- Angular v8
- RXJS
- NGRX
- NGRX DevTools
- SCSS 
- lodash
- Bootstrap

## How it works / what I've done:

- User selects a region from the hardcoded dropdown, this populates a 2nd dropdown with countries from the given region
- Upon selection of a country a button is shown to the user
- Clicking the button displays a table showing the user that countries name / capital / population / currencies & an image of their flag
- Changing the region (select box 1) at any time removes the country dropdown / button & table from view
- Changing the country (select box 2) will update the display table automatically for the user
- Once the display table is visible the button becomes in-active
- Styles have been added to give the demo a bit more depth, there are styles also for tablet & mobile views
- SCSS used with partial files / variables etc...
- All data (region / country selection & country lists) are stored in state using NGRX
- Caching has been added through a caching service and an HTTP interceptor 
- Models have been used against most areas of functionality 
- Environment variables have been setup for global settings to give better separation of concerns and not tie settings down to individual components 

## What else would I do with more time?

- Add NGRX effects 
- Store state data as session storage to re-use
- Improve organisation of state and make use of custom selectors / MemoizedSelectors 
- Add in some loading animations to make the user experience smoother whilst interacting with the select boxes / data table

## Coding styles

- curly brackets used in template to determine which styles are custom and which are coming from Bootstrap.

## Installation & Running

Un-zip - run `npm i` then `ng serve` to run on port 4200 or `ng serve --port=####` to run on a port of your choice.

