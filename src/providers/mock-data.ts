import { BaseRecord } from "@refinedev/core";

export interface Subject extends BaseRecord {
  id: number;
  courseCode: string;
  department: string;
  description: string;
}

export const mockSubjects: Subject[] = [
  {
    id: 1,
    courseCode: "CS101",
    name: "Introduction to Computer Science",
    department: "Computer Science",
    description:
      "Introduction to Computer Science and Programming fundamentals using Python",
  },
  {
    id: 2,
    courseCode: "MATH201",
    name: "Calculus II",
    department: "Mathematics",
    description:
      "Calculus II - Advanced techniques in integration, series, and differential equations",
  },
  {
    id: 3,
    courseCode: "PHYS150",
    name: "Physics I",
    department: "Physics",
    description:
      "Physics I - Mechanics and wave motion covering kinematics, dynamics, and energy",
  },
];
