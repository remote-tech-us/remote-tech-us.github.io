import { GLOBALS } from '../data/app__globals.jsx';

function Footer() {
  return (
    <footer>
      <hr />
      <p>© {new Date().getFullYear()} {GLOBALS.app_company}</p>
    </footer>
  );
}
export default Footer;
