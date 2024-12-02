import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconName, IconPrefix, library } from "@fortawesome/fontawesome-svg-core"; // Ensure IconPrefix is imported here
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fab, fas);

interface ITechIcon {
  iconName: IconName | string; // Allow string values in addition to IconName
  prefix: IconPrefix | string; // Allow string values in addition to IconPrefix
  name: string;
  style: string;
}

const TechIcon = ({ iconName, prefix, name, style }: ITechIcon) => (
  <div className="relative group">
    <FontAwesomeIcon
      icon={[prefix as IconPrefix, iconName as IconName]} // Cast values to match FontAwesome types
      className={`text-4xl ${style}`}
    />
    <span className="absolute top-full mt-2 px-2 py-1 text-xs text-white bg-blue-600 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
      {name}
    </span>
  </div>
);

export default TechIcon;
