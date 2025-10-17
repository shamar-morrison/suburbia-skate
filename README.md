# Suburbia Skate - Interactive Skateboard Experience

Welcome to the Suburbia Skate project! This is a modern, visually-rich, and interactive website for a fictional skateboard brand. The site is built using a cutting-edge tech stack to deliver a unique user experience, featuring 3D skateboard models, physics-based animations, and a headless CMS for content management.

![CleanShot 2025-10-16 at 16 17 57](https://github.com/user-attachments/assets/0a40f154-4302-45b0-a1a8-be0466dc4a17)

## ✨ Key Features

- **Interactive 3D Models:** Built with React Three Fiber and Drei, allowing users to view and interact with skateboard products in 3D.
- **Physics-Based Animations:** GSAP and Matter.js are used to create dynamic and engaging animations.
- **Headless CMS:** Content is managed through [Prismic](https://prismic.io/), enabling easy updates for products, team members, and other content.
- **Slice Machine:** Prismic's Slice Machine is used for creating and managing reusable page sections (Slices).
- **Modern Frontend:** Built with Next.js 15 (App Router) and React 19 for a fast, server-rendered experience.
- **Responsive Design:** Styled with Tailwind CSS for a fully responsive layout that works on all devices.

## 🛹 Skateboard Customizer

![Skateboard Customizer](https://i.imgur.com/7y6fzID.gif)

One of the standout features of this project is the Skateboard Customizer. Users can personalize their skateboards by selecting different decks, wheels, trucks, and grip tape options. The customizer provides a real-time 3D preview of the skateboard as users make their selections, enhancing the shopping experience.

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **3D Graphics:** [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction), [Drei](https://github.com/pmndrs/drei)
- **Animation:** [GSAP (GreenSock Animation Platform)](https://gsap.com/), [Matter.js](https://brm.io/matter-js/)
- **CMS:** [Prismic](https://prismic.io/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Linting & Formatting:** [ESLint](https://eslint.org/), [Prettier](https://prettier.io/)

## 🚀 Getting Started

Follow these instructions to get a local copy of the project up and running.

### Prerequisites

- [Node.js](https://nodejs.org/en) (v20 or later recommended)
- [npm](https://www.npmjs.com/), [yarn](https://yarnpkg.com/), or [pnpm](https://pnpm.io/)

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/shamar-morrison/suburbia-skate.git
    cd suburbia-skate
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  **Set up Prismic:**
    This project uses Prismic as a headless CMS. To connect to your own Prismic repository:
    - Rename `.env.local.example` to `.env.local` (if it exists) or create a new `.env.local` file.
    - Add your Prismic repository API endpoint to the file. You can find this in your Prismic dashboard (`Settings > API & Security`).
      ```
      PRISMIC_ENDPOINT=https://your-repo-name.prismic.io/api/v2
      ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📂 Project Structure

- `src/app/`: Contains the core application logic, including pages and layouts, following the Next.js App Router structure.
- `src/components/`: Shared React components used across the application (e.g., `Header`, `Footer`).
- `src/slices/`: Prismic Slices, which are reusable sections of the website managed in the Prismic editor.
- `customtypes/`: Defines the custom data models (like `skateboard`, `skater`) for Prismic.
- `public/`: Static assets like images, fonts, and 3D model resources.

## 📜 Available Scripts

In the project directory, you can run the following commands:

- `npm run dev`: Starts the development server with Next.js Turbopack.
- `npm run build`: Builds the application for production.
- `npm run start`: Starts a production server.
- `npm run lint`: Runs ESLint to check for code quality issues.
- `npm run format`: Formats the code using Prettier.
- `npm run slicemachine`: Starts the Prismic Slice Machine, which is a local development tool for creating and managing Slices.

## 🌐 Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
