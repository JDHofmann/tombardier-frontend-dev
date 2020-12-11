# Tombardier Frontend

Tombardier - Portfolio Building Made Simple

A browser based portfolio builder for developers to quickly build and deploy a personal site


Built with a Ruby on Rails API backend, and a React/Redux front-end (this file) for Flatiron School Software Engineering Program


## Installation

Once you fork and clone this repo

Simply run npm install to install bestbey's frontend.

```bash
npm install
```

# Image Storage

If you'd like to configure Tombardier with your own image storage, ensure you update all the files below:

once you set up your cloud storage service:
    - go to config/storage.yml 
        - add your service underneath the local sections
        - namespace all your details under a title for the serivice
    - comment out config/environments/development
        line 29:
              config.active_storage.service = :local
        - then add your servie title from config/storage.yml
    - comment out config/environments/production
        line 33:
              config.active_storage.service = :local
        - then add your servie title from config/storage.yml

# Getting Started with Tombardier Frontend

Once your Rails server is running

Start up your react app and enjoy

```bash
npm start
```


<!-- npm install:
    - redux
    - redux-thunk
    - react-redux
    - activestorage
    - react-router-dom

## Usage -->
