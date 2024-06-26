![image](https://github.com/prakharjuit/book-movie/assets/88184122/c141155f-9876-4911-958a-91ef0d8caf94)
![image](https://github.com/prakharjuit/book-movie/assets/88184122/7da04ae2-76da-4d2b-889c-f934b752328a)
Sure! Here’s a brief explanation for your project that you can include in the README file:

---

# Movie Browser App

## Overview
This Movie Browser App is a simple web application built with React. It fetches and displays a list of TV shows using the TVMaze API. Users can browse through the list of shows and view details for each show. The app also saves user interactions in local storage, ensuring that user data persists across sessions.

## Features
- **Movie List**: Displays a list of TV shows fetched from the TVMaze API.
- **Movie Details**: Allows users to view detailed information about each show.
- **Local Storage**: Saves user interactions and data in local storage for persistence across sessions.
- **React Router**: Implements client-side routing for navigating between the list and detail views.
- **Bootstrap**: Uses Bootstrap for basic styling and responsive design.

## Installation
To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/movie-browser-app.git
   ```

2. Navigate to the project directory:
   ```bash
   cd movie-browser-app
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

The app should now be running on `http://localhost:3000`.

## File Structure
- `src/App.js`: The main component that sets up routing and state management.
- `src/components/MovieList.js`: Component for displaying the list of TV shows.
- `src/components/Moviedetails.js`: Component for displaying details of a selected show.
- `src/App.css`: Custom CSS for styling the app.

## API
This project uses the [TVMaze API](https://www.tvmaze.com/api) to fetch information about TV shows. The API endpoint used in this project is:
```plaintext
https://api.tvmaze.com/search/shows?q=all
```

## Local Storage
The app utilizes local storage to persist user data. User information is stored under the key `userInfo`.

## Dependencies
- React
- React Router DOM
- Axios
- Bootstrap

## Contributing
If you'd like to contribute to this project, feel free to fork the repository and submit a pull request.

## License
This project is licensed under the MIT License.

---

Feel free to customize this as needed!
