# Blue Bite Website

Bluebite landing page application built with Next.js, TypeScript, Tailwind CSS, and custom fonts.

## Tech Stack

`Next.js:` React framework for server-rendered or static web apps.<br/>
`TypeScript:` Type-safe JavaScript for improved developer experience and maintainability.<br/>
`Tailwind CSS:` Utility-first CSS framework for fast UI development.<br/>
`Jest & RTL:` Testing setup with Jest and React Testing Library for unit and integration testing.<br/>
`ESLint & Prettier:` Code linting and formatting configurations to enforce code standards.<br/>
`Husky:` Git hooks for automating pre-commit tasks (e.g., linting).

```bash
bluebite
│
├── src
│   ├── app
│   │   ├── page.tsx              # Main page file
│   │   ├── layout.tsx            # Layout configuration
│   │   ├── globals.css           # Global styles
│   │   ├── storytelling          # Storytelling related page
│   │   ├── products              # Products page and components
│   │   ├── product-commerce      # Product commerce related page
│   │   ├── personalization       # Personalization page
│   │
│   ├── components
│   │   ├── specific
│   │   │   ├── CheckIsImageLogo  # Component to verify image/logo
│   │   │   ├── Features          # Features section component
│   │   │   ├── HamburgerButton   # Hamburger menu button component
│   │   │   ├── Hero              # Hero section component
│   │   │   ├── MiscLogo          # Miscellaneous logo component
│   │   │   ├── Partnerships      # Partnerships component
│   │   │   ├── Sheet             # Sheet component for modals and overlays
│   │   │   ├── Testimonials      # Testimonials section component
│   │   │
│   │   ├── common
│   │   │   └── Navbar            # Common navbar component
│   │
│   ├── icons                     # Icons used across the website
│   ├── style                     # Additional styles and configurations
│   ├── typography                # Typography and font configurations
│
├── jest.config.js                # Jest configuration
├── tsconfig.json                 # TypeScript configuration
├── tailwind.config.ts            # Tailwind CSS configuration
├── .eslintrc.js                  # ESLint configuration
├── .prettierrc                   # Prettier configuration


```

## Installation and Setup

To run this project locally, follow these steps:

```bash
git clone https://github.com/nirmalkar/bluebite.git
cd bluebite
```

## Environment

create a .env.local file in the root and add following variables

```bash
touch .env.local
```

```bash
# add these inside the .env.local file with the real values.
NEXT_PUBLIC_FILES_BASE_URL=files_base_url
NEXT_PUBLIC_LOGIN_URL=login_url
```

## Install Dependencies

### Using npm:

```bash
npm install
```

### Or with Yarn:

```bash
yarn install
```

## Running the Development Server

To start the development server, run the following command:

```bash
npm run dev
```

Or with Yarn

```bash
yarn dev
```

## Building for Production

To build the project for production:

```bash
npm run build
```

Or:

```bash
yarn build
```

The output will be in the .next folder. You can then serve the project using the following command:

```bash
npm run start
```

## Testing

The project uses Jest and React Testing Library (RTL) for unit and integration tests.

To run all the tests:

```bash
npm run test
```

Or:

```bash
yarn test
```

For testing with coverage:

```bash
npm run test:coverage
```

Or:

```bash
yarn test:coverage
```

## Linting and Formatting

The project is configured with ESLint for linting and Prettier for code formatting.

To run the linter:

```bash
npm run lint
```

Or:

```bash
yarn lint
```

To fix linting issues automatically:

```bash
npm run lint:fix

```

Or:

```bash
yarn lint:fix
```

To format code with Prettier:

```bash
npm run format
```

Or:

```bash
yarn format
```

## Husky Pre-commit Hook

The project is set up with Husky to run a pre-commit hook, ensuring that code quality checks are performed before any changes are committed.

The Husky pre-commit hook will run the linter and formatter on all staged files before a commit is allowed to proceed. This ensures that only well-linted and formatted code is committed to the repository.

### How it works

Husky is installed and configured to run on git commit.
It uses the command in the .husky/pre-commit file to run the linter and formatter on staged files.<br/>
To bypass the Husky pre-commit hook (if needed), use the --no-verify flag:

```bash
git commit --no-verify
```

To manually run the pre-commit hook:

```bash
npx husky run pre-commit
```
