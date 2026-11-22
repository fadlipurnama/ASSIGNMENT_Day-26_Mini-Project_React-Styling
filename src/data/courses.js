export const COURSES_LIST = [
  {
    id: "frontend-developer-with-reactjs-001",
    title: "Frontend Developer with React.js",
    description:
      "Master modern component architecture, Hooks, state management, and API integration to build fast, responsive user interfaces.",
    image: "/assets/images/courses/frontend-reactjs.png",
    slug: "frontend-developer-with-reactjs",
    rating: 4.9,
    reviewCount: 238,
    featured: true,
    curriculum: {
      totalSections: 2,
      totalLessons: 8,
      totalDuration: "2j 45m",
      sections: [
        {
          id: "sec-1",
          title: "Fundamental React & Component Architecture",
          lessonCount: 4,
          duration: "1j 15m",
          lessons: [
            { id: "les-1", title: "Pengantar Ekosistem React & Setup Vite", duration: "08:30", isPreview: true },
            { id: "les-2", title: "JSX, Props & Komposisi Komponen", duration: "19:15", isPreview: true },
            { id: "les-3", title: "State & Event Handling dengan useState", duration: "22:40", isPreview: false },
            { id: "les-4", title: "Lifecycle & Side Effects dengan useEffect", duration: "24:35", isPreview: false },
          ],
        },
        {
          id: "sec-2",
          title: "Routing, Data Fetching & State Skalabel",
          lessonCount: 4,
          duration: "1j 30m",
          lessons: [
            { id: "les-5", title: "Styling Modern dengan Tailwind CSS", duration: "18:20", isPreview: false },
            { id: "les-6", title: "Client-Side Routing dengan React Router", duration: "22:10", isPreview: false },
            { id: "les-7", title: "Integrasi REST API & Data Fetching", duration: "26:15", isPreview: false },
            { id: "les-8", title: "Global State Management & Deployment", duration: "23:15", isPreview: false },
          ],
        },
      ],
    },
  },
  {
    id: "full-stack-javascript-mern-002",
    title: "Full-Stack JavaScript MERN Bootcamp",
    description:
      "Build end-to-end web applications from scratch using MongoDB, Express.js, React, and Node.js with JWT authentication.",
    image: "/assets/images/courses/fullstack-mern.png",
    slug: "full-stack-javascript-mern",
    rating: 4.8,
    reviewCount: 194,
    featured: true,
    curriculum: {
      totalSections: 2,
      totalLessons: 8,
      totalDuration: "3j 20m",
      sections: [
        {
          id: "sec-1",
          title: "RESTful API Backend dengan Node.js, Express & MongoDB",
          lessonCount: 4,
          duration: "1j 45m",
          lessons: [
            { id: "les-1", title: "Arsitektur MERN & Setup Server Express", duration: "12:10", isPreview: true },
            { id: "les-2", title: "Schema & Operasi CRUD dengan Mongoose", duration: "28:40", isPreview: true },
            { id: "les-3", title: "Autentikasi & Otorisasi Berbasis JWT", duration: "32:25", isPreview: false },
            { id: "les-4", title: "Validasi Request & Error Handling Middleware", duration: "31:45", isPreview: false },
          ],
        },
        {
          id: "sec-2",
          title: "Integrasi Frontend React & Deployment Full-Stack",
          lessonCount: 4,
          duration: "1j 35m",
          lessons: [
            { id: "les-5", title: "Menghubungkan React Client ke Express API", duration: "22:15", isPreview: false },
            { id: "les-6", title: "Protected Routes & Manajemen Token di Client", duration: "24:50", isPreview: false },
            { id: "les-7", title: "Upload File & Optimasi Query Database", duration: "25:10", isPreview: false },
            { id: "les-8", title: "Environment Variables & Production Deployment", duration: "22:45", isPreview: false },
          ],
        },
      ],
    },
  },
  {
    id: "full-stack-nextjs-laravel-003",
    title: "Full-Stack Next.js & Laravel Development",
    description:
      "Combine Next.js frontend performance with Laravel REST API backend, Sanctum authentication, and relational database design.",
    image: "/assets/images/courses/fullstack-nextjs-laravel.png",
    slug: "full-stack-nextjs-laravel",
    rating: 4.9,
    reviewCount: 162,
    featured: true,
    curriculum: {
      totalSections: 2,
      totalLessons: 8,
      totalDuration: "3j 10m",
      sections: [
        {
          id: "sec-1",
          title: "Backend API & Database dengan Laravel",
          lessonCount: 4,
          duration: "1j 40m",
          lessons: [
            { id: "les-1", title: "Setup Laravel API, Migration & Eloquent ORM", duration: "14:20", isPreview: true },
            { id: "les-2", title: "Relasi Database & API Resource Formatting", duration: "27:30", isPreview: true },
            { id: "les-3", title: "Autentikasi SPA & Token dengan Laravel Sanctum", duration: "31:10", isPreview: false },
            { id: "les-4", title: "Role Permission, Pagination & Filtering API", duration: "27:00", isPreview: false },
          ],
        },
        {
          id: "sec-2",
          title: "Frontend Modern dengan Next.js App Router",
          lessonCount: 4,
          duration: "1j 30m",
          lessons: [
            { id: "les-5", title: "Arsitektur Next.js App Router & Server Components", duration: "21:45", isPreview: false },
            { id: "les-6", title: "Konsumsi Laravel API, Caching & Revalidation", duration: "24:15", isPreview: false },
            { id: "les-7", title: "Form Handling, Validasi & Mutasi Data", duration: "23:30", isPreview: false },
            { id: "les-8", title: "Konfigurasi CORS & Deployment Terpisah", duration: "20:30", isPreview: false },
          ],
        },
      ],
    },
  },
  {
    id: "ui-ux-design-systems-figma-004",
    title: "UI/UX Design & Design Systems with Figma",
    description:
      "Learn user flow mapping, wireframing, interactive prototyping, and scalable design systems in Figma ready for developer handoff.",
    image: "/assets/images/courses/ui-ux-design-figma.png",
    slug: "ui-ux-design-systems-figma",
    rating: 4.8,
    reviewCount: 147,
    featured: true,
    curriculum: {
      totalSections: 2,
      totalLessons: 7,
      totalDuration: "2j 15m",
      sections: [
        {
          id: "sec-1",
          title: "UX Thinking, Wireframing & Visual Hierarchy",
          lessonCount: 3,
          duration: "1j 00m",
          lessons: [
            { id: "les-1", title: "Fundamental UX & Menentukan User Flow", duration: "15:20", isPreview: true },
            { id: "les-2", title: "Low-Fidelity Wireframing & Layout Grid", duration: "22:10", isPreview: true },
            { id: "les-3", title: "Tipografi, Warna & Kontras Aksesibel", duration: "22:30", isPreview: false },
          ],
        },
        {
          id: "sec-2",
          title: "Component Library, Prototyping & Handoff",
          lessonCount: 4,
          duration: "1j 15m",
          lessons: [
            { id: "les-4", title: "Auto Layout & Responsive Frame di Figma", duration: "19:40", isPreview: false },
            { id: "les-5", title: "Membangun Design Tokens & Component Variants", duration: "21:20", isPreview: false },
            { id: "les-6", title: "Interactive Prototyping & Micro-Interactions", duration: "18:30", isPreview: false },
            { id: "les-7", title: "Dokumentasi & Developer Handoff yang Rapi", duration: "15:30", isPreview: false },
          ],
        },
      ],
    },
  },
];