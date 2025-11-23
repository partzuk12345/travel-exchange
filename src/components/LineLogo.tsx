export function LineLogo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* LINE Logo - Speech Bubble */}
      <rect width="40" height="40" rx="12" fill="white"/>
      <path 
        d="M20 8C12.268 8 6 13.373 6 20c0 5.307 4.187 9.84 10.067 11.36.392.085.925.26 1.06.597.122.306.08.785.04 1.093 0 0-.141.85-.172 1.032-.052.306-.241 1.198 1.05.653 1.291-.545 6.964-4.1 9.5-7.022C30.268 25.52 34 23.04 34 20c0-6.627-6.268-12-14-12z" 
        fill="#06C755"
      />
      {/* LINE text inside bubble */}
      <path 
        d="M15 17.5h-1.5v5h3v-1.2H15v-3.8zm3 0v5h1.5v-5H18zm2.5 0v5H22v-3.8l2 3.8h1.5v-5H24v3.8l-2-3.8h-1.5zm6 3.8h2.5v-1.2h-2.5v-1.4h2.8v-1.2H26v5h4v-1.2h-2.5v-1.4z" 
        fill="white"
      />
    </svg>
  );
}
