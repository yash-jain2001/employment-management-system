const employees = [
  {
    id: 1,
    name: "Amit Sharma",
    email: "employee1@example.com",
    password: "123",

    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },

    tasks: [
      {
        taskNumber: 1,
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
        taskNumber: 2,
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
        taskNumber: 3,
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
    name: "Priya Verma",
    email: "employee2@example.com",
    password: "123",

    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0
    },

    tasks: [
      {
        taskNumber: 1,
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
        taskNumber: 2,
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
        taskNumber: 3,
        title: "Update Style Guide",
        description: "Update brand colors and typography",
        date: "2026-01-02",
        category: "Design",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  },

  {
    id: 3,
    name: "Rahul Mehta",
    email: "employee3@example.com",
    password: "123",

    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },

    tasks: [
      {
        taskNumber: 1,
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
        taskNumber: 2,
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
        taskNumber: 3,
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
    name: "Neha Kapoor",
    email: "employee4@example.com",
    password: "123",

    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0
    },

    tasks: [
      {
        taskNumber: 1,
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
        taskNumber: 2,
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
        taskNumber: 3,
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
    name: "Suresh Patel",
    email: "employee5@example.com",
    password: "123",

    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0
    },

    tasks: [
      {
        taskNumber: 1,
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
        taskNumber: 2,
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
        taskNumber: 3,
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
    name: "Priyanshu Jain",
    email: "admin@example.com",
    password: "123"
  }
];



export const setLocalStorage=()=>{
  localStorage.setItem("employees", JSON.stringify(employees))
  localStorage.setItem("admin", JSON.stringify(admin))
}
export const getLocalStorage=()=>{
  const employees = JSON.parse(localStorage.getItem("employees"))
  const admin = JSON.parse(localStorage.getItem("admin"))
  // console.log(employees,admin);
  return {employees,admin}
}
