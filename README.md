Project Overview
This project is built using Next.js and Sanity CMS to create a dynamic and efficient web application. The goal of this project was to integrate Sanity CMS as the content management system for the website, allowing content to be easily managed and updated. The application is fully connected to Sanity through environment variables, and the site performance has been analyzed using GTMetrix.

Table of Contents
------------------
Project Activities
Folder Structure
Sanity CMS Integration
API Queries
Performance Analysis
Installation Instructions
Project Activities

Day 1: Project Setup and Initialization
Set up the Next.js project with default configurations.
Installed essential dependencies including React, Sanity client, and other necessary libraries.
Initialized the repository on GitHub for version control.

Day 2: Folder Structure and Component Organization
Designed the folder structure, ensuring a scalable and organized architecture.
Created a components folder to hold all React components used across the application.
Set up a pages folder following the Next.js convention for automatic routing.

Day 3: Integrating Sanity CMS
Integrated Sanity CMS into the project by installing the Sanity client.
Configured the environment file (.env.local) to store the Sanity project ID and dataset name securely.
Established connections between the website and the Sanity CMS to pull data dynamically.

Day 4: API Queries Setup
Created an api folder to hold all the necessary API queries that interact with the Sanity CMS.
Designed the queries to fetch content dynamically from Sanity.
Tested the API to ensure data is being fetched properly.

Day 5: Content Management in Sanity
Created schemas in Sanity CMS for different types of content (e.g., articles, blog posts, product details).
Used Sanity's Studio to manage and input content into the CMS.
Ensured that the content is being updated and displayed correctly on the website in real-time.

Day 6: Performance Optimization and Testing
Analyzed the website’s performance using GTMetrix and made improvements based on the recommendations.
Optimized images, minified assets, and improved the loading speed of the application.
Created a report detailing the GTMetrix results, including performance grades and optimization tips.



/project-root
│
├── /components            # Reusable React components (e.g., Header, Footer, etc.)
├── /pages                 # Next.js pages (automatically routed)
│   ├── index.js           # Homepage
│   ├── about.js           # About page
│   ├── blog.js            # Blog page
│   └── ...
├── /public                # Static assets (images, fonts, etc.)
│
├── /schema                # Sanity schema definitions
│   ├── product.js         # Schema for Products content
│   ├
│   └── ...
│
├── /sanity                # Sanity Studio configuration
│   ├── index.ts           # All Schemas
│   ├── product.ts         # Product Schema
│   └── ...
├── /styles                # Global styles (CSS, SCSS, etc.)
├── .env.local             # Environment variables (Sanity project ID, dataset, etc.)
├── next.config.js         # Next.js configuration
├── package.json           # Project dependencies and scripts
└── README.md              # This file

Key Directories:
/components: This folder contains all the reusable React components, such as header, footer, navigation menus, and any other UI elements that are used throughout the application.
/pages: Contains the main pages of the website, such as the homepage (index.js), about page (about.js), and other dynamic pages.
/schema: Contains the schema definitions for Sanity CMS. These files define the structure of content types (like blog posts, product details, etc.).
/sanity: Contains configurations related to Sanity CMS, including schema and studio setup.

Conclusion
This project integrates Next.js with Sanity CMS to create a dynamic and high-performing web application. The folder structure is designed for scalability, and the performance of the website has been optimized based on GTMetrix analysis. The application is now fully functional with content being dynamically pulled from Sanity CMS.