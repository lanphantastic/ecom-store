import 'dotenv/config'

export interface Config {
  cloudinaryName: string
  cloudinaryKey: string
  cloudindarySecret: string
  cookieSecret: string
  databaseURL: string
  stripeSecret: string
  mailHost: string
  mailPort: string
  mailUser: string
  mailPassword: string
  frontendURL: string
}

export class ConfigProvider {
  containsBackendProps = false
  config: Config

  constructor() {
    const {
      CLOUDINARY_CLOUD_NAME,
      CLOUDINARY_KEY,
      CLOUDINARY_SECRET,
      COOKIE_SECRET,
      DATABASE_URL,
      STRIPE_SECRET,
      MAIL_HOST,
      MAIL_PORT,
      MAIL_USER,
      MAIL_PASS,
      FRONTEND_URL,
    } = process.env

    this.config = {
      cloudinaryName: CLOUDINARY_CLOUD_NAME || 'ecomm',
      cloudinaryKey: CLOUDINARY_KEY || 'slfdjsl;fsjf',
      cloudindarySecret: CLOUDINARY_SECRET || 'sdlfsjf;sfj32d',
      cookieSecret: COOKIE_SECRET || 'slfsjf;slfj23rfv',
      databaseURL: DATABASE_URL || 'fs;ldfjs;flj23lfxv',
      stripeSecret: STRIPE_SECRET || 'osfjslfj230fjdsf',
      mailHost: MAIL_HOST || 'fjosijfsdofj2l3',
      mailPort: MAIL_PORT || '8080',
      mailUser: MAIL_USER || 'poe@gmail.com',
      mailPassword: MAIL_PASS || 'poefofsejlcsj',
      frontendURL: FRONTEND_URL || 'localhost:7777',
    }
  }
}

export default new ConfigProvider()
