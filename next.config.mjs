/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: false,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
    domains: ['placeholder.com', 'images.unsplash.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react'],
    serverComponentsExternalPackages: ['sharp'],
    turbotrace: {
      logLevel: 'error',
    },
  },
  compress: true,
  poweredByHeader: false,
  swcMinify: true,
  reactStrictMode: true,
  productionBrowserSourceMaps: false,
  staticPageGenerationTimeout: 120,
  crossOrigin: 'anonymous',
  trailingSlash: false,
  output: 'standalone',
  async redirects() {
    return [
      // Redirecionamentos para URLs antigas ou alteradas
      {
        source: '/ministerio',
        destination: '/#ministerio',
        permanent: true,
      },
      {
        source: '/cursos',
        destination: '/escola-dons',
        permanent: true,
      },
      {
        source: '/sobre-rinaldo',
        destination: '/#sobre',
        permanent: true,
      },
    ]
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, s-maxage=86400',
          },
          {
            key: 'Link',
            value: '</favicon.ico>; rel=preload; as=image, </icon-192x192.png>; rel=preload; as=image'
          }
        ],
      },
      {
        source: '/(.*).(jpg|jpeg|png|webp|avif|ico|svg)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/(.*).(js|css)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
}

export default nextConfig