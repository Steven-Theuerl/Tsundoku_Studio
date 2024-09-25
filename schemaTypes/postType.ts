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
        description: 'Summary of the article that will show on the Home Page; please keep less than 175 characters.',
        validation: rule => rule.required().max(175).warning('Please be descriptive, but concise.')
            .error('Can not exceed 175 characters.')
    }),
    defineField({
      name: 'author',
      type: 'string',
      options: {
        layout: 'radio',
        list: [
          {title: 'Steven', value: 'Steven'},
          {title: 'Uni', value: 'Uni'},
          {title: 'Steven, Uni', value: 'Steven, Uni'},
        ]
      }
  }),
    defineField({
        name: 'category1',
        type: 'string',
        description: 'Classification of article type, will determine output of search and filter functionalities.',
        options: {
            layout: 'radio',
            list: [
                {title: 'Web Development', value: 'Web Development'},
                {title: 'UI Design', value: 'UI Design'},
                {title: 'UX', value: 'UX'},
                {title: 'Projects', value: 'Projects'},
                {title: 'Lifestyle', value: 'Lifestyle'},
                {title: 'Technology', value: 'Technology'},
                {title: 'Coding', value: 'Coding'},
                {title: 'Books', value: 'Books'},
                {title: 'Games', value: 'Games'},
                {title: 'Design', value: 'Design'},
            ]
        }
    }),
    defineField({
      name: 'category2',
      type: 'string',
      description: 'Classification of article type, will determine output of search and filter functionalities.',
      options: {
          layout: 'radio',
          list: [
            {title: 'Web Development', value: 'Web Development'},
            {title: 'UI Design', value: 'UI Design'},
            {title: 'UX', value: 'UX'},
            {title: 'Projects', value: 'Projects'},
            {title: 'Lifestyle', value: 'Lifestyle'},
            {title: 'Technology', value: 'Technology'},
            {title: 'Coding', value: 'Coding'},
            {title: 'Books', value: 'Books'},
            {title: 'Games', value: 'Games'},
            {title: 'Design', value: 'Design'},
          ]
      }
  }),
  defineField({
    name: 'category3',
    type: 'string',
    description: 'Classification of article type, will determine output of search and filter functionalities.',
    options: {
        layout: 'radio',
        list: [
          {title: 'Web Development', value: 'Web Development'},
          {title: 'UI Design', value: 'UI Design'},
          {title: 'UX', value: 'UX'},
          {title: 'Projects', value: 'Projects'},
          {title: 'Lifestyle', value: 'Lifestyle'},
          {title: 'Technology', value: 'Technology'},
          {title: 'Coding', value: 'Coding'},
          {title: 'Books', value: 'Books'},
          {title: 'Games', value: 'Games'},
          {title: 'Design', value: 'Design'},
        ]
    }
}),
    defineField({
        name: 'date',
        type: 'date',
        description: 'Date created.',
        options: {
            dateFormat: 'MMMM DD-YYYY'
        }
    }), 
    defineField({
        name: 'updated',
        type: 'date',
        description: 'Last date updated.',
        options: {
            dateFormat: 'MMMM DD-YYYY'
        }
    }),
    defineField({
        name: 'MainVisual',
        type: 'image',
        options: {
            hotspot: true,
        }
    }),
    defineField({
        name: 'BodyText1',
        type: 'array',
        of: [{type: 'block'}],
    }),
    defineField({
      name: 'BodyImage1',
      type: 'image',
      options: {
          hotspot: true,
      }
    }),
    defineField({
      name: 'BodyImageCaption1',
      type: 'string',
    }),
    defineField({
      name: 'BodyText2',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'BodyImage2',
      type: 'image',
      options: {
          hotspot: true,
      }
}),
defineField({
  name: 'BodyImageCaption2',
  type: 'string',
}),
defineField({
  name: 'BodyText3',
  type: 'array',
  of: [{type: 'block'}],
}),
defineField({
  name: 'BodyImage3',
  type: 'image',
  options: {
      hotspot: true,
  }
}),
defineField({
name: 'BodyImageCaption3',
type: 'string',
}),
defineField({
  name: 'BodyText4',
  type: 'array',
  of: [{type: 'block'}],
}),
defineField({
name: 'BodyImage4',
type: 'image',
options: {
    hotspot: true,
}
}),
defineField({
name: 'BodyImageCaption4',
type: 'string',
}),
defineField({
  name: 'BodyText5',
  type: 'array',
  of: [{type: 'block'}],
}),
defineField({
name: 'BodyImage5',
type: 'image',
options: {
    hotspot: true,
}
}),
defineField({
name: 'BodyImageCaption5',
type: 'string',
}),
defineField({
  name: 'BodyText6',
  type: 'array',
  of: [{type: 'block'}],
}),
defineField({
name: 'BodyImage6',
type: 'image',
options: {
    hotspot: true,
}
}),
defineField({
name: 'BodyImageCaption6',
type: 'string',
}),
defineField({
  name: 'BodyText7',
  type: 'array',
  of: [{type: 'block'}],
}),
defineField({
name: 'BodyImage7',
type: 'image',
options: {
    hotspot: true,
}
}),
defineField({
name: 'BodyImageCaption7',
type: 'string',
}),
defineField({
  name: 'BodyText8',
  type: 'array',
  of: [{type: 'block'}],
}),
defineField({
name: 'BodyImage8',
type: 'image',
options: {
    hotspot: true,
}
}),
defineField({
name: 'BodyImageCaption8',
type: 'string',
}),
defineField({
  name: 'BodyText9',
  type: 'array',
  of: [{type: 'block'}],
}),
defineField({
name: 'BodyImage9',
type: 'image',
options: {
    hotspot: true,
}
}),
defineField({
name: 'BodyImageCaption9',
type: 'string',
}),
defineField({
  name: 'BodyText10',
  type: 'array',
  of: [{type: 'block'}],
}),
defineField({
name: 'BodyImage10',
type: 'image',
options: {
    hotspot: true,
}
}),
defineField({
name: 'BodyImageCaption10',
type: 'string',
}),
defineField({
  name: 'BodyText11',
  type: 'array',
  of: [{type: 'block'}],
}),
defineField({
name: 'BodyImage11',
type: 'image',
options: {
    hotspot: true,
}
}),
defineField({
name: 'BodyImageCaption11',
type: 'string',
}),
defineField({
  name: 'BodyText12',
  type: 'array',
  of: [{type: 'block'}],
}),
defineField({
name: 'BodyImage12',
type: 'image',
options: {
    hotspot: true,
}
}),
defineField({
name: 'BodyImageCaption12',
type: 'string',
}),
defineField({
  name: 'BodyText13',
  type: 'array',
  of: [{type: 'block'}],
}),
defineField({
name: 'BodyImage13',
type: 'image',
options: {
    hotspot: true,
}
}),
defineField({
name: 'BodyImageCaption13',
type: 'string',
}),
defineField({
  name: 'BodyText14',
  type: 'array',
  of: [{type: 'block'}],
}),
defineField({
name: 'BodyImage14',
type: 'image',
options: {
    hotspot: true,
}
}),
defineField({
name: 'BodyImageCaption14',
type: 'string',
}),
defineField({
  name: 'BodyText15',
  type: 'array',
  of: [{type: 'block'}],
}),
defineField({
name: 'BodyImage15',
type: 'image',
options: {
    hotspot: true,
}
}),
defineField({
name: 'BodyImageCaption15',
type: 'string',
}),
defineField({
  name: 'BodyText16',
  type: 'array',
  of: [{type: 'block'}],
}),
defineField({
name: 'BodyImage16',
type: 'image',
options: {
    hotspot: true,
}
}),
defineField({
name: 'BodyImageCaption16',
type: 'string',
}),
defineField({
  name: 'BodyText17',
  type: 'array',
  of: [{type: 'block'}],
}),
defineField({
name: 'BodyImage17',
type: 'image',
options: {
    hotspot: true,
}
}),
defineField({
name: 'BodyImageCaption17',
type: 'string',
}),
defineField({
  name: 'BodyText18',
  type: 'array',
  of: [{type: 'block'}],
}),
defineField({
name: 'BodyImage18',
type: 'image',
options: {
    hotspot: true,
}
}),
defineField({
name: 'BodyImageCaption18',
type: 'string',
}),
defineField({
  name: 'BodyText19',
  type: 'array',
  of: [{type: 'block'}],
}),
defineField({
name: 'BodyImage19',
type: 'image',
options: {
    hotspot: true,
}
}),
defineField({
name: 'BodyImageCaption19',
type: 'string',
}),
defineField({
  name: 'BodyText20',
  type: 'array',
  of: [{type: 'block'}],
}),
defineField({
name: 'BodyImage20',
type: 'image',
options: {
    hotspot: true,
}
}),
defineField({
name: 'BodyImageCaption20',
type: 'string',
}),
  ],
  preview: {
    select: {
        title: 'name',
        subtitle: 'date',
        media: 'MainVisual'
    }
  }
})