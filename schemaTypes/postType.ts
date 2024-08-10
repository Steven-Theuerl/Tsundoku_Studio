import {defineField, defineType, useDateTimeFormat} from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Posts',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      description: 'Title of the post.',
      validation: (rule) => rule
      .required()
    }),
    defineField({
        name: 'slug',
        type: 'slug',
        options: {source: 'name'},
        description: 'Individual URL identifier of the post.',
        validation: (rule) => rule
        .required()
        .error(`Baby, you need this to create a page for each post. Just hit the "Generate" Button.`),
    }),
    defineField({
        name: 'description',
        type: 'string',
        description: 'Summary of the article that will show on the Home Page.'
    }),
    defineField({
        name: 'date',
        type: 'date',
        description: 'Date Created.'
    }),
    defineField({
        name: 'image',
        type: 'image',
    }),
    defineField({
        name: 'EnglishText',
        type: 'array',
        of: [{type: 'block'}],
      }),
    defineField({
        name: 'JapaneseText',
        type: 'array',
        of: [{type: 'block'}],
    }),
  ],
  preview: {
    select: {
        title: 'name',
        subtitle: 'date',
        media: 'image'
    }
  }
})