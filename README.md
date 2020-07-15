# React Media Dashboard App

# Installation

```sh
$ git clone https://github.com/rahmanfasalu/media-dashboard.git
$ cd media-dashboard
$ npm install
$ npm run start:dev
$ open http://localhost:3000/home/dashboard in browser
```

> npm stard:dev will start a json server with channels info and with program details.
> Used same data for program details page

# Features

- Media dashboard with channels and program info
- Responsive dashboard screen, with re-render componenet on every resize.
- Realtime time line, will udpated the position every minute.
- Dynamic channel height.
- Now button for showing the current show screen.
- Program detailed page with dynamic tabs

# Ref Links

```sh
-   /home/dashboard
-   /show/dummy_program_id
```

# Technology used

- React
- React hooks
- Typescript
- Redux
- Styled component for styling
- node.js for creating local server

# Folder Structure

```sh
|-- media-dashboard
   |-- .env                                      // Create-react-app env for prod
   |-- .env.development                          // Create-react-app env for prod
   |-- README.md
   |-- package-lock.json
   |-- package.json
   |-- tsconfig.json
   |-- data                                     // For local server
   |   |-- channels.json
   |   |-- db.js
   |   |-- program.json
   |   |-- server.js
   |-- public
   |   |-- favicon.ico
   |   |-- index.html
   |   |-- logo192.png
   |   |-- logo512.png
   |   |-- manifest.json
   |   |-- robots.txt
   |-- src
       |-- App.tsx
       |-- index.tsx
       |-- react-app-env.d.ts
       |-- serviceWorker.js
       |-- app                                      // Application Components and utility scripts
       |   |-- @modules                               ********** @Module Home **********
       |   |   |-- home
       |   |   |   |-- Home.tsx                    // Home module entry component
       |   |   |   |-- screens
       |   |   |       |-- index.ts
       |   |   |       |-- Catalog                 // Home module -catalog screen
       |   |   |       |   |-- Catalog.tsx
       |   |   |       |-- Dashboard               // Home module -Dashboard screen,
       |   |   |       |   |-- Dashboard.tsx       // Dashboard screen entry component
       |   |   |       |   |-- components          // Components specific to the dashboard
       |   |   |       |       |-- index.ts
       |   |   |       |       |-- ChannelBar
       |   |   |       |       |   |-- ChannelBar.tsx
       |   |   |       |       |   |-- ChannelPrograms.tsx
       |   |   |       |       |   |-- ChannelShow.tsx
       |   |   |       |       |-- ChannelSideBar
       |   |   |       |       |   |-- ChannelSideBar.tsx
       |   |   |       |       |-- RangeHeightSlider
       |   |   |       |       |   |-- RangeHeightSlider.tsx
       |   |   |       |       |-- TimeBar
       |   |   |       |       |   |-- TimeBar.tsx
       |   |   |       |       |-- WeekBar
       |   |   |       |           |-- WeekBar.tsx
       |   |   |       |-- Landing                  // Home Module - Landing screen
       |   |   |       |   |-- Landing.tsx
       |   |   |       |-- Play                     // Home Module - Play screen
       |   |   |       |   |-- Play.tsx
       |   |   |       |-- Rewind                   // Home Module - Rewind screen
       |   |   |           |-- Rewind.tsx
       |   |   |-- programDetails               ********** @Module programDetails  **********
       |   |       |-- ProgramDetails.tsx          // Program details entry components
       |   |       |-- components               // Components specific to the program details
       |   |           |-- ProgramSeries
       |   |               |-- ProgramSeries.tsx
       |   |-- constants                               // Application constants
       |   |   |-- dashboardConstants.ts
       |   |-- hooks                                   // Application custom hooks
       |   |   |-- useCurrentTimeInMinutes.ts          //Trigger every minute
       |   |   |-- useWindowDimensions.ts              // Window resize trigger
       |   |-- interfaces                              // App Interfaces
       |   |   |-- app.state.type.ts
       |   |   |-- channels.type.ts
       |   |   |-- programs.details.type.ts
       |   |   |-- route.type.ts
       |   |   |-- weekdays.type.ts
       |   |-- layout                                // App layouts
       |   |   |-- index.ts
       |   |   |-- footer
       |   |   |   |-- Footer.tsx
       |   |   |-- header
       |   |       |-- Header.tsx
       |   |       |-- SearchBox.tsx
       |   |-- routes                                 // Application routes
       |   |   |-- appRoutes.ts
       |   |   |-- homeRoutes.ts
       |   |   |-- index.ts
       |   |-- shared                                // Shared compoents
       |   |   |-- index.ts
       |   |   |-- BuildRoute                       // For building dynamic route
       |   |   |   |-- BuildRoute.tsx
       |   |   |-- Button                           // Common button component
       |   |   |   |-- Button.tsx
       |   |   |-- ProgramBanner                    // Large image banner with show duration
       |   |   |   |-- ProgramBanner.tsx
       |   |   |-- ProgramHeader                    // Show info title
       |   |   |   |-- ProgramHeader.tsx
       |   |   |-- SideBar                         // Sidebar single tile
       |   |   |   |-- SideBar.tsx
       |   |   |-- Tabs                            // Custom tabs
       |   |   |   |-- Tabs.tsx
       |   |   |-- TimeLine                       // Time indicator,
       |   |       |-- TimeLine.tsx
       |   |-- stor                               // for redux
       |   |   |-- configureStore.ts
       |   |   |-- initialState.ts
       |   |   |-- actionTypes
       |   |   |   |-- channelsActionTypes.ts
       |   |   |   |-- programsActionTypes.ts
       |   |   |-- actions
       |   |   |   |-- channelActions.ts
       |   |   |   |-- programActions.ts
       |   |   |-- reducers
       |   |       |-- channelReducer.ts
       |   |       |-- index.ts
       |   |       |-- programInforReducer.ts
       |   |-- utils
       |       |-- dashboardUtil.ts
       |-- assets                                  // Application Assets
       |   |-- logo.jpeg
       |-- services                                // API services
       |   |-- apiInterceptor.ts                   // Axios interceptor
       |   |-- epgServices.ts                      // Dashboard data services
       |   |-- responseHandler.ts                  // Custom success/error handler
       |-- theme                                   // For styled compoents
           |-- CommonStyles.tsx
           |-- GlobalStyle.tsx
           |-- fonts.d.ts
           |-- media.ts
           |-- styled.d.ts
           |-- theme.ts

```
