````markdown path=README.md mode=EDIT
# Netflix Clone

A modern Netflix clone built with React, Vite, and Firebase. This application replicates the core functionality of Netflix including user authentication, movie browsing, and video streaming.

##  Features

- **User Authentication**: Sign up and sign in with Firebase Auth
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Movie Database**: Integration with TMDB API for movie data
- **Video Streaming**: YouTube embedded player for trailers
- **Dynamic Navigation**: Scroll-based navbar styling
- **Toast Notifications**: User feedback with react-toastify
- **Protected Routes**: Authentication-based routing

##  Tech Stack

- **Frontend**: React 19, Vite
- **Styling**: Tailwind CSS
- **Authentication**: Firebase Auth
- **Database**: Firebase Firestore
- **API**: The Movie Database (TMDB)
- **Routing**: React Router DOM
- **Notifications**: React Toastify

##  Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/netflix-clone.git
cd netflix-clone
```

2. Install dependencies:
```bash
npm install
```

3. Create a Firebase project and add your config to `src/firebase.js`

4. Get TMDB API key and add it to `src/components/TitleCards/TitleCards.jsx`

5. Start the development server:
```bash
npm run dev
```

##  Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

##  Screenshots

![Home Page](screenshots/home.png)
![Login Page](screenshots/login.png)

##  Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

##  License

This project is licensed under the MIT License.

##  Acknowledgments

- Netflix for the design inspiration
- TMDB for the movie database API
- Firebase for authentication and database services
````

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
