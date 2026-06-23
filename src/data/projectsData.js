// Import HRIS images
import hrisLogin from '../assets/projects/hris/login.png'
import hrisDashboard from '../assets/projects/hris/dashboard.png'
import hrisProfile from '../assets/projects/hris/employee-profile.png'
import hrisLeave from '../assets/projects/hris/leave-management.png'
import hrisAdmin from '../assets/projects/hris/admin.png'
import hrisErd from '../assets/projects/hris/erd.png'
import hrisAttendance from '../assets/projects/hris/attendance-kiosk.png'
import hrisDtr from '../assets/projects/hris/dtr.png'

// Import Ordering System images
import orderingProducts from '../assets/projects/ordering/products.png'
import orderingCheckout from '../assets/projects/ordering/checkout.png'
import orderingDatabase from '../assets/projects/ordering/database.png'

// FoodHub POS screenshots
import posDashboard from '../assets/projects/pos/pos-dashboard.png'
import posCashier from '../assets/projects/pos/pos-cashier.png'
import posReports from '../assets/projects/pos/pos-reports.png'
import posReceipt from '../assets/projects/pos/pos-receipt.png'

export const projectsData = [
  {
    id: 1,
    title: "Human Resource Information System (HRIS)",
    overview: "A full-stack web-based HR system that automates employee records, leave applications, attendance tracking, and DTR generation. Built as a capstone project with role-based access, digital signatures, and REST API integration.",
    technologies: ["PHP", "MySQL", "JavaScript", "HTML", "CSS", "Kotlin", "REST API"],
    features: [
      "Secure Employee Authentication",
      "Role-Based Access Control",
      "Personal Data Sheet (201 File) Management",
      "Leave Application & Approval Workflow",
      "Digital Approver Signature for Leave Forms",
      "Mobile Attendance Kiosk (Kotlin-based)",
      "Daily Time Record (DTR) Generation",
      "Automated Monthly Leave Credit via Cron Job",
      "Chatbot Assistance via REST API",
      "Administrative Dashboard for HR Management",
      "Audit-Friendly Employee Record Management"
    ],
    contributions: [
      "Designed and normalized the HRIS database structure",
      "Developed secure authentication system",
      "Built the employee dashboard and profile management",
      "Implemented leave management and approval workflow",
      "Created digital signature functionality for approval",
      "Built Daily Time Record (DTR) computation logic",
      "Developed mobile attendance kiosk using Kotlin",
      "Integrated chatbot functionality using REST API"
    ],
    challenge: "The main challenge was ensuring data consistency across interconnected modules — employee records, attendance logs, leave applications, and DTR computation. I solved this by designing a well-structured relational database with proper foreign key relationships and validation rules at both the frontend and backend.",
    screenshots: {
      login: hrisLogin,
      dashboard: hrisDashboard,
      profile: hrisProfile,
      leave: hrisLeave,
      admin: hrisAdmin,
      erd: hrisErd,
      attendanceKiosk: hrisAttendance,
      dtr: hrisDtr
    }
  },
  {
    id: 2,
    title: "Ordering System",
    overview: "A web-based ordering system for product browsing, order placement, and transaction recording. Features product listing, checkout workflow, receipt generation, and database storage for tracking.",
    technologies: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"],
    features: [
      "Product Listing and Display",
      "Order Placement System",
      "Transaction Recording",
      "Order Receipt Generation",
      "Database Storage and Management",
      "User-Friendly Interface"
    ],
    contributions: [
      "Designed and structured database schema",
      "Developed product management module",
      "Implemented order processing workflow",
      "Built frontend user interface",
      "Integrated backend transaction handling"
    ],
    challenge: "A major challenge was managing the flow of data from product selection to order confirmation while ensuring data accuracy. I solved this by implementing structured database tables, input validation, and a clear order processing workflow.",
    screenshots: {
      products: orderingProducts,
      checkout: orderingCheckout,
      database: orderingDatabase
    }
  },
  {
    id: 3,
    title: "FoodHub POS - Inventory & Cashier System",
    overview: "A complete restaurant Point of Sale system with cashier POS, admin dashboard, inventory management, sales reports, and receipt printing. Built for dine-in, takeout, and delivery orders with offline sync support.",
    technologies: ["React", "PHP", "MySQL", "Axios", "REST API", "HTML5/CSS3", ".htaccess", "Session Storage"],
    features: [
      "Cashier POS with mobile-friendly interface",
      "Admin dashboard with real-time analytics",
      "Product & category management (CRUD)",
      "Order tracking with thermal receipt printing",
      "Discount system (Senior/PWD/Employee 20-15%)",
      "Table management for dine-in (1-10)",
      "Sales reports with custom date range filtering",
      "Excel/CSV and PDF report export",
      "Offline sync support (local storage queue)",
      "Cashier performance monitoring",
      "Session-based login persistence",
      "RESTful API with .htaccess routing"
    ],
    contributions: [
      "Designed complete database schema (11 tables with relationships)",
      "Built RESTful API with PHP and .htaccess URL rewriting",
      "Developed responsive React frontend with mobile-first CSS",
      "Implemented real-time cart and checkout system",
      "Created thermal receipt printing with Save as PDF option",
      "Added offline sync using localStorage queue",
      "Built admin dashboard with analytics",
      "Implemented sessionStorage for login persistence across refresh"
    ],
    challenge: "The main challenge was ensuring the POS worked seamlessly on both desktop and mobile devices. I implemented responsive design with CSS Grid, Flexbox, and React state management to detect screen size and adjust layout from 4 columns on desktop to 2 columns on mobile. Another challenge was creating real-time stock updates during checkout to prevent overselling, solved with database transactions and row-level locking.",
    screenshots: {
      dashboard: posDashboard,
      pos: posCashier,
      reports: posReports,
      receipt: posReceipt
    }
  }
];