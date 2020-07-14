|-- media-dashboard
    |-- .DS_Store
    |-- .env
    |-- .env.development
    |-- .gitignore
    |-- README.md
    |-- package-lock.json
    |-- package.json
    |-- tsconfig.json
    |-- data
    |   |-- .DS_Store
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
        |-- .DS_Store
        |-- App.tsx
        |-- index.tsx
        |-- react-app-env.d.ts
        |-- serviceWorker.js
        |-- app
        |   |-- @modules
        |   |   |-- home
        |   |   |   |-- Home.tsx
        |   |   |   |-- screens
        |   |   |       |-- index.ts
        |   |   |       |-- Catalog
        |   |   |       |   |-- Catalog.tsx
        |   |   |       |-- Dashboard
        |   |   |       |   |-- Dashboard.tsx
        |   |   |       |   |-- components
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
        |   |   |       |-- Landing
        |   |   |       |   |-- Landing.tsx
        |   |   |       |-- Play
        |   |   |       |   |-- Play.tsx
        |   |   |       |-- Rewind
        |   |   |           |-- Rewind.tsx
        |   |   |-- programDetails
        |   |       |-- ProgramDetails.tsx
        |   |       |-- components
        |   |           |-- ProgramSeries
        |   |               |-- ProgramSeries.tsx
        |   |-- constants
        |   |   |-- dashboardConstants.ts
        |   |-- hooks
        |   |   |-- useCurrentTimeInMinutes.ts
        |   |   |-- useWindowDimensions.ts
        |   |-- interfaces
        |   |   |-- app.state.type.ts
        |   |   |-- channels.type.ts
        |   |   |-- programs.details.type.ts
        |   |   |-- route.type.ts
        |   |   |-- weekdays.type.ts
        |   |-- layout
        |   |   |-- index.ts
        |   |   |-- footer
        |   |   |   |-- Footer.tsx
        |   |   |-- header
        |   |       |-- Header.tsx
        |   |       |-- SearchBox.tsx
        |   |-- routes
        |   |   |-- appRoutes.ts
        |   |   |-- homeRoutes.ts
        |   |   |-- index.ts
        |   |-- shared
        |   |   |-- index.ts
        |   |   |-- BuildRoute
        |   |   |   |-- BuildRoute.tsx
        |   |   |-- Button
        |   |   |   |-- Button.tsx
        |   |   |-- ProgramBanner
        |   |   |   |-- ProgramBanner.tsx
        |   |   |-- ProgramHeader
        |   |   |   |-- ProgramHeader.tsx
        |   |   |-- SideBar
        |   |   |   |-- SideBar.tsx
        |   |   |-- Tabs
        |   |   |   |-- Tabs.tsx
        |   |   |-- TimeLine
        |   |       |-- TimeLine.tsx
        |   |-- stor
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
        |-- assets
        |   |-- .DS_Store
        |   |-- logo.jpeg
        |   |-- fonts
        |       |-- .DS_Store
        |       |-- Open_Sans
        |           |-- LICENSE.txt
        |           |-- OpenSans-Bold.ttf
        |           |-- OpenSans-BoldItalic.ttf
        |           |-- OpenSans-ExtraBold.ttf
        |           |-- OpenSans-ExtraBoldItalic.ttf
        |           |-- OpenSans-Italic.ttf
        |           |-- OpenSans-Light.ttf
        |           |-- OpenSans-LightItalic.ttf
        |           |-- OpenSans-Regular.ttf
        |           |-- OpenSans-SemiBold.ttf
        |           |-- OpenSans-SemiBoldItalic.ttf
        |-- services
        |   |-- apiInterceptor.ts
        |   |-- epgServices.ts
        |   |-- responseHandler.ts
        |-- theme
            |-- CommonStyles.tsx
            |-- GlobalStyle.tsx
            |-- fonts.d.ts
            |-- media.ts
            |-- styled.d.ts
            |-- theme.ts
