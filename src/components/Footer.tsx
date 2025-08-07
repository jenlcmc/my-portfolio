const Footer = () => {
  return (
    <footer className="mt-16 bg-terminal-surface/50 backdrop-blur-md border-t border-terminal-border/50 text-center text-terminal-text p-8">
      <div className="container mx-auto">
        <div className="flex flex-col items-center space-y-4">
          <div className="text-terminal-accent font-mono text-lg font-semibold">
            ~/portfolio/uyen-tran
          </div>
          <div className="text-terminal-muted font-mono text-sm">
            &copy; 2024 Uyen Tran Portfolio. All rights reserved.
          </div>
          <div className="text-xs text-terminal-muted font-mono opacity-70">
            Built with React + TypeScript + TailwindCSS
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
