# hotel-app

## Mongo Database

The database is using Mongo DB. The Schema Types can be found in the api/models folder. The connection string is setup to work locally so be sure to install mongo on your local machine. 

[Vist This Link](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x-tarball/)

with homebrew:

```terminal
brew update
```

```terminal
brew install mongodb
```

Once installed, you can connect to the database directly using: 

```terminal 
mongosh
```

There you can create a new user using db.users.insertOne()

or just run the api and use the api/auth/register endpoint with the following JSON data

```
{
    "username": "admin",
    "password": "admin",
    "phone": "00000000000",
    "city": "London",
    "country": "GB",
    "email": "admin@admin.com"
}
```

## API

The api is an express API with a mongoose (Mongo DB) ODM. It can be run with npm run server from the root of the repo. For security, it uses JWT authehtication and hashes passwords with bcrypt. 

### Installation 
To install modules for the API simply run:

```terminal
npm i
```

From the api folder.

#### Usage

##### Controllers

The controllers can be found in the controllers folder and they use a mongoose Schema type to perform CRUD operations for users, hotels and rooms.

##### Counts
The hotel enpoint can return a countByCity or countByType in order to populate the feature components in the client app. (cities are currently represented using Block Capitals to enable the search to work.)

##### Hotels

A hotel can be created after logging into the app with your account username and password. Once logged in, a dashboard button will appear in the top right hand side of the screen on the homepage. This will take you to the admin dashboard. 

Then select 'Add Hotels' to create a new hotel. The create a hotel form does not use an image uploader as a 3rd party image service would incur costs to run for this test. Instead a default picture is provided for aesthetic purposes. 

Once a hotel is created you can create a room. The hotels featured on the client app are set for the following cities:

BERLIN
MADRID
LONDON

##### Rooms

To create a room head to the dashboard and click 'Add Rooms' in the sidebar. Enter the information you wish to add and select your hotel to add the room to from the dropdown. 

### Running the API

To run the api type

```terminal
npm run start
```

from the api folder. 

To run both client and api run: 

```terminal
npm run start 
```

from the root folder.

## Client

The Client application is built in React and uses React Hooks for state management. 


### Installation 
To install modules for the client simply run:

```terminal
npm i
```

From the client folder.


#### Usage

##### Components

The components for this application can be found in the client/components folder. 

##### Context

This application uses an AuthContext and a SearchContext to manage state.

##### Custom Hooks

This application uses a custom hook (useFetch) which can be found in the client/hooks folder

##### Pages

The pages for this application can be found in the pages folder.

