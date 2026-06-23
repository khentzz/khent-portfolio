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
        overview: "A full-stack web-based Human Resource Information System developed as a capstone project to automate and streamline HR processes. The system manages employee records, Personal Data Sheet (201 File), leave applications with digital approval signatures, mobile attendance tracking via kiosk, Daily Time Record (DTR) computation, and administrative management. It also includes automated leave credit generation through cron jobs and chatbot assistance via REST API integration. The system centralizes HR operations, improves data accuracy, and enhances workflow efficiency through a secure and role-based web platform.",

        technologies: ["PHP", "MySQL", "JavaScript", "HTML", "CSS", "Kotlin", "REST API"],

        features: [
            "Secure Employee Authentication",
            "Role-Based Access Control (Employee / Admin)",
            "Employee Dashboard with Profile Overview",
            "Personal Data Sheet (201 File) Management",
            "Employee Information Management (CRUD Operations)",
            "Leave Application System",
            "Leave Approval Workflow",
            "Digital Approver Signature for Leave Forms",
            "Leave Status Tracking (Pending / Approved / Rejected)",
            "Mobile Attendance Kiosk (Kotlin-based)",
            "Daily Time Record (DTR) Generation and Computation",
            "Automated Monthly Leave Credit via Cron Job",
            "Chatbot Assistance via REST API Integration",
            "Administrative Dashboard for HR Management",
            "Database Integration with Relational Structure",
            "Audit-Friendly Employee Record Management",
            "Base64 File/Image Handling for Records"
        ],

        contributions: [
            "Designed and normalized the HRIS database structure with proper relationships",
            "Developed secure authentication system for employees and administrators",
            "Built the employee dashboard and profile management module",
            "Implemented the Personal Data Sheet (201 File) system",
            "Developed the leave management and approval workflow system",
            "Created digital signature functionality for leave approval",
            "Implemented automated leave credit generation using Cron Jobs",
            "Developed mobile attendance kiosk using Kotlin for time-in/time-out logging",
            "Built Daily Time Record (DTR) computation and reporting logic",
            "Integrated chatbot functionality using REST API",
            "Developed CRUD operations across all HR modules",
            "Designed responsive and user-friendly interface for the system"
        ],

        challenge: "One of the major challenges encountered during the development of the HRIS was ensuring data consistency and synchronization across multiple interconnected modules, particularly between employee records, attendance logs, leave applications, and DTR computation. This was addressed by designing a well-structured relational database with proper foreign key relationships and enforcing validation rules at both the frontend and backend. Another challenge was implementing accurate time tracking for attendance and ensuring that duplicate entries and invalid logs were prevented, which was solved through logic validation and controlled kiosk-based input handling.",

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
        overview: "A web-based ordering system developed to streamline product browsing, order processing, and receipt generation. The system allows users to select products, place orders, and store transactions in a centralized database for tracking and reporting.",

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

        challenge: "A major challenge in developing the ordering system was managing the flow of data from product selection to order confirmation while ensuring data accuracy and consistency. This was resolved by implementing structured database tables, input validation, and a clear order processing workflow to ensure reliable transaction handling.",

        screenshots: {
            products: orderingProducts,
            checkout: orderingCheckout,
            database: orderingDatabase
        }
    },
    
{
  id: 3,
  title: "FoodHub POS - Inventory & Cashier System",
  overview: "A complete restaurant Point of Sale system with cashier POS, admin dashboard, inventory management, sales reports, and receipt printing. Built for dine-in, takeout, and delivery orders. Features offline sync support and mobile-responsive design.",
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
    "Built admin dashboard with Chart.js analytics",
    "Implemented sessionStorage for login persistence across refresh"
  ],
  challenge: "The main challenge was ensuring the POS worked seamlessly on both desktop and mobile devices. I implemented responsive design with CSS Grid, Flexbox, and React state management to detect screen size (isMobile hook) and adjust layout from 4 columns on desktop to 2 columns on mobile. Another challenge was creating real-time stock updates during checkout to prevent overselling, solved with database transactions and row-level locking.",
  screenshots: {
screenshots: {
  dashboard: posDashboard,
  pos: posCashier,
  reports: posReports,
  receipt: posReceipt
}
        }
    }
];
