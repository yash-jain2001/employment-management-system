const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        title: "Prepare Sales Report",
        description: "Compile monthly sales data and prepare report",
        date: "2026-01-05",
        category: "Reporting",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Client Follow-up",
        description: "Follow up with pending clients via email",
        date: "2026-01-06",
        category: "Communication",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Data Cleanup",
        description: "Clean and update customer database",
        date: "2026-01-07",
        category: "Database",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        title: "Design Landing Page",
        description: "Create UI for new product landing page",
        date: "2026-01-04",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Fix UI Bugs",
        description: "Resolve reported UI issues",
        date: "2026-01-03",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Update Style Guide",
        description: "Update brand colors and typography",
        date: "2026-01-02",
        category: "Design",
        active: false,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        title: "API Integration",
        description: "Integrate payment gateway API",
        date: "2026-01-08",
        category: "Backend",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Code Review",
        description: "Review pull requests from team",
        date: "2026-01-06",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Server Monitoring",
        description: "Monitor server performance metrics",
        date: "2026-01-01",
        category: "DevOps",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        title: "Content Writing",
        description: "Write blog post for website",
        date: "2026-01-09",
        category: "Content",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "SEO Optimization",
        description: "Optimize articles for search engines",
        date: "2026-01-05",
        category: "Marketing",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Keyword Research",
        description: "Research trending keywords",
        date: "2026-01-04",
        category: "Marketing",
        active: false,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        title: "Inventory Check",
        description: "Verify stock levels in warehouse",
        date: "2026-01-10",
        category: "Operations",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Vendor Meeting",
        description: "Attend meeting with suppliers",
        date: "2026-01-07",
        category: "Operations",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Logistics Report",
        description: "Prepare logistics performance report",
        date: "2026-01-03",
        category: "Reporting",
        active: false,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  }
];

const admin = [
  {
    id: 100,
    email: "admin@example.com",
    password: "123"
  }
];

export const setLocalStorage=()=>{
  localStorage.setItem('employees',JSON.stringify(employees))
  localStorage.setItem('admin',JSON.stringify(admin))
}
export const getLocalStorage=()=>{
  const employees =JSON.parse(localStorage.getItem('employees'))
  const admin = JSON.parse(localStorage.getItem('admin')) 
  console.log(employees,admin);
}