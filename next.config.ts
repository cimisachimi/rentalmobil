import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {};

// Menghubungkan src/i18n/request.ts otomatis
const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);