import { Link } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';

export function Navigation() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-b-transparent bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-screen-xl items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <Link to="/" className="text-sm">
            Jonatã Oliveira
          </Link>
          <nav className="flex items-center gap-6">
            <Link to="/projects" className="text-sm text-muted-foreground hover:text-foreground">
              Projects
            </Link>
            <Link to="/blog" className="text-sm text-muted-foreground hover:text-foreground">
              Blog
            </Link>
          </nav>
        </div>
        <ThemeToggle />
      </div>
    </nav>
  );
}