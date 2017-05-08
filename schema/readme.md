# Search Proto
Simple Elastic Search prototype to implement some simple behaviors

## Project Plan

* Build sample database and use JSON-Server (1h)
* Get Filters listing (4h)
    * Text Filter
    * Select One Filter
* Get Filter Values listing (2h)
* Show Basic Results Table  (4h)
    * Columns from Configuration
    * Paging Controls 
* Issue mock search (always same results) with JSON Server (4h)
* Create top bar with Tabs (4h)
* Create 'Preferences' JSON-Server (2h)
* Build Preferences Page (4h)
* Build Save Filter Function (1h)
* Hook to Elastic Search (4h)
    * Add a bunch of sample data and DataTypes (4h)
* More Filters
    * Time Filter (2h)
    * Geofilter (4h)
    * Select2 Filter (4h)
    * Between Filter (2h)
    * Slider Filter (1h)
    * Spinner Filter (1h)
    * Toggle Filter (1h)
    * Check Group Filter (4h)
* Cards on results (8h)
* Group Actions Component (4h)
* Leaflet Basic (4h)
* Real services to replace JSON-Server (16h) - Pick Language
* Results Right Click
* Hide Filter (1h)
* Show Filter (1h)
* Configuration Builder Screen (8h)
* JWT (4h)
* Intent Manager (8h)

## Filters and Values

Values include all the information that needs to be sent to the component to display correctly
* Initial Values
* Label
* Help
* Operator (Maybe)

Value Types are per Operator. 
Value Types
* Single Value (=, >, etc)
* Multiple Value (Between, In, etc.)
* Wierd - Geospatial

## Top Level Objects

* Query
* Current Configuration
* User
* Results
* Item Selection

## Query Flow
