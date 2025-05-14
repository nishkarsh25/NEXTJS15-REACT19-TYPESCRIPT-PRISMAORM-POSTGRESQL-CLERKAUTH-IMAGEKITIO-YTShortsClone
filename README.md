# NEXTJS15-REACT19-TYPESCRIPT-PRISMAORM-POSTGRESQL-CLERKAUTH-IMAGEKITIO-YTShortsClone

Welcome to the NEXTJS project! This comprehensive guide will walk you through every aspect of this project, including its structure, setup instructions, usage, API endpoints, backend, frontend, contributing guidelines, license information, and how to get in touch for support or inquiries.

## Introduction

This project is a full-stack YouTube Shorts clone designed to provide a seamless experience for uploading, managing, and viewing short-form videos. It leverages the latest capabilities of the modern web stack — including server-side rendering, optimized video delivery, and robust authentication — to replicate the core functionality of a social short-video platform.

## Features

### 1. Authenticated User Management
- Seamless sign-in and sign-up using **Clerk**.
- Auto-creates a user in the database on first login.
- Secure server-side session handling for protected routes.

### 2. Video Upload with Progress Tracking
- Upload `.mp4` short-form videos directly from the browser.
- Real-time upload progress bar using `ImageKit.io`.
- Automatic file validation (e.g., max 20MB) and unique filenames.

### 3. Optimized Video Playback
- Videos rendered in vertical 9:16 format using `IKVideo` for fast CDN delivery.
- Full-screen, responsive video cards with autoplay and controls.
- Snap-scroll layout for a mobile-app-like user experience.

### 4. Personalized Shorts Feed
- Users can view their own uploaded shorts.
- Videos sorted by newest first using server-side Prisma queries.

### 5. Modern UI and UX
- Built with **React 19** and **Next.js 15** App Router.
- Responsive design using **TailwindCSS** and `shadcn/ui`.
- Smooth transitions and hover effects for enhanced interactivity.

### 6. Theme Toggle (Dark/Light Mode)
- Built-in theme switcher using `next-themes`.
- System preference detection with graceful fallback.
- Accessible toggle button with clear icon animations.

### 7. Fully Typed and Modular Codebase
- TypeScript throughout for end-to-end type safety.
- Strongly typed Prisma schema and payloads.
- Modular and reusable component architecture.



## Live Demo

- You can try out the live demo of the Yt Shorts app [here](https://nextjs-15-react-19-typescript-prismaorm-postgresql-obgj2oqgl.vercel.app/).

## 📁 Folder Structure

```
.
├── app
│   ├── api
│   │   └── auth               # Route handler for ImageKit authentication
│   ├── upload                # Upload page
│   └── page.tsx             # Home page for showing user's shorts
├── components
│   ├── header
│   │   └── navbar.tsx        # Navigation bar with auth and theme controls
│   ├── shorts
│   │   └── short-card.tsx    # Card UI for displaying individual short
│   ├── ui
│   │   ├── button.tsx        # Button component
│   │   ├── input.tsx         # Input component
│   │   ├── card.tsx          # Card layout component
│   │   ├── progress.tsx      # Upload progress bar
│   │   └── avatar.tsx        # Avatar UI
│   ├── mode-toggle.tsx       # Light/Dark/System theme toggle
│   └── theme-provider.tsx    # Theme context provider
├── lib
│   └── prisma.ts             # Prisma client instance
├── middleware.ts             # Clerk middleware to protect routes
├── prisma
│   └── schema.prisma         # Prisma schema definition
├── public                    # Static assets
├── styles
│   └── globals.css           # Global styles and Tailwind setup
├── .env                      # Environment variables
├── next.config.js            # Next.js config
├── tailwind.config.ts        # TailwindCSS config
└── tsconfig.json             # TypeScript configuration

```


## Screenshots

<!-- Include screenshots or GIFs of your app here to give users a visual representation of what your app looks like. -->
<img src="https://github.com/nishkarsh25/NEXTJS15-REACT19-TYPESCRIPT-PRISMAORM-POSTGRESQL-CLERKAUTH-IMAGEKITIO-YTShortsClone/blob/main/Screenshots/ss1.png?raw=true" alt="Screenshot 1" width="1000"> 

<img src="https://github.com/nishkarsh25/NEXTJS15-REACT19-TYPESCRIPT-PRISMAORM-POSTGRESQL-CLERKAUTH-IMAGEKITIO-YTShortsClone/blob/main/Screenshots/ss2.png?raw=true" alt="Screenshot 1" width="1000"> 

<img src="https://github.com/nishkarsh25/NEXTJS15-REACT19-TYPESCRIPT-PRISMAORM-POSTGRESQL-CLERKAUTH-IMAGEKITIO-YTShortsClone/blob/main/Screenshots/ss3.png?raw=true" alt="Screenshot 1" width="1000"> 

<img src="https://github.com/nishkarsh25/NEXTJS15-REACT19-TYPESCRIPT-PRISMAORM-POSTGRESQL-CLERKAUTH-IMAGEKITIO-YTShortsClone/blob/main/Screenshots/ss4.png?raw=true" alt="Screenshot 1" width="1000"> 



## GIF's

<img src="https://github.com/nishkarsh25/NEXTJS15-REACT19-TYPESCRIPT-PRISMAORM-POSTGRESQL-CLERKAUTH-IMAGEKITIO-YTShortsClone/blob/main/Screenshots/ss5.gif?raw=true" alt="Screenshot 1" width="1000"> 



## 🛠️ Technologies Used

This project is built using a modern web development stack, ensuring scalability, performance, and developer productivity.

- [**Next.js 15**](https://nextjs.org/) – React framework for server-side rendering and routing, using the new App Router.
- [**React 19**](https://react.dev/) – Latest React version with support for async rendering and actions.
- [**TypeScript**](https://www.typescriptlang.org/) – Strongly typed superset of JavaScript to catch errors at compile time.
- [**Prisma ORM**](https://www.prisma.io/) – Type-safe and intuitive ORM for working with databases.
- [**Neon**](https://neon.tech/) – Serverless and scalable PostgreSQL database optimized for modern web apps.
- [**PostgreSQL**](https://www.postgresql.org/) – Advanced open-source relational database system.
- [**Clerk**](https://clerk.com/) – Full-featured authentication and user management for React applications.
- [**ImageKit.io**](https://imagekit.io/) – Real-time image and video optimization with global CDN support.
- [**Tailwind CSS**](https://tailwindcss.com/) – Utility-first CSS framework for building modern responsive UIs efficiently.

This tech stack ensures your blogging application is fast, secure, and highly maintainable.



## Getting Started

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites

Before running the project, ensure you have the following installed:

- [Node.js](https://nodejs.org/en/)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/nishkarsh25/NEXTJS15-REACT19-TYPESCRIPT-PRISMAORM-POSTGRESQL-CLERKAUTH-IMAGEKITIO-YTShortsClone.git
   ```
2. Navigate to the project branch:

   ```bash
   git checkout <branch-name>
   ```
   Replace `<branch-name>` with the name of the branch you want to checkout.
   

3. Run the development server:

    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    # or
    bun dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## How to Use

This application replicates a **YouTube Shorts**-like experience with support for uploading, viewing, and managing vertical short videos.

1. **Authentication & Authorization**
   - Seamless sign-up and sign-in experience using Clerk.
   - Auth-protected routes ensure secure access to content and uploads.

2. **Upload Shorts**
   - Upload vertical MP4 videos directly to [ImageKit.io](https://imagekit.io/).
   - Tracks upload progress and validates file size (up to 20MB).
   - Video thumbnails and titles stored via Prisma in Neon PostgreSQL.

3. **View Shorts**
   - Full-page vertically scrollable feed using `snap` scrolling.
   - Shorts are fetched from the backend with associated user data.

4. **Responsive UI**
   - Designed using Tailwind CSS with responsiveness in mind.
   - Dark/light mode toggle available using system preferences.

5. **Database Integration**
   - User and shorts data managed via Prisma ORM with PostgreSQL hosted on [Neon](https://neon.tech/).
   - Automatic creation of a user entry on first login using Clerk's user ID.

6. **Media Optimization**
   - Videos are served via ImageKit CDN for fast, optimized playback.
   - Uses transformations to maintain consistent video dimensions.



## Contributing

Contributions to this project are highly appreciated! Whether you discover bugs, have feature requests, or wish to contribute improvements, your input is valuable. Here's how you can contribute:

- **Report Issues:** If you encounter any bugs or issues while using MyCalculatorApp, please open an issue on the GitHub repository. Be sure to provide detailed information about the problem and steps to reproduce it.

- **Submit Pull Requests:** If you have enhancements or fixes to propose, feel free to submit a pull request. Contributions that improve the functionality, usability, or performance of this app are welcomed and encouraged.

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. **Fork the Repository**.
2. **Create a New Branch** (`git checkout -b feature/your-feature-name`).
3. **Make Your Changes**.
4. **Commit Your Changes** (`git commit -am 'Add some feature'`).
5. **Push to the Branch** (`git push origin feature/your-feature-name`).
6. **Create a New Pull Request**.

## License

This project is licensed under the [The 3-Clause BSD License](LICENSE).Feel free to explore, modify, and contribute to this project as you see fit. Your feedback and contributions are greatly appreciated! 🚀✨


## Acknowledgments

This project is made possible by the contributions and support of various individuals and communities. Special thanks to:

- **Tailwind CSS Team:** For developing Tailwind CSS, a versatile CSS framework that simplifies web development and enhances user interfaces.
  
- **Open Source Community:** For fostering collaboration, innovation, and the sharing of knowledge, which enriches projects like My Form Validation and makes them accessible to all.



## 🙌 Credits

This project uses the following open-source technologies:

- [Next.js 15](https://nextjs.org/): A powerful React framework with support for app directory, server components, and routing.
  
- [React 19](https://reactjs.org/): A JavaScript library for building user interfaces, featuring concurrent rendering and hooks.

- [TypeScript](https://www.typescriptlang.org/): A statically typed superset of JavaScript for safer, scalable development.

- [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework for styling components with ease.

- [Lucide Icons](https://lucide.dev/): A clean and modern open-source icon library for your React components.

- [next-themes](https://github.com/pacocoursey/next-themes): Enables dark/light mode support with easy theme switching.

- [Prisma ORM](https://www.prisma.io/): A modern database toolkit for TypeScript and Node.js, used to interact with the PostgreSQL database.

- [Neon](https://neon.tech/): A fully managed, serverless PostgreSQL database platform optimized for modern applications.

- [PostgreSQL](https://www.postgresql.org/): A robust and reliable open-source relational database used to store user and video metadata.

- [Clerk](https://clerk.dev/): Provides complete authentication and user session management for Next.js apps.

- [ImageKit.io](https://imagekit.io/): A media optimization and CDN service used to upload, transform, and deliver video content efficiently.

- [Vercel](https://vercel.com/): A cloud platform used to deploy and host the application with zero-config support for Next.js.


## Author

- **Nishkarsh Gupta**
  - GitHub: [nishkarsh25](https://github.com/nishkash25)
  - Email: bm21btech11016@gmail.com



