// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;



import type { NextConfig } from "next";

module.exports = {
  images: {
    qualities: [25, 50, 75, 100],
  },
}

const nextConfig: NextConfig = {
  images: {
     qualities: [25, 50, 75],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.smartechlock.codenvision.in",
        port: "1337",
        pathname: "/uploads/**",
      },
      {
        protocol: "https",
        hostname: "images.wsj.net",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "dev.admin.spba.asme.org.sg",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
        pathname: "/uploads/**",
      },
      {
        protocol: "https",
        hostname: "scontent.cdninstagram.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;

