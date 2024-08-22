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
        .error(`This is needed to create a page for each post. Just hit the "Generate" Button to the right of this prompt.`),
    }),
    defineField({
        name: 'description',
        type: 'string',
        description: 'Summary of the article that will show on the Home Page.'
    }),
    defineField({
        name: 'category',
        type: 'string',
        description: 'Classification of article type, will determine output of search and filter functionalities.',
        options: {
            layout: 'radio',
            list: [
                {title: 'Learning', value: 'learning'},
                {title: 'Work', value: 'work'},
                {title: 'Life', value: 'life'},
            ]
        }
    }),
    defineField({
        name: 'homeImage',
        type: 'image',
        description: 'Image related to the article that will display on the home page to represent the article in a collection of articles.'
    }),
    defineField({
        name: 'date',
        type: 'date',
        description: 'Date created.'
    }),
    defineField({
        name: 'updated',
        type: 'date',
        description: 'Last date updated.'
    }),
    defineField({
        name: 'image',
        type: 'image',
        options: {
            hotspot: true,
        }
    }),
    defineField({
        name: 'BodyText',
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