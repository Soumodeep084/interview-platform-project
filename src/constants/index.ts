import { Clock, Code2, Calendar, Users } from "lucide-react";


export const TIME_SLOTS = [
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
];

export const INTERVIEW_CATEGORY = [
    { id: "upcoming", title: "Upcoming Interviews", variant: "outline" },
    { id: "completed", title: "Completed", variant: "secondary" },
    { id: "succeeded", title: "Succeeded", variant: "default" },
    { id: "failed", title: "Failed", variant: "destructive" },
] as const;

export const QUICK_ACTIONS = [
    {
        icon: Code2,
        title: "New Call",
        description: "Start an instant call",
        color: "emerald-500",
        gradient: "from-emerald-400/20 via-emerald-300/10 to-transparent",
    },
    {
        icon: Users,
        title: "Join Interview",
        description: "Join an Interview via invitation link",
        color: "fuchsia-500",
        gradient: "from-fuchsia-400/20 via-fuchsia-300/10 to-transparent",
    },
    {
        icon: Calendar,
        title: "Schedule",
        description: "Plan the upcoming interviews",
        color: "sky-500",
        gradient: "from-sky-400/20 via-sky-300/10 to-transparent",
    },
    {
        icon: Clock,
        title: "Recordings",
        description: "Access the past interviews",
        color: "rose-500",
        gradient: "from-rose-400/20 via-rose-300/10 to-transparent",
    },
];


export type QuickActionType = (typeof QUICK_ACTIONS)[number];
//  [number] => This gives you the type of one item in the array.
// without [number] => Then QuickActionType becomes the entire array type, not just a single item.