/** @type {import('next').NextConfig} */

const API_KEY = 'F34A53B349081AE8ECC0FF288D65F014';
const URL = `http://opendict.korean.go.kr/api/search?key=${API_KEY}`;

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
