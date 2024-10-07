import {
  Mail as mail,
  CheckCircle2 as available,
  Phone as phone,
  MapPinnedIcon as location,
  CircleX as not_available,
} from "lucide-react";

/*
  Available Colors
  |
  1 - "blue"
  2 - "green"
  3 - "red"
  4 - "yellow"
  5 - "orange"
  6 - "pink"
  7 - "purple"
  8 - "cyan"
  9 - "teal"
  10 - "lime"
  11 - "fuchsia"
  12 - "black"
*/

/*
  Available Contact Info Icons
  1 - phone
  2 - mail
  3 - location
  4 - available  |  not_available
*/

// ==================[ Contact Info ]================== //
export const contact_info = [
  // 1
  {
    title: "Phone Number",
    Icon: phone,
    info: "+1234 4567 8926",
    color: "blue",
  },

  // 2
  {
    title: "Email",
    Icon: mail,
    info: "example@gmail.com",
    color: "yellow",
  },

  // 3
  {
    title: "Location",
    Icon: location,
    info: "New york, 1322",
    color: "fuchsia",
  },

  // 4
  {
    title: "Availability",
    Icon: available,
    info: "Available for work",
    color: "green",
  },
] as const;
//
