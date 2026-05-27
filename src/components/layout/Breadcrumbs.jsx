import { Link, useLocation } from 'react-router-dom';

const ACCENT = "#8a9a5b";

const routeNames = {
  "/": "Home",
  "/about": "About",
  "/service": "Services",
  "/work": "Work",
  "/process": "Process",
  "/faq": "FAQ",
  "/contact": "Contact"
};

export default function Breadcrumbs() {
  const location = useLocation();
  const pathname = location.pathname;

  // Don't show on home page
  if (pathname === "/" || pathname === "/freelance/") {
    return null;
  }

  // Get current page name
  const currentPage = routeNames[pathname] || pathname.replace("/", "").charAt(0).toUpperCase() + pathname.slice(1);

  return (
    <div style={{
      padding: '12px 5%',
      background: '#faf7f2',
      borderBottom: '1px solid #e8e0d5',
      fontFamily: "'Montserrat', sans-serif",
    }}>
      <div style={{ maxWidth: '1350px', margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
          <Link to="/" style={{
            fontSize: 'clamp(14px, 2vw, 18px)',
            color: '#7a6e60',
            textDecoration: 'none',
          }}>
            Home
          </Link>
          <span style={{ fontSize: 'clamp(14px, 2vw, 16px)', color: '#c8bfb0' }}>/</span>
          <span style={{
            fontSize: 'clamp(16px, 3vw, 20px)',
            fontWeight: 600,
            color: ACCENT,
          }}>
            {currentPage}
          </span>
        </div>
      </div>
    </div>
  );
}