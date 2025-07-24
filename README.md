#  Netflix Clone

A modern Netflix UI clone built with React + Vite + Tailwind CSS + Firebase Authentication.  
It replicates core Netflix functionality including sign in/sign up, movie browsing, and YouTube trailer streaming using the TMDB API.

---

##  Live Demo

 [View Live](https://netflix-clone-8f202.web.app)

---

##  Screenshots

> (Make sure you place your images inside a `screenshots/` folder in your project)

![Netflix Clone Home](screenshots/home-netflix-clone.png)
![Netflix Clone Alt View](screenshots/home-netflix1-clone.png)

---

##  How It Works

- 🔐 Users must **sign up or log in** to access the app.
- 🎬 Once authenticated, they can **browse movies** fetched from the TMDB API.
- 📺 Clicking on a movie poster redirects to **YouTube**, showing the trailer or related video.

---

##  Features

- **User Authentication** – Firebase Email/Password login & signup
- **Responsive UI** – Tailwind CSS for mobile-first design
- **Movie Listings** – TMDB API integration for movies and shows
- **YouTube Trailers** – Click on a movie to watch its trailer
- **Toast Notifications** – Feedback with `react-toastify`
- **Protected Routes** – React Router access control based on login
- **Dynamic Navbar** – Navbar styling changes on scroll

---

## 🛠 Tech Stack

- **Frontend**: React 19, Vite
- **Styling**: Tailwind CSS
- **Authentication**: Firebase Auth
- **Database**: Firebase Firestore
- **API**: TMDB (The Movie Database)
- **Routing**: React Router DOM
- **Notifications**: React Toastify

---

##  Getting Started

###  Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/netflix-clone.git
cd netflix-clone
Install dependencies

bash
Copy code
npm install
Set up Firebase

Create a Firebase project

Add your Firebase config to src/firebase.js

Set up TMDB

Get a TMDB API key

Add it to src/components/TitleCards/TitleCards.jsx

Start the development server

bash
Copy code
npm run dev
 Available Scripts
npm run dev – Start the development server

npm run build – Build the app for production

npm run preview – Preview the production build

npm run lint – Run ESLint checks

🤝 Contributing
Fork the repo

Create a new branch (git checkout -b feature/AmazingFeature)

Commit your changes (git commit -m 'Add some AmazingFeature')

Push to the branch (git push origin feature/AmazingFeature)

Open a Pull Request

📄 License
This project is licensed under the MIT License.

🙏 Acknowledgments
Netflix – UI inspiration

TMDB – Movie data and images

Firebase – Auth and database services

markdown
Copy code

---
