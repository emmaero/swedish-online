import Calendar from "./icons/Calendar";
import Slack from "./icons/Slack";
import Logout from "./Logout";

// Refactor -1
// Even if is less than 50 lines of code, this looks messy.
export default function StudentNavBar() {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a
            href="https://join.slack.com/t/newworkspace-ja27661/shared_invite/zt-y02sagaa-0HKTm5g6EG6Lyd8L2thK7A"
            className="nav-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Slack />
            <span className="link-text">Chat room</span>
          </a>
        </li>
        <li className="nav-item">
          <a
            href={`https://calendar.google.com/calendar/embed?src=en.swedish%23holiday%40group.v.calendar.google.com&ctz=Europe%2FStockholm`}
            className="nav-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Calendar />
            <span className="link-text">Calender</span>
          </a>
        </li>
        <li className="nav-item">
          <Logout />
        </li>
      </ul>
    </nav>
  );
}
