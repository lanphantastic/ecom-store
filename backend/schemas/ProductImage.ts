import { list } from '@keystone-6/core'
import { text } from '@keystone-6/core/fields'
import { cloudinaryImage } from '@keystone-6/cloudinary'
import ConfigProvider from '../config'

export const cloudinary = {
  cloudName: ConfigProvider.config.cloudinaryName,
  apiKey: ConfigProvider.config.cloudinaryKey,
  apiSecret: ConfigProvider.config.cloudindarySecret,
  folder: 'ecomm',
}

export const ProductImage = list({
  fields: {
    image: cloudinaryImage({
      label: 'Source',
      cloudinary
    }),
    altText: text(),
  },
})
