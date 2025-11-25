import type { CollectionConfig } from 'payload'

export const Videos: CollectionConfig = {
  slug: 'videos',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'featured', 'displayOrder'],
    group: 'Content',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'youtubeId',
      type: 'text',
      required: true,
      admin: {
        description: 'YouTube video ID (e.g., "fCVKpcpD8tA" from youtube.com/watch?v=fCVKpcpD8tA)',
      },
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'category',
      type: 'select',
      options: [
        { label: 'Hero Video', value: 'hero' },
        { label: 'Course Video', value: 'course' },
        { label: 'YouTube Short', value: 'short' },
        { label: 'Featured Video', value: 'featured' },
      ],
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'playlistId',
      type: 'text',
      admin: {
        description: 'YouTube playlist ID (for playlist embeds)',
        condition: (data) => data.category === 'course',
      },
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'displayOrder',
      type: 'number',
      defaultValue: 0,
      admin: {
        position: 'sidebar',
        description: 'Lower numbers appear first',
      },
    },
  ],
}

