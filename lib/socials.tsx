import React from "react";
import { Icon } from "native-base";
import { MaterialCommunityIcons } from "@native-base/icons";

const social = {
  email: {
    link: "mailto:whitehead.davis@gmail.com",
    label: "Email",
    icon: <Icon size="5" name="at" as={MaterialCommunityIcons} />,
  },
  calendar: {
    link: "https://calendly.com/daviswhitehead/30min",
    label: "Schedule A Meeting",
    icon: <Icon size="5" name="calendar" as={MaterialCommunityIcons} />,
  },
  linkedin: {
    link: "https://www.linkedin.com/in/daviswhitehead/",
    label: "LinkedIn",
    icon: <Icon size="5" name="linkedin" as={MaterialCommunityIcons} />,
  },
  github: {
    link: "https://github.com/daviswhitehead",
    label: "Github",
    icon: <Icon size="5" name="github" as={MaterialCommunityIcons} />,
  },
  twitter: {
    link: "https://twitter.com/dwhiteheadtime",
    label: "Twitter",
    icon: <Icon size="5" name="twitter" as={MaterialCommunityIcons} />,
  },
  goodreads: {
    link: "https://www.goodreads.com/daviswhitehead",
    label: "Goodreads",
    icon: <Icon size="5" name="goodreads" as={MaterialCommunityIcons} />,
  },
  instagram: {
    link: "https://www.instagram.com/whitehead.davis/",
    label: "Instagram",
    icon: <Icon size="5" name="instagram" as={MaterialCommunityIcons} />,
  },
  facebook: {
    link: "https://www.facebook.com/whitehead.davis",
    label: "Facebook",
    icon: <Icon size="5" name="facebook" as={MaterialCommunityIcons} />,
  },
  // RSS
};

export default social;
