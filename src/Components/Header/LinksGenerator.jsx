import { NavLink } from "react-router-dom";

export const LinksGenerator = (data) => {
  return data.map((link, index) => {
    if (link.parent) {
      return (
        <li key={index} tabIndex={0}>
          <details>
            <summary>{link.text}</summary>
            <ul className="p-2">
              <NavLink to={link.to}>{link.text}</NavLink>
            </ul>
          </details>
        </li>
      );
    } else {
      return (
        <li key={index}>
          <NavLink to={link.to}>{link.text}</NavLink>
        </li>
      );
    }
  });
};
