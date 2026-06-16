export const STATUSES = ["Open", "Planned", "In Progress", "Completed"];

export const STATUS_STYLES = {
  Open: "bg-blue-100 text-blue-700 border-blue-200",
  Planned: "bg-purple-100 text-purple-700 border-purple-200",
  "In Progress": "bg-amber-100 text-amber-700 border-amber-200",
  Completed: "bg-emerald-100 text-emerald-700 border-emerald-200",
};

// Simulated current user (null = not logged in)
export const CURRENT_USER = {
  id: "u1",
  name: "Admin User",
  email: "admin@example.com",
  role: "admin", // "admin" | "user"
};

// All users
export const USERS = [
  {
    id: "u1",
    name: "Admin User",
    email: "admin@example.com",
    role: "admin",
    createdAt: "2025-01-01",
  },
  {
    id: "u2",
    name: "Sarah K.",
    email: "sarah@example.com",
    role: "user",
    createdAt: "2025-02-10",
  },
  {
    id: "u3",
    name: "Marcus R.",
    email: "marcus@example.com",
    role: "user",
    createdAt: "2025-03-05",
  },
  {
    id: "u4",
    name: "Jamie L.",
    email: "jamie@example.com",
    role: "user",
    createdAt: "2025-03-18",
  },
];

// Admin settings
export const ADMIN_SETTINGS = {
  allowPublicRegistration: false, // When false, invite codes are required
  siteName: "OpenFeedback",
  siteDescription: "Self-hosted feedback and roadmap tool",
};

// Invite codes (used when public registration is disabled)
export const INVITE_CODES = [
  {
    id: "inv1",
    code: "WELCOME2025",
    createdAt: "2025-04-01",
    usedBy: null,
    usedAt: null,
    expiresAt: "2025-12-31",
  },
  {
    id: "inv2",
    code: "TEAM-ACME",
    createdAt: "2025-04-10",
    usedBy: "u3",
    usedAt: "2025-04-12",
    expiresAt: null,
  },
  {
    id: "inv3",
    code: "BETA-ACCESS",
    createdAt: "2025-05-01",
    usedBy: null,
    usedAt: null,
    expiresAt: "2025-06-30",
  },
];

// Boards
export const BOARDS = [
  {
    id: "b1",
    name: "Acme Corp Feedback",
    slug: "acme",
    description:
      "Share your ideas and help us improve our product. Vote on existing requests or submit your own.",
    isPublic: true,
    allowGuests: true,
    allowComments: true,
    postsCount: 8,
    createdAt: "2025-01-15",
    ownerId: "u1",
  },
  {
    id: "b2",
    name: "Internal Tools",
    slug: "internal",
    description: "Feedback for our internal developer tools and workflows.",
    isPublic: false,
    allowGuests: false,
    allowComments: true,
    postsCount: 12,
    createdAt: "2025-02-20",
    ownerId: "u1",
  },
  {
    id: "b3",
    name: "Mobile App Ideas",
    slug: "mobile",
    description: "Feature requests and bug reports for our mobile application.",
    isPublic: true,
    allowGuests: true,
    allowComments: true,
    postsCount: 5,
    createdAt: "2025-03-10",
    ownerId: "u2",
  },
];

// Legacy BOARD for compatibility
export const BOARD = BOARDS[0];

export const POSTS = [
  {
    id: "1",
    boardId: "b1",
    title: "Dark mode support",
    description:
      "Would love to have a dark mode toggle for better readability at night.",
    status: "Planned",
    votes: 142,
    comments: 18,
    createdAt: "2025-04-12",
    author: "Sarah K.",
  },
  {
    id: "2",
    boardId: "b1",
    title: "Custom domain mapping",
    description:
      "Allow users to map their own custom domain to their feedback board.",
    status: "In Progress",
    votes: 98,
    comments: 9,
    createdAt: "2025-04-18",
    author: "Marcus R.",
  },
  {
    id: "3",
    boardId: "b1",
    title: "Email notifications for status updates",
    description: "Send email updates to voters when a post status changes.",
    status: "Open",
    votes: 76,
    comments: 5,
    createdAt: "2025-04-20",
    author: "Jamie L.",
  },
  {
    id: "4",
    boardId: "b1",
    title: "Embed feedback widget on any site",
    description:
      "Provide a small JS snippet to embed the feedback form directly on external websites.",
    status: "Open",
    votes: 65,
    comments: 3,
    createdAt: "2025-04-22",
    author: "Priya M.",
  },
  {
    id: "5",
    boardId: "b1",
    title: "API access for integrations",
    description:
      "Expose a REST API so we can integrate OpenFeedback with our internal tools.",
    status: "Planned",
    votes: 54,
    comments: 7,
    createdAt: "2025-04-25",
    author: "Tom W.",
  },
  {
    id: "6",
    boardId: "b1",
    title: "Merge duplicate feedback posts",
    description:
      "Admins should be able to merge duplicate requests and combine their votes.",
    status: "Completed",
    votes: 44,
    comments: 12,
    createdAt: "2025-03-30",
    author: "Nina A.",
  },
  {
    id: "7",
    boardId: "b1",
    title: "Slack notifications for new feedback",
    description:
      "Post a Slack message whenever a new feedback item is submitted.",
    status: "Completed",
    votes: 38,
    comments: 4,
    createdAt: "2025-03-15",
    author: "Alex P.",
  },
  {
    id: "8",
    boardId: "b1",
    title: "Private boards for internal teams",
    description:
      "Allow creating boards that are only accessible to authenticated team members.",
    status: "Open",
    votes: 29,
    comments: 2,
    createdAt: "2025-05-01",
    author: "Dana F.",
  },
];

export const COMMENTS = [
  {
    id: "c1",
    postId: "1",
    author: "Alex P.",
    body: "This would be a game-changer! I use the app late at night and white backgrounds are brutal.",
    createdAt: "2025-04-13",
  },
  {
    id: "c2",
    postId: "1",
    author: "Dana F.",
    body: "Agreed. Please also respect the OS-level preference by default.",
    createdAt: "2025-04-14",
  },
  {
    id: "c3",
    postId: "1",
    author: "Tom W.",
    body: "Would this also apply to the public-facing board? That matters to me.",
    createdAt: "2025-04-15",
  },
];
