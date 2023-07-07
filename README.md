# events-calendar-ui

## Requirements / Purpose

### Introduction

-   Create a calendar UI.
-   This task will require you to use React Typescript.
-   The aim of this project is to allow the users to add events to the calendar.

### MVP

-   Create a page that displays a calendar. The calendar should include a title showing the current month and a grid of days.
-   Each of the days cells should be clickable.
-   When a user click on a chosen day, a modal should appear
-   The user should be able to navigate between months - view the upcoming month, previous month etc.
-   The modal should include a form with the following fields:

    -   Event Name
    -   Start Date
    -   End date
    -   Location
    -   Label

-   When an event is created, a card component should be displayed on the corresponding date cell of the calendar.
-   The event card component should also be clickable and display a modal with event details and a countdown timer showing the time remaining until the event.
-   When a user tries to add an event with a start date in the past, an error message should appear.
-   The user should be able to filter the calendar by labels or location, allowing them to view specific events based on their preferences.

---

## Build Steps

-   Install required packaged using: npm install
-   Run using: npm run dev

---

## Features

-   Days cells are clickable.
-   The user can navigate between months.
-   When a user click on a chosen day, a modal appears with the fields:
    -   Event Name
    -   Start Date
    -   End date
    -   Location
    -   Label
-   When an event is created, a card component is displayed on the corresponding date cell of the calendar.
-   The event card component is clickable and displays a modal with event details and a countdown timer showing the time remaining until the event.
-   When a user tries to add an event with a start date in the past, an error message will appear.

---

## Known issues

-   Some issues including randomly displaying wrong month when navigating through dates.

---

## Future Goals

-   Finish adding all CRUD operations.

## What did you struggle with?

-   Find a better way to handle date instead of adding and subtracting to get correct date.

## Further details, related projects, reimplementations

-   This project is a frontend project for https://github.com/Ehabel/events-calendar-spring
