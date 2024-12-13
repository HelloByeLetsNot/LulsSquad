import React, { useState } from 'react';
import { Grid2X2, Code, FileText, Layers, ArrowLeft } from 'lucide-react';

const TypingEffect = ({ text, className = '' }) => {
  const [displayText, setDisplayText] = React.useState('');
  const [isBlinking, setIsBlinking] = React.useState(true);

  React.useEffect(() => {
    if (displayText.length < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(text.slice(0, displayText.length + 1));
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [displayText, text]);

  React.useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking(prev => !prev);
    }, 500);
    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <div className="flex justify-center items-center">
      <h1 className={`${className} flex items-center`}>
        <span>{displayText}</span>
        <span 
          className={`ml-1 w-4 h-8 bg-white ${isBlinking ? 'opacity-100' : 'opacity-0'}`}
        />
      </h1>
    </div>
  );
};

const LulsSquadWebsite = () => {
  const [activeSection, setActiveSection] = useState('landing');
  const [selectedItem, setSelectedItem] = useState(null);

  const sectionData = {
    landing: {
      title: 'Luls Squad',
      backgroundColor: 'bg-blue-900',
      content: () => (
        <div className="flex items-center justify-center min-h-screen">
          <TypingEffect 
            text="Luls Squad" 
            className="text-8xl font-bold uppercase tracking-wider text-yellow-400"
          />
        </div>
      )
    },
    memes: {
      title: 'Memes',
      backgroundColor: 'bg-blue-800',
      items: [
        { 
          id: 'trending-memes',
          title: 'Trending Memes', 
          description: 'Browse the latest viral memes curated by Luls Squad. Stay up to date with internet humor and viral content.',
          fullDescription: `
            Dive deep into the world of viral memes with Luls Squad's Trending Memes section!

            Our team scours the internet to bring you the most hilarious and current memes from across the web. From Reddit to Twitter, we compile the absolute best content that's making people laugh right now.

            Features:
            - Daily updated meme collection
            - Curated from multiple platforms
            - Guaranteed laugh-out-loud content
            - Community-driven selections
          `,
          icon: <Grid2X2 className="w-12 h-12 text-blue-300" />
        },
        { 
          id: 'meme-generator',
          title: 'Meme Generator', 
          description: 'Create your own hilarious memes with our easy-to-use online tool. Customize templates, add text, and share instantly.',
          fullDescription: `
            Unleash your creativity with the Luls Squad Meme Generator!

            Our powerful and intuitive meme creation tool lets you:
            - Choose from hundreds of templates
            - Add custom text and fonts
            - Adjust image positioning
            - Apply filters and effects
            - Share directly to social media

            Whether you're a meme master or a beginner, our generator makes meme creation fun and easy!
          `,
          icon: <FileText className="w-12 h-12 text-blue-300" />
        },
        { 
          id: 'meme-archives',
          title: 'Meme Archives', 
          description: 'Explore our extensive collection of classic and legendary memes. A nostalgic journey through internet culture.',
          fullDescription: `
            Take a trip down memory lane with the Luls Squad Meme Archives!

            We've preserved the most iconic memes from internet history:
            - Rage Comics era
            - Advice Animals collection
            - Classic viral memes
            - Historical internet moments

            A comprehensive digital museum of meme culture, meticulously curated and preserved.
          `,
          icon: <Grid2X2 className="w-12 h-12 text-blue-300" />
        },
        { 
          id: 'community-memes',
          title: 'Community Memes', 
          description: 'User-submitted top-tier content. The best memes from our creative and hilarious community members.',
          fullDescription: `
            Showcase your meme-making skills in our Community Memes section!

            Features:
            - User-submitted meme platform
            - Voting and ranking system
            - Weekly top meme highlights
            - Prizes for top creators
            - Inclusive and fun community environment

            Your creativity could be the next big viral sensation!
          `,
          icon: <FileText className="w-12 h-12 text-blue-300" />
        }
      ]
    },
    programs: {
      title: 'Programs',
      backgroundColor: 'bg-blue-700',
      items: [
        { 
          id: 'utility-tools',
          title: 'Utility Tools', 
          description: 'Powerful productivity and entertainment software designed to make your digital life easier and more fun.',
          fullDescription: `
            Revolutionize your digital workflow with Luls Squad Utility Tools!

            Our suite of innovative software includes:
            - Productivity boosters
            - Entertainment enhancers
            - System optimization tools
            - Quick-access utilities

            Designed to simplify your digital experience and add a touch of fun to everyday tasks.
          `,
          icon: <Code className="w-12 h-12 text-blue-300" />
        },
        { 
          id: 'game-mods',
          title: 'Game Mods', 
          description: 'Custom modifications for popular games. Enhance your gaming experience with unique tweaks and additions.',
          fullDescription: `
            Level up your gaming with Luls Squad Game Mods!

            Features:
            - Mods for popular game titles
            - Community-created modifications
            - Performance enhancers
            - Visual and gameplay tweaks
            - Easy installation guides

            Transform your gaming experience with our curated mod collections.
          `,
          icon: <Code className="w-12 h-12 text-blue-300" />
        },
        { 
          id: 'automation-scripts',
          title: 'Automation Scripts', 
          description: 'Time-saving coding solutions to automate repetitive tasks and boost your productivity.',
          fullDescription: `
            Work smarter, not harder with Luls Squad Automation Scripts!

            Our scripts help you:
            - Automate repetitive computer tasks
            - Increase productivity
            - Save time and reduce manual work
            - Compatible with multiple platforms

            From file management to web scraping, we've got you covered.
          `,
          icon: <Code className="w-12 h-12 text-blue-300" />
        },
        { 
          id: 'development-tools',
          title: 'Development Tools', 
          description: 'Cutting-edge coding utilities and frameworks to streamline your software development process.',
          fullDescription: `
            Empower your coding journey with Luls Squad Development Tools!

            Comprehensive toolkit for developers:
            - Custom code generators
            - Debugging utilities
            - Framework integrations
            - Performance analyzers
            - Cross-platform compatible

            Designed to make your development process smoother and more efficient.
          `,
          icon: <Code className="w-12 h-12 text-blue-300" />
        }
      ]
    },
    // ... (other sections remain the same, just add 'id' and 'fullDescription' to items)
  };

  const renderContent = () => {
    if (selectedItem) {
      const section = Object.values(sectionData).find(
        sec => sec.items && sec.items.some(item => item.id === selectedItem)
      );
      const item = section.items.find(item => item.id === selectedItem);

      return (
        <div className="container mx-auto px-4 py-12">
          <button 
            onClick={() => setSelectedItem(null)} 
            className="flex items-center text-white mb-6 hover:text-yellow-400 transition-colors"
          >
            <ArrowLeft className="mr-2" /> Back to {section.title}
          </button>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-center justify-center">
              {item.icon}
            </div>
            <div>
              <h1 className="text-4xl font-bold mb-6 text-yellow-400">{item.title}</h1>
              <div className="prose text-white whitespace-pre-wrap">
                {item.fullDescription}
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (activeSection === 'landing') {
      return sectionData.landing.content();
    }

    const section = sectionData[activeSection];
    return (
      <>
        <h1 className="text-4xl font-bold text-center mb-12 uppercase tracking-wider">
          {section.title}
        </h1>

        <div className="grid grid-cols-2 gap-8">
          {section.items.map((item, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 
              transform transition-all duration-300 hover:scale-105 hover:bg-white/20 cursor-pointer"
              onClick={() => setSelectedItem(item.id)}
            >
              <div className="flex items-center mb-4">
                {item.icon}
                <h2 className="text-2xl font-semibold ml-4">{item.title}</h2>
              </div>
              <p className="text-gray-200">{item.description}</p>
            </div>
          ))}
        </div>
      </>
    );
  };

  return (
    <div className="min-h-screen w-full bg-gray-100">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-blue-950/80 backdrop-blur-sm">
        <ul className="flex justify-center space-x-8 p-4">
          {Object.keys(sectionData).map((section) => (
            section !== 'landing' && (
              <li 
                key={section}
                className={`cursor-pointer text-white uppercase tracking-wider transition-all duration-300 
                  ${activeSection === section ? 'text-blue-300 scale-110' : 'hover:text-blue-200'}`}
                onClick={() => {
                  setActiveSection(section);
                  setSelectedItem(null);
                }}
              >
                {section}
              </li>
            )
          ))}
        </ul>
      </nav>

      {/* Sections */}
      <div 
        className={`absolute top-0 left-0 w-full min-h-screen pt-20 
        ${sectionData[activeSection].backgroundColor} text-white`}
      >
        <div className="container mx-auto px-4">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default LulsSquadWebsite;