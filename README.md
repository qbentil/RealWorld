# RealWorld Example App (iArticles)

This project implements the [RealWorld example app](https://github.com/gothinkster/realworld) using React with Next.js, TailwindCSS, and TypeScript. The application integrates with the RealWorld API to provide a fully functional blogging platform.

## Features

### Authentication

- **Sign Up:** Create a new account.
- **Sign In:** Log in with existing credentials.

### Articles

- **Global Feed:** View all articles (unauthenticated users).
- **Filter by Tags:** Filter articles based on selected tags.
- **Your Feed:** View articles from authors you follow (authenticated users).
- **View Article Details:** See detailed information about a specific article.
- **Follow Author:** Follow the author of an article.
- **Favorite Article:** Mark articles as favorites.
- **Unfavorite Article:** Remove articles from favorites.
- **Post Comment:** Add comments to an article.
- **Delete Comment:** Remove comments from an article.
- **Create Article:** Write and publish a new article.
- **Edit Article:** Update an existing article.
- **Delete Article:** Remove an article.

### Profile

- **My Articles:** View articles written by the user.
- **My Favorite Articles:** View articles favorited by the user.
- **Update Profile:** Update profile information and settings.

## Technologies Used

- **Next.js:** React framework for server-side rendering and static site generation.
- **TailwindCSS:** Utility-first CSS framework for styling.
- **TypeScript:** Typed JavaScript for better code quality and maintainability.

## Project Structure

The project is structured as follows:
```bash
├── components # Reusable React components
├── app # Main application components and pages including layouts
├── services # API integration and services
├── interface #  Typescript interfaces and types
├── utils # Utility functions and helpers
├── context # Redux context and reducers
├── hooks # Custom Services with local storage state
├── public # Static assets (images, icons, etc.)
└── README.md # Project documentation
```


## Getting Started

### Prerequisites

- Node.js (>=14.x)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/qbentil/RealWorld.git

   ```

2. Install dependencies:

```bash
cd RealWorld
npm install
# or
yarn install

```

3. Running the application:

```bash
npm run dev
# or
yarn dev
    
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.


