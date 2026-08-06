import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/home")({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-black text-white selection:bg-brand selection:text-white">
      {/* Background glowing effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[300px] md:h-[500px] md:w-[500px] rounded-full bg-brand/20 blur-[100px] animate-pulse"></div>

      {/* Main Content */}
      <div className="z-10 flex flex-col items-center text-center px-4 animate-rise">
        <div className="mb-6 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium backdrop-blur-md">
          <span className="mr-2 flex h-2 w-2 rounded-full bg-brand animate-pulse"></span>
          Exciting things are on the way
        </div>

        <h1 className="mb-6 text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight">
          <span className="gradient-text  mt-2">Coming Soon</span>
        </h1>

        <p className="max-w-[600px] text-lg md:text-xl text-white/60 mb-10 leading-relaxed">
          We're working hard behind the scenes to craft a seamless experience for you.
        </p>

        {/* Decorative line */}
        <div className="h-px w-48 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      </div>

      {/* Radial fade for background depth */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-30 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 via-black to-black"></div>
    </div>
  );
}
