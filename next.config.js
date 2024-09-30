/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/nome-do-repositorio', // Substitua pelo nome do seu repositório
    images: {
      unoptimized: true,
    },
    // outras configurações
  };
  
  module.exports = nextConfig;