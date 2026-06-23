export type Role = "owner" | "commenter" | "visitor" | null;

export type TaskStatus =
  | "Not Started"
  | "To Do"
  | "In Progress"
  | "In Review"
  | "Awaiting Approval - Internal"
  | "Awaiting Approval - Client"
  | "Done"
  | "Archived"
  | "See Updated Task";

export type TaskPriority = "Future" | "Low" | "Medium" | "High" | "Urgent";

export type TaskType =
  | "Frontend"
  | "Backend"
  | "Infrastructure"
  | "Content"
  | "Design"
  | "Other"
  | "Marketing";

export type TaskClient =
  | "RedBridge"
  | "Good Mood"
  | "Insight Idea"
  | "Siddeley Talent Link"
  | "ASG"
  | "Siddeley Group"
  | "Vanessa";

export interface Task {
  id: number;
  title: string;
  client: TaskClient[];
  type: TaskType[];
  status: TaskStatus;
  priority: TaskPriority;
  teamTask: boolean;
  dueDate: string | null;
  dateCompleted: string | null;
  dateCreated: string;
  lastSaved: string;
  githubPR: string | null;
  githubStatus: string | null;
  clientApproval: string | null;
  internalApproval: string | null;
  impactArea: string | null;
  purpose: string | null;
  notes: string | null;
  source: string | null;
  sourceRequest: string | null;
  tools: string | null;
  relatedEvents: string | null;
  relatedTasks: number[];
  isDeleted: boolean;
  deletedAt: string | null;
}

export interface Comment {
  id: string;
  author: string;
  text: string;
  createdAt: string;
}

export interface VisitorPin {
  pin: string;
  used: boolean;
  createdAt: string;
  usedAt: string | null;
}

export interface AuthState {
  token: string;
  role: Role;
}

export type Timeline = "past" | "current" | "future";

export function getTimeline(task: Task): Timeline {
  if (task.priority === "Future") return "future";
  if (task.status === "Done" || task.status === "Archived" || task.status === "See Updated Task") return "past";
  return "current";
}

export const STATUS_OPTIONS: TaskStatus[] = [
  "Not Started",
  "To Do",
  "In Progress",
  "In Review",
  "Awaiting Approval - Internal",
  "Awaiting Approval - Client",
  "Done",
  "Archived",
  "See Updated Task",
];

export const PRIORITY_OPTIONS: TaskPriority[] = ["Future", "Low", "Medium", "High", "Urgent"];

export const TYPE_OPTIONS: TaskType[] = [
  "Frontend",
  "Backend",
  "Infrastructure",
  "Content",
  "Design",
  "Other",
  "Marketing",
];

export const CLIENT_OPTIONS: TaskClient[] = [
  "RedBridge",
  "Good Mood",
  "Insight Idea",
  "Siddeley Talent Link",
  "ASG",
  "Siddeley Group",
  "Vanessa",
];

export const STATUS_COLORS: Record<TaskStatus, string> = {
  "Not Started": "bg-gray-100 text-gray-600",
  "To Do": "bg-blue-100 text-blue-700",
  "In Progress": "bg-yellow-100 text-yellow-700",
  "In Review": "bg-purple-100 text-purple-700",
  "Awaiting Approval - Internal": "bg-orange-100 text-orange-700",
  "Awaiting Approval - Client": "bg-pink-100 text-pink-700",
  "Done": "bg-green-100 text-green-700",
  "Archived": "bg-gray-200 text-gray-500",
  "See Updated Task": "bg-stone-100 text-stone-500",
};

export const PRIORITY_COLORS: Record<TaskPriority, string> = {
  Future: "bg-slate-100 text-slate-500",
  Low: "bg-sky-100 text-sky-600",
  Medium: "bg-amber-100 text-amber-700",
  High: "bg-orange-100 text-orange-700",
  Urgent: "bg-red-100 text-red-700",
};
