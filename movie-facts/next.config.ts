// next.config.ts
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "lh1.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "lh2.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "lh4.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "lh5.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "lh6.googleusercontent.com",
      },
      // (optional) avatar CDN used sometimes by Google profiles
      { protocol: "https", hostname: "avatars.githubusercontent.com" }, // if you later pull GH avatars
    ],
  },
};

export default nextConfig;
