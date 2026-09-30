# IFCS Company Website

This project is a company website for IFCS, an aviation catering software company.

The frontend is built using Next.js and the content is managed through Strapi CMS. The project includes company information, services, team members, blog posts, and a contact form.

## Technologies Used

- Next.js 16
- React
- TypeScript
- Tailwind CSS
- React Query
- Strapi CMS
- REST API

## Features

- Home page with company information, services, and latest blog posts
- About page with mission, vision, and team information
- Services page with services loaded from Strapi
- Team page with team members loaded from Strapi
- Individual team member pages
- Blog listing with search
- Individual blog pages using dynamic routing
- Contact form with validation
- Contact messages stored in Strapi
- Light and dark mode
- Responsive design
- Loading, error, and empty states
- Active navigation highlighting

## Strapi CMS

The following content is managed through Strapi:

- Site Settings
- Services
- Team Members
- Blog Posts
- Contact Messages

## Environment Setup

Create a `.env.local` file in the Next.js project:

```env
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
```

Do not commit `.env.local` to Git.

An `.env.example` file is included in the project as a reference.

## Running the Project

### 1. Start Strapi CMS

Open a terminal and go to the Strapi project.

Install the dependencies:

```bash
npm install
```

Start Strapi:

```bash
npm run dev
```

Strapi will run at:

```text
http://localhost:1337
```

The Strapi admin panel is available at:

```text
http://localhost:1337/admin
```

### 2. Start Next.js

Open another terminal and go to the Next.js project.

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The website will run at:

```text
http://localhost:3000
```

## API Integration

The Next.js application communicates with Strapi using REST APIs.

The main CMS data used by the application includes:

- Site Settings
- Services
- Team Members
- Blog Posts
- Contact Messages

## Security and Validation

The project includes validation and security checks for API requests.

### Contact Form

The contact API validates:

- Required fields
- Email format
- Name length
- Email length
- Message length

### Image Proxy

The image proxy validates:

- Image URL
- Strapi origin
- Upload path
- Image content type
- Image size

### API Requests

Requests to Strapi are restricted to the configured Strapi URL.

## Next.js Features Used

- App Router
- Server Components
- Client Components
- Dynamic routes
- `generateStaticParams`
- Incremental Static Regeneration
- API Route Handlers
- `notFound()`
- Loading and error handling
- `next/image`

## Project Structure

```text
app/
├── api/
│   ├── blogs/
│   ├── contact/
│   └── strapi-image/
├── about/
├── blog/
│   └── [slug]/
├── contact/
├── services/
├── team/
│   └── [id]/
├── components/
├── lib/
│   └── api/
├── types/
├── layout.tsx
└── page.tsx
```

## Validation

The project can be checked using:

```bash
npm run lint
```

The production build can be checked using:

```bash
npm run build
```

## Author

Sindhuja Pendyala
