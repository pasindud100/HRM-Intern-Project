
import { useState } from "react";

export const useEmployeeDetails = () => {
  const [employees, setEmployees] = useState([
    {
      profile: "Jeremy Neigh",
      id: "A0B1C001",
      status: "Part-Time",
      department: "Support",
      shift: "8h-17h",
      joiningDate: "2024-10-18",
      role: "Tax Officer",
    },
    {
      profile: "Emily Johnson",
      id: "A0B1C002",
      status: "Full-Time",
      department: "Finance",
      shift: "9h-18h",
      joiningDate: "2024-10-18",
      role: "Accountant",
    },
    {
      profile: "Mark Smith",
      id: "A0B1C003",
      status: "On-contract",
      department: "IT",
      shift: "8h-17h",
      joiningDate: "2024-10-18",
      role: "Software Developer",
    },
    {
      profile: "Sophia Williams",
      id: "A0B1C004",
      status: "Full-Time",
      department: "HR",
      shift: "8h-17h",
      joiningDate: "2024-10-18",
      role: "HR Manager",
    },
    {
      profile: "Liam Brown",
      id: "A0B1C005",
      status: "Seasonal",
      department: "Marketing",
      shift: "10h-19h",
      joiningDate: "2024-10-18",
      role: "Marketing Specialist",
    },
    {
      profile: "Olivia Garcia",
      id: "A0B1C006",
      status: "Full-Time",
      department: "Sales",
      shift: "8h-17h",
      joiningDate: "2024-10-18",
      role: "Sales Executive",
    },
    {
      profile: "Noah Martinez",
      id: "A0B1C007",
      status: "Part-Time",
      department: "Operations",
      shift: "6h-15h",
      joiningDate: "2024-10-18",
      role: "Operations Coordinator",
    },
  ]);

  return { employees, setEmployees };
};
