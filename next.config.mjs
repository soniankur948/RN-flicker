/** @type {import('next').NextConfig} */
const packages = [
    'react-native',
    '@amzn/payments-components-react-native',
    "react-native-web",
    "react-native-svg",
    "native-base",
  ]
  
  const nextConfig = {
    transpilePackages: packages,
    webpack: (config) =>
      Object.assign(config, {
        resolve: Object.assign(config.resolve, {
          alias: {
            ...(config.resolve.alias || {}),
            // Transform all direct `react-native` imports to `react-native-web`
            "react-native$": "react-native-web",
          },
          extensions: [
            ".web.ts",
            ".web.tsx",
            ".ts",
            ".tsx",
            ".web.js",
            ".web.jsx",
            ".js",
            ".jsx",
            ...config.resolve.extensions,
          ],
        }),
      }),
  };
  
  export default nextConfig;
  
