import { Mail, CheckCircle2, Phone, MapPinnedIcon } from "lucide-react";

// Available Colors
// "blue" | "green" | "red" | "yellow" | "orange" | "pink" | "purple" | "cyan" | "teal" | "lime" | "fuchsia"

// ==================[ Contact Info ]================== //
export const contact_info = [
  {
    title: "Phone Number",
    Icon: Phone,
    info: "+1234 4567 8926",
    color: "blue",
  },

  {
    title: "Email",
    Icon: Mail,
    info: "example@gmail.com",
    color: "yellow",
  },

  {
    title: "Location",
    Icon: MapPinnedIcon,
    info: "New york, 1322",
    color: "fuchsia",
  },

  {
    title: "Availability",
    Icon: CheckCircle2,
    info: "Available for work",
    color: "green",
  },
];
//
