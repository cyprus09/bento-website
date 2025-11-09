export const playlist = [
  {
    title: "ten",
    artist: "Fred again..",
    album: "ten",
    artwork: "/images/album_art/fred_again.png",
    color: "from-blue-400 to-purple-500",
  },
  {
    title: "Dreams",
    artist: "Fleetwood Mac",
    album: "Rumours",
    artwork: "/images/album_art/fleetwood_mac.png",
    color: "from-amber-300 to-orange-500",
  },
  {
    title: "Pyramids",
    artist: "Frank Ocean",
    album: "Channel Orange",
    artwork: "/images/album_art/frank_ocean.png",
    color: "from-orange-400 to-red-500",
  },
];

// Note to self:
//⚠️ The Tailwind purge issue

// Tailwind only includes CSS for class names it can statically detect in your source code.
// Dynamic values like ${currentTrack.color} don’t get scanned.

// So in production (and sometimes even in dev if you use JIT with constraints), Tailwind sees:

// class="bg-gradient-to-br ${gradient}"


// and doesn’t realize that from-blue-400, from-amber-400, or to-purple-500 might appear later.

// But since "from-orange-400 to-red-500" does appear elsewhere** (like in your hover overlay here 👇)**

// <div className="absolute inset-0 bg-gradient-to-br from-orange-400/10 to-red-400/10 ..."/>

// Tailwind keeps those colors in the build — which is why Frank Ocean’s gradient works and the oth
