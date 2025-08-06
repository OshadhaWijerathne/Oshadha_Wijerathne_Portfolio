
import React from 'react';

interface IconProps {
  className?: string;
}

export const GitHubIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.026 2.747-1.026.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.922.678 1.862v2.755c0 .268.18.58.688.482A10.001 10.001 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

export const LinkedInIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

export const EmailIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/>
  </svg>
);

export const ExternalLinkIcon: React.FC<IconProps> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
  </svg>
);

export const MenuIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
);

export const CloseIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

// Language/Tech Icons (Simple representations)
export const ReactIcon: React.FC<IconProps> = ({ className = "w-8 h-8 text-sky-400" }) => (
  <svg className={className} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_5_2)"><circle cx="64" cy="64" r="16.8" stroke="currentColor" strokeWidth="6.4"></circle><ellipse cx="64" cy="64" rx="59.2" ry="24" stroke="currentColor" strokeWidth="6.4"></ellipse><ellipse cx="64" cy="64" rx="59.2" ry="24" transform="rotate(60 64 64)" stroke="currentColor" strokeWidth="6.4"></ellipse><ellipse cx="64" cy="64" rx="59.2" ry="24" transform="rotate(120 64 64)" stroke="currentColor" strokeWidth="6.4"></ellipse></g><defs><clipPath id="clip0_5_2"><rect width="128" height="128" fill="white"></rect></clipPath></defs></svg>
);

export const NodeJSIcon: React.FC<IconProps> = ({ className = "w-8 h-8 text-green-500" }) => (
 <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M11.988 0A12.002 12.002 0 0 0 0 12.004C0 18.63 5.368 24 11.992 24s12.008-5.37 12.008-11.996A12.006 12.006 0 0 0 11.988 0zm6.808 18.685c-.355.705-1.033 1.157-1.92 1.157h-1.97c-.666 0-1.16-.23-1.492-.692-.333-.462-.432-.99-.302-1.583l.884-3.255-4.268.008c-.542 0-1.02-.207-1.434-.621s-.62-0.89-.62-1.43V10.72c0-.553.208-1.04.624-1.457.416-.417.9-.625 1.45-.625h3.19l-.92-3.162c-.138-.61.014-1.13.456-1.56.442-.43.983-.646 1.62-.646h1.91c.905 0 1.565.468 1.902 1.19.337.722.33 1.44-.022 2.15l-3.167 7.458h2.37c.553 0 1.04.208 1.457.624s.624.893.624 1.446v1.438c0 .75-.337 1.343-.805 1.776z"/></svg>
);

export const TSIcon: React.FC<IconProps> = ({ className = "w-8 h-8 text-blue-500" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"/><path d="M21.9999 20.9999H1.99994V3H21.9999V20.9999ZM11.9999 13.8999H10.3999V12.4999L12.7999 9.19994H14.5999V12.6999H15.3999V13.8999H14.5999V16.1999C14.5999 17.1999 14.0999 17.6999 13.0999 17.6999C12.5999 17.6999 12.1999 17.5999 11.9999 17.3999V16.2999C12.2999 16.3999 12.5999 16.3999 12.7999 16.3999C13.0999 16.3999 13.2999 16.1999 13.2999 15.8999V13.8999H11.9999ZM9.39994 12.6999H7.19994V13.8999H9.39994V15.4999C9.39994 16.6999 8.49994 17.6999 7.19994 17.6999C5.89994 17.6999 4.99994 16.6999 4.99994 15.4999V12.6999H4.19994V11.4999H4.99994V9.89994C4.99994 8.69994 5.89994 7.69994 7.19994 7.69994C8.49994 7.69994 9.39994 8.69994 9.39994 9.89994V12.6999ZM7.19994 11.4999H8.09994V9.89994C8.09994 9.39994 7.79994 8.99994 7.19994 8.99994C6.59994 8.99994 6.29994 9.39994 6.29994 9.89994V11.4999H7.19994ZM7.19994 16.3999C7.79994 16.3999 8.09994 15.9999 8.09994 15.4999V13.8999H6.29994V15.4999C6.29994 15.9999 6.59994 16.3999 7.19994 16.3999Z"/></svg>
);

export const PythonIcon: React.FC<IconProps> = ({ className = "w-8 h-8 text-yellow-400" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M19.277 8.333c0-1.397-.503-2.497-1.807-2.497H12.38c-1.257 0-1.76.967-1.76 2.217v.273H7.47c-1.303 0-1.807 1.1-1.807 2.497v4.03h3.153v5.043c0 1.397.504 2.497 1.807 2.497h1.68c1.257 0 1.76-.967 1.76-2.217v-.273h3.15c1.304 0 1.807-1.1 1.807-2.497v-4.03h-3.15V8.333zm-9.95 7.52h-1.68V9.69h1.68v6.163zm6.8-5.043h-1.68V4.623h1.68v6.187z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
);

export const CodeIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
    </svg>
);
