# React Media Dashboard App

# Installation

```sh
$ git clone https://github.com/rahmanfasalu/media-dashboard.git
$ cd media-dashboard
$ npm install
$ npm run start:dev
```

> npm stard:dev will start a json server with channels info and with program details.
> Used same data for all the programs detail page

# Features

- Media dashboard with channels and program info
- Responsive dashboard screen, with re-render componenet on every resize.
- Realtime timeline, will udpated the position every minute.
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
- node.js local server

# Folder Structure

```sh
|-- media-dashboard
   |-- .env                                      // Create-react-app env for prod
   |-- .env.development                          // Create-react-app env for dev
   |-- README.md
   |-- package-lock.json
   |-- package.json
   |-- tsconfig.json
   |-- data                                     // For server
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
       |   |   |       |       |-- ChannelBar            // Channels info section, render all
       |   |   |       |       |   |-- ChannelBar.tsx      // - the programs data
       |   |   |       |       |   |-- ChannelPrograms.tsx
       |   |   |       |       |   |-- ChannelShow.tsx
       |   |   |       |       |-- ChannelSideBar         // Render all the channel
       |   |   |       |       |   |-- ChannelSideBar.tsx  // siderbar with logo
       |   |   |       |       |-- RangeHeightSlider    // Just a Range sldier to change
       |   |   |       |       |   |-- RangeHeightSlider.tsx // the height of the channel bar
       |   |   |       |       |-- TimeBar       // Compoent for 00 -- 23 hour header
       |   |   |       |       |   |-- TimeBar.tsx
       |   |   |       |       |-- WeekBar     // Compoent for rendering current week
       |   |   |       |           |-- WeekBar.tsx //- days with date & month
       |   |   |       |-- Landing           // Home Module - Landing screen
       |   |   |       |   |-- Landing.tsx
       |   |   |       |-- Play            // Home Module - Play screen
       |   |   |       |   |-- Play.tsx
       |   |   |       |-- Rewind            // Home Module - Rewind screen
       |   |   |           |-- Rewind.tsx
       |   |   |-- programDetails         ********** @Module programDetails  **********
       |   |       |-- ProgramDetails.tsx  // Program details entry components
       |   |       |-- components         // Components specific to the program details
       |   |           |-- ProgramSeries
       |   |               |-- ProgramSeries.tsx
       |   |-- constants                // Application constants
       |   |   |-- dashboardConstants.ts
       |   |-- hooks                   // Application custom hooks
       |   |   |-- useCurrentTimeInMinutes.ts // Trigger every minute, for limeline position change
       |   |   |-- useWindowDimensions.ts // Window resize trigger, for responsivness
       |   |-- interfaces           // App Interfaces
       |   |   |-- app.state.type.ts
       |   |   |-- channels.type.ts
       |   |   |-- programs.details.type.ts
       |   |   |-- route.type.ts
       |   |   |-- weekdays.type.ts
       |   |-- layout           // App layouts
       |   |   |-- index.ts
       |   |   |-- footer
       |   |   |   |-- Footer.tsx
       |   |   |-- header
       |   |       |-- Header.tsx
       |   |       |-- SearchBox.tsx
       |   |-- routes       // Application routes
       |   |   |-- appRoutes.ts
       |   |   |-- homeRoutes.ts
       |   |   |-- index.ts
       |   |-- shared     // Shared compoents
       |   |   |-- index.ts
       |   |   |-- BuildRoute  // For building dynamic route
       |   |   |   |-- BuildRoute.tsx
       |   |   |-- Button        // Common button component
       |   |   |   |-- Button.tsx
       |   |   |-- ProgramBanner  // Large image banner with show duration
       |   |   |   |-- ProgramBanner.tsx
       |   |   |-- ProgramHeader   // Show info title
       |   |   |   |-- ProgramHeader.tsx
       |   |   |-- SideBar         // Side bar tile with centrally aligned image/icon
       |   |   |   |-- SideBar.tsx
       |   |   |-- Tabs           // Custom tabs
       |   |   |   |-- Tabs.tsx
       |   |   |-- TimeLine     // Real time time indicator, will change the position every minute
       |   |       |-- TimeLine.tsx
       |   |-- stor            // for redux
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
       |-- assets         // Application Assets
       |   |-- logo.jpeg
       |-- services     // API services
       |   |-- apiInterceptor.ts  // Axios interceptor
       |   |-- epgServices.ts     // Dashboard data services
       |   |-- responseHandler.ts // Custom success/error handler
       |-- theme                 // For styled compoents and theme
           |-- CommonStyles.tsx
           |-- GlobalStyle.tsx
           |-- fonts.d.ts
           |-- media.ts
           |-- styled.d.ts
           |-- theme.ts

```
