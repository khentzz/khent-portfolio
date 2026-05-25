// Import HRIS images (only these exist)
import hrisLogin from '../assets/projects/hris/login.png'
import hrisDashboard from '../assets/projects/hris/dashboard.png'
import hrisProfile from '../assets/projects/hris/employee-profile.png'
import hrisLeave from '../assets/projects/hris/leave-management.png'
import hrisAdmin from '../assets/projects/hris/admin.png'
import hrisErd from '../assets/projects/hris/erd.png'
import hrisAttendance from '../assets/projects/hris/attendance-kiosk.png'
import hrisDtr from '../assets/projects/hris/dtr.png'

export const projectsData = [
    {
        id: 1,
        title: "Human Resource Information System (HRIS)",
        overview: "A web-based Human Resource Information System developed to manage employee records, personal information, leave applications, mobile attendance tracking, Daily Time Record (DTR), and administrative processes.",
        technologies: ["PHP", "MySQL", "JavaScript", "HTML", "CSS", "Kotlin"],
        features: [
            "Employee Authentication",
            "Employee Dashboard",
            "Personal Data Sheet (201 File)",
            "Leave Management",
            "Employee Information Management",
            "Administrative Controls",
            "Database Integration",
            "Mobile Attendance Kiosk",
            "Daily Time Record (DTR)"
        ],
        contributions: [
            "Designed database structure",
            "Developed employee dashboard",
            "Created leave management module",
            "Implemented authentication",
            "Built CRUD operations",
            "Designed responsive interface",
            "Developed mobile attendance kiosk",
            "Implemented DTR time tracking logic"
        ],
        challenge: "One of the major challenges I encountered while developing the Human Resource Information System (HRIS) was managing employee information across multiple database tables while maintaining data consistency and accuracy. I addressed this challenge by designing proper database relationships, implementing CRUD operations, and ensuring that employee records were correctly linked using unique employee identifiers. Additionally, I implemented a mobile attendance kiosk and Daily Time Record (DTR) system to enable real-time attendance tracking and automated timekeeping, which required careful handling of time-in/time-out data and preventing duplicate entries.",
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
        overview: "A web-based ordering system developed to streamline order placement, product management, and transaction tracking.",
        technologies: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"],
        features: [
            "Product Listing",
            "Shopping Cart",
            "Order Management",
            "Transaction Tracking",
            "Database Storage",
            "User-Friendly Interface"
        ],
        contributions: [
            "Database Design",
            "Product Module Development",
            "Order Processing Logic",
            "Frontend Interface Design",
            "Backend Integration"
        ],
        challenge: "One of the challenges I faced while developing the Ordering System was managing the flow of order information from product selection to order processing while ensuring accurate data storage. I solved this by implementing structured database tables, validating user inputs, and designing a workflow that allowed orders to be tracked efficiently throughout the process.",
        screenshots: {
            products: "https://via.placeholder.com/800x400/1E293B/3B82F6?text=Product+Listing+(Coming+Soon)",
            cart: "https://via.placeholder.com/800x400/1E293B/3B82F6?text=Shopping+Cart+(Coming+Soon)",
            checkout: "https://via.placeholder.com/800x400/1E293B/3B82F6?text=Checkout+(Coming+Soon)",
            database: "https://via.placeholder.com/800x400/1E293B/3B82F6?text=Database+Design+(Coming+Soon)"
        }
    }
]