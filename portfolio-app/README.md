# Portfolio App

This is a personal portfolio application built using React and Vite. It showcases my professional experience, projects, and contact information.

## Features

- **Header**: Displays the title and navigation links.
- **About**: Provides background information and skills.
- **Experience**: Lists professional experiences and relevant job roles.
- **Projects**: Showcases personal or professional projects with descriptions and links.
- **Contact**: Provides contact information and a contact form.

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/portfolio-app.git
   ```

2. Navigate to the project directory:
   ```
   cd portfolio-app
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm run dev
   ```

5. Open your browser and go to `http://localhost:3000`.

## Build for Production

To create a production build, run:
```
npm run build
```

The built files will be generated in the `dist` directory.

## Deployment

To deploy the application on GitHub Pages, follow these steps:

1. Install the `gh-pages` package:
   ```
   npm install --save-dev gh-pages
   ```

2. Add the following scripts to your `package.json`:
   ```json
   "homepage": "https://yourusername.github.io/portfolio-app",
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```

3. Deploy the application:
   ```
   npm run deploy
   ```

## License

This project is licensed under the MIT License. See the LICENSE file for details.