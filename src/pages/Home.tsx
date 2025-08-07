import { useState, useEffect, useMemo } from 'react';
import CowSay from '../components/Home/Cowsay';
import '../components/Home/Home.css';
import Terminal from '../components/Home/Terminal';
import { greetings, quotes } from '../components/Home/Data';
import { useTypingEffect } from '../hooks/TypingEffect';
import Game from '../components/Home/MiniGame';

// Import CommandPrompt as a separate component
const CommandPrompt = ({ userType }: { userType: string }) => {
  const [isTyping, setIsTyping] = useState(true);
  const [currentTime] = useState(new Date().toISOString().split('T')[0]);

  useEffect(() => {
    const timer = setTimeout(() => setIsTyping(false), 2000);
    return () => clearTimeout(timer);
  }, [userType]);

  const getCommand = () => {
    switch (userType) {
      case 'user 1':
        return {
          path: '~/portfolio/home',
          cmd: 'cat welcome.md | lolcat --rainbow',
          gitBranch: 'main',
          status: '✓',
          description: 'Display welcome animation',
        };
      case 'user 2':
        return {
          path: '~/portfolio/philosophy',
          cmd: 'fortune | cowsay -f dragon | ponysay',
          gitBranch: 'wisdom',
          status: '✓',
          description: 'Generate wisdom quote',
        };
      case 'user 3':
        return {
          path: '~/portfolio/games',
          cmd: 'chmod +x arcade.sh && ./arcade.sh --mode=interactive',
          gitBranch: 'entertainment',
          status: '⚡',
          description: 'Launch interactive games',
        };
      default:
        return {
          path: '~/portfolio',
          cmd: 'ls -la --color=auto',
          gitBranch: 'main',
          status: '✓',
          description: 'List directory contents',
        };
    }
  };

  const { path, cmd, gitBranch, status, description } = getCommand();

  return (
    <div className="command-prompt-simple">
      {/* Connection Info */}
      <div className="connection-info-simple">
        <div className="connection-line">
          <span className="prompt-symbol">┌─</span>
          <span className="connection-text">
            SSH connection established to <span className="highlight">portfolio-server</span>
          </span>
        </div>
        <div className="connection-line">
          <span className="prompt-symbol">├─</span>
          <span className="connection-text">
            Last login: <span className="highlight">{currentTime}</span> from{' '}
            <span className="highlight">127.0.0.1</span>
          </span>
        </div>
        <div className="connection-line">
          <span className="prompt-symbol">└─</span>
          <span className="connection-text">
            Welcome to <span className="highlight glow-text">UYEN-PORTFOLIO-OS v2.5.0 LTS</span>
          </span>
        </div>
      </div>

      {/* Git Status Line */}
      <div className="git-status-line-simple">
        <div className="git-info">
          <span className="git-prompt">git:(</span>
          <span className="git-branch">{gitBranch}</span>
          <span className="git-prompt">) </span>
          <span className="git-status">{status}</span>
        </div>
        <div className="command-description">
          <span className="desc-label">DESC:</span>
          <span className="desc-text">{description}</span>
        </div>
      </div>

      {/* Main Command Prompt */}
      <div className="main-prompt-simple">
        <div className="prompt-line">
          <span className="user-host glow-text">uyen@portfolio-server</span>
          <span className="prompt-separator">:</span>
          <span className="current-path">{path}</span>
          <span className="prompt-separator">$</span>
          <span className="command-text">{cmd}</span>
          <span className={`typing-cursor ${isTyping ? 'visible' : ''}`}>█</span>
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  // State to track the active tab
  const [activeTab, setActiveTab] = useState<string>('User 1');
  const [isBootingUp, setIsBootingUp] = useState(true);

  // Enhanced boot up sequence with realistic system checks
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsBootingUp(false);
    }, 4500); // Extended for more boot messages
    return () => clearTimeout(timer);
  }, []);

  // Event handler to change the active tab
  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  // Adjusted calls to useTypingEffect with new parameters for customization
  const displayQuote = useTypingEffect(quotes, 50, 50, 15000, true);
  const cowSayGreeting = useTypingEffect(greetings, 80, 40, 1500, true);

  // Enhanced boot up sequence component with advanced effects
  const BootSequence = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [showCursor, setShowCursor] = useState(true);

    const bootMessages = useMemo(
      () => [
        {
          time: '[0.001]',
          message: 'Portfolio OS v2.5.0 LTS initializing...',
          delay: 0,
        },
        {
          time: '[0.123]',
          message: 'Loading kernel modules... ✓',
          delay: 300,
        },
        {
          time: '[0.234]',
          message: 'Mounting /dev/creativity... ✓',
          delay: 600,
        },
        {
          time: '[0.345]',
          message: 'Starting neural networks... ✓',
          delay: 900,
        },
        {
          time: '[0.456]',
          message: 'Initializing code compilers... ✓',
          delay: 1200,
        },
        {
          time: '[0.567]',
          message: 'Loading personality matrix... ✓',
          delay: 1500,
        },
        {
          time: '[0.678]',
          message: 'Establishing quantum connections... ✓',
          delay: 1800,
        },
        {
          time: '[0.789]',
          message: 'Mounting /dev/skills filesystem... ✓',
          delay: 2100,
        },
        {
          time: '[0.890]',
          message: 'Starting portfolio.service... ✓',
          delay: 2400,
        },
        {
          time: '[1.001]',
          message: 'Loading cyberpunk interface... ✓',
          delay: 2700,
        },
        {
          time: '[1.123]',
          message: 'Activating holographic display... ✓',
          delay: 3000,
        },
        {
          time: '[1.234]',
          message: 'System ready. Establishing user session...',
          delay: 3300,
        },
      ],
      [],
    );

    useEffect(() => {
      bootMessages.forEach((msg, index) => {
        setTimeout(() => {
          setCurrentStep(index + 1);
        }, msg.delay);
      });
    }, [bootMessages]);

    useEffect(() => {
      const cursorInterval = setInterval(() => {
        setShowCursor((prev) => !prev);
      }, 500);
      return () => clearInterval(cursorInterval);
    }, []);

    return (
      <div className="min-h-screen flex justify-center items-center p-4 relative">
        <div className="boot-sequence-container">
          <div className="boot-screen">
            <div className="boot-header">
              <div className="boot-logo">UYEN-PORTFOLIO-OS</div>
              <div className="boot-version">v2.5.0 LTS</div>
            </div>
            <div className="boot-content">
              <div className="boot-messages">
                {bootMessages.slice(0, currentStep).map((msg, index) => (
                  <div key={index} className="boot-message">
                    <span className="boot-time">{msg.time}</span>
                    <span className="boot-text">{msg.message}</span>
                  </div>
                ))}
                <div className="boot-message">
                  <span className="boot-time">[1.234]</span>
                  <span className="boot-text">
                    System initialized successfully. Press any key to continue&#39;...
                  </span>
                  <span className={`boot-cursor-enhanced ${showCursor ? 'visible' : ''}`}>█</span>
                </div>
                <div className="boot-stats">
                  <div className="stat-item">
                    <span className="stat-label">Total boot time:</span>
                    <span className="stat-value">1.234s</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-label">Services loaded:</span>
                    <span className="stat-value">42</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-label">Memory usage:</span>
                    <span className="stat-value">67%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Function to render content based on the active tab
  const renderContent = () => {
    switch (activeTab) {
      case 'User 1':
        return (
          <div
            className="content-container font-mono text-terminal-text text-base px-2 sm:px-4 flex flex-col items-center justify-center text-center"
            style={{ fontFamily: 'JetBrains Mono, monospace', color: '#00fff7' }}
          >
            <pre
              className="text-cyan-700 text-xs leading-tight mt-4 mb-2 select-none mx-auto max-w-full overflow-hidden"
              style={{ fontFamily: 'JetBrains Mono, monospace' }}
            >{`
╭─────────────────────────────────────────────╮
│  // SYSTEM STATUS: ALL CYBERNETIC SYSTEMS NOMINAL  │
╰─────────────────────────────────────────────╯
`}</pre>
            <div className="text-xs text-cyan-800 italic mt-1 mb-4 mx-auto px-2">
              &quot;Wake up, Samurai. We&apos;ve got a portfolio to build.&quot;
            </div>
            <div className="mt-4 flex flex-col items-center justify-center w-full max-w-full">
              <CowSay message={cowSayGreeting} />
            </div>
          </div>
        );
      case 'User 2':
        return (
          <div className="flex flex-col justify-center items-center content-container p-compact space-y-compact px-2 sm:px-4">
            <h1 className="text-base sm:text-lg text-center holo-text font-mono animate-slide-in">
              🎮 Gaming Wisdom & Code Philosophy
            </h1>
            <div className="quote-border max-w-5xl tech-card p-compact w-full">
              <h1 className="text-code text-sm sm:text-lg md:text-xl leading-relaxed animate-fade-in-scale px-2">
                {displayQuote}
              </h1>
            </div>
          </div>
        );
      case 'User 3':
        return (
          <div className="w-full h-full flex justify-center items-start pt-4 sm:pt-8 px-2">
            <div className="animate-fade-in-scale w-full max-w-full">
              <Game />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  // Show boot sequence if still booting
  if (isBootingUp) {
    return <BootSequence />;
  }

  return (
    <div className="min-h-screen flex justify-center items-center p-2 sm:p-4 relative">
      <div
        id="home"
        className={`floating-elements ${activeTab === 'User 3' ? 'game-active' : ''} w-full max-w-7xl relative z-10`}
      >
        <Terminal activeTab={activeTab} onTabClick={handleTabClick}>
          <CommandPrompt userType={activeTab.toLowerCase()} />
          {renderContent()}
        </Terminal>
      </div>
    </div>
  );
};

export default Home;
