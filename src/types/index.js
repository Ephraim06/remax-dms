// Task structure
const TaskT = {
  id: '', // Unique task ID (string)
  title: '', // Task title (string)
  description: '', // Task description (string)
  priority: '', // Task priority (string, e.g., 'high', 'medium', 'low')
  deadline: 0, // Deadline in minutes (number)
  image: '', // Optional image URL (string)
  alt: '', // Optional image alt text (string)
  tags: [], // Array of tags with { title, bg, text } for styling
};

// Column structure
const Column = {
  name: '', // Column name (string, e.g., 'Todo', 'In Progress')
  items: [], // Array of tasks (TaskT[])
};

// Columns structure
const Columns = {}; // An object where key is the column ID (e.g., 'todo', 'inProgress') and value is a Column object
