# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

# Compass-orkut

> Compass-orkut is a web application that allows users to create profiles, connect with friends, and share interests. It provides an intuitive and user-friendly experience to navigate through various features, ensuring data verification and editable fields for easy profile management.



### Table of Contents

- *Installation*
- *Usage*
- *Features*
- *Technologies used*



>### Installation
>
>1. Clone the repository to your local machine using `git clone <https://github.com/vinicius-ricardoADS/compass-orkut.git>`.
>2. Navigate to the project directory.
>3. Install the required dependencies using `npm install`.



> ### Usage
>
> 1. Start the development server with `npm start`.
> 2. Open your web browser and visit `http://localhost:3000/` to view the application.



> ### features
>
> 1. **Profile Registration:** Allows users to create a profile with their information.
> 2. **Intuitive Navigation:** Provides a user-friendly and intuitive navigation experience.
> 3. **Data Verification:** Ensures the accuracy and validity of user-entered data.
> 4. **Editable Fields:** Allows users to edit and update their profile information.



> ### Technologies used
>
> -[x] **React** The front-end of the application is built using React to create a dynamic and interactive user interface.
>
> -[x] **Vite** Vite is used as the build tool and development server, enabling faster development and quick hot module replacement.
>
> -[x] **HTML **The application's structure is created using HTML for semantic and accessible markup.
>
> -[x] **CSS **Cascading Style Sheets are used for styling the user interface, providing a visually appealing design.
>
> -[x] **Typescript** TypeScript is adopted to bring static typing to the application, enhancing code reliability and maintainability.



> ### Componentes
>
> - **Card:** The Card component represents a styled container that displays information in a visually appealing format. It may be used to showcase user profiles, community details, or other relevant data.
> - **Community**: The Community component represents a section or page where users can view and interact with different communities. It may include community names, descriptions, and members.
> - **Container**: The Container component is a reusable wrapper that provides consistent styling and layout for its child components. It helps to maintain a consistent design throughout the application.
> - **EditInfos: **The EditInfors component allows users to edit their personal information, such as name, age, location, interests, etc. It provides a form or input fields for users to update their details
> - **EditProfile**: The EditProfile component is a page or section that enables users to modify their profile settings and preferences. It may include options to update profile pictures, privacy settings, and other account-related details.
> - **Footer**: The Footer component represents the bottom section of a page or application and typically contains copyright information, links to social media, and other relevant content.
> - **Form**: The Form component is a reusable element used to create input forms for various purposes, such as login forms, registration forms, or search forms.
> - **Friends**: The Friends component displays a list of a user's friends or connections. It may include their profile pictures, names, and links to their profiles.
> - **Header**: The Header component represents the top section of a page or application and usually contains the site logo, navigation menu, and other essential elements.
> - **Home**: The Home component is the main landing page of the application, showcasing relevant content, community highlights, and user activities.
> - **Profile**: The Profile component displays an individual user's profile, including their personal information, interests, and recent activities.
> - **ProfileDetails**: The ProfileDetails component provides additional details about a user's profile, such as relationship status, birthday, age, location, and other relevant information.
> - **Pages**: The Pages component serves as a container for different pages within the application. It may include routing logic to display different pages based on the user's interactions.





