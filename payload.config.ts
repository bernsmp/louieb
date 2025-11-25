import { buildConfig } from 'payload'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { fileURLToPath } from 'url'

// Collections
import { Articles } from './payload/collections/Articles'
import { Videos } from './payload/collections/Videos'
import { Testimonials } from './payload/collections/Testimonials'
import { Users } from './payload/collections/Users'
import { Media } from './payload/collections/Media'

// Globals
import { SiteSettings } from './payload/globals/SiteSettings'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  // Admin panel configuration
  admin: {
    user: Users.slug,
    meta: {
      titleSuffix: ' - Louie Bernstein Admin',
      icons: [
        { url: '/logo/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      ],
    },
    components: {
      graphics: {
        Logo: '@/payload/components/Logo#Logo',
        Icon: '@/payload/components/Icon#Icon',
      },
    },
  },

  // Collections (content types)
  collections: [
    Users,
    Articles,
    Videos,
    Testimonials,
    Media,
  ],

  // Globals (single documents)
  globals: [
    SiteSettings,
  ],

  // Rich text editor
  editor: lexicalEditor(),

  // Database
  db: mongooseAdapter({
    url: process.env.MONGODB_URI || '',
  }),

  // TypeScript output
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },

  // Secret for authentication
  secret: process.env.PAYLOAD_SECRET || 'your-secret-key-change-in-production',

})

