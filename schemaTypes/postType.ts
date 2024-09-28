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
              {title: 'None', value: undefined},
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
            {title: 'None', value: undefined},
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
      },
      hidden: ({document}) => !document!.category1 || document!.category1 === null || document!.category1 === undefined
  }),
  defineField({
    name: 'category3',
    type: 'string',
    description: 'Classification of article type, will determine output of search and filter functionalities.',
    options: {
        layout: 'radio',
        list: [
          {title: 'None', value: undefined},
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
    },
    hidden: ({document}) => !document!.category2 || document!.category2 === null || document!.category2 === undefined
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
        },
        hidden: ({document}) => !document!.date || document!.date === null || document!.date === undefined
    }),
    defineField({
        name: 'MainVisual',
        type: 'image',
        options: { hotspot: true }
    }),
    defineField({
        name: 'BodyText1',
        type: 'array',
        of: [{type: 'block'}],
    }),
    defineField({
      name: 'BodyQuote1',
      type: 'array',
      of: [{type: 'block'}],
      hidden: ({document}) => !document!.BodyText1 || document!.BodyText1 === (null || undefined)
  }),
    defineField({
      name: 'BodyImage1',
      type: 'image',
      options: { hotspot: true }
    }),
    defineField({
      name: 'BodyImageCaption1',
      type: 'string',
      hidden: ({document}) => !document!.BodyImage1 || document!.BodyImage1 === (null || undefined)
    }),
    defineField({
      name: 'BodyText2',
      type: 'array',
      of: [{type: 'block'}],
      hidden: ({document}) => (document!.BodyText1 || document!.BodyImage1) === (null || undefined)
    }),
    defineField({
      name: 'BodyQuote2',
      type: 'array',
      of: [{type: 'block'}],
      hidden: ({document}) => !document!.BodyText2 || document!.BodyText2 === (null || undefined)
    }),
    defineField({
      name: 'BodyImage2',
      type: 'image',
      options: { hotspot: true },
      hidden: ({document}) => (document!.BodyText1 || document!.BodyImage1) === (null || undefined)
    }),
    defineField({
      name: 'BodyImageCaption2',
      type: 'string',
      hidden: ({document}) => !document!.BodyImage2 || document!.BodyImage2 === (null || undefined)
    }),
    defineField({
      name: 'BodyText3',
      type: 'array',
      of: [{type: 'block'}],
      hidden: ({document}) => (document!.BodyText2 || document!.BodyImage2) === (null || undefined)
    }),
    defineField({
      name: 'BodyQuote3',
      type: 'array',
      of: [{type: 'block'}],
      hidden: ({document}) => !document!.BodyText3 || document!.BodyText3 === (null || undefined)
    }),
    defineField({
      name: 'BodyImage3',
      type: 'image',
      options: { hotspot: true },
      hidden: ({document}) => (document!.BodyText2 || document!.BodyImage2) === (null || undefined)
    }),
    defineField({
    name: 'BodyImageCaption3',
    type: 'string',
    hidden: ({document}) => !document!.BodyImage3 || document!.BodyImage3 === (null || undefined)
    }),
    defineField({
      name: 'BodyText4',
      type: 'array',
      of: [{type: 'block'}],
      hidden: ({document}) => (document!.BodyText3 || document!.BodyImage3) === (null || undefined)
    }),
    defineField({
      name: 'BodyQuote4',
      type: 'array',
      of: [{type: 'block'}],
      hidden: ({document}) => !document!.BodyText4 || document!.BodyText4 === (null || undefined)
    }),
    defineField({
    name: 'BodyImage4',
    type: 'image',
    options: { hotspot: true },
    hidden: ({document}) => (document!.BodyText3 || document!.BodyImage3) === (null || undefined)
    }),
    defineField({
    name: 'BodyImageCaption4',
    type: 'string',
    hidden: ({document}) => !document!.BodyImage4 || document!.BodyImage4 === (null || undefined)
    }),
    defineField({
      name: 'BodyText5',
      type: 'array',
      of: [{type: 'block'}],
      hidden: ({document}) => (document!.BodyText4 || document!.BodyImage4) === (null || undefined)
    }),
    defineField({
      name: 'BodyQuote5',
      type: 'array',
      of: [{type: 'block'}],
      hidden: ({document}) => !document!.BodyText5 || document!.BodyText5 === (null || undefined)
    }),
    defineField({
    name: 'BodyImage5',
    type: 'image',
    options: { hotspot: true },
    hidden: ({document}) => (document!.BodyText4 || document!.BodyImage4) === (null || undefined)
    }),
    defineField({
    name: 'BodyImageCaption5',
    type: 'string',
    hidden: ({document}) => !document!.BodyImage5 || document!.BodyImage5 === (null || undefined)
    }),
    defineField({
      name: 'BodyText6',
      type: 'array',
      of: [{type: 'block'}],
      hidden: ({document}) => (document!.BodyText5 || document!.BodyImage5) === (null || undefined)
    }),
    defineField({
      name: 'BodyQuote6',
      type: 'array',
      of: [{type: 'block'}],
      hidden: ({document}) => !document!.BodyText6 || document!.BodyText6 === (null || undefined)
    }),
    defineField({
    name: 'BodyImage6',
    type: 'image',
    options: { hotspot: true },
    hidden: ({document}) => (document!.BodyText5 || document!.BodyImage5) === (null || undefined)
    }),
    defineField({
    name: 'BodyImageCaption6',
    type: 'string',
    hidden: ({document}) => !document!.BodyImage6 || document!.BodyImage6 === (null || undefined)
    }),
    defineField({
      name: 'BodyText7',
      type: 'array',
      of: [{type: 'block'}],
      hidden: ({document}) => (document!.BodyText6 || document!.BodyImage6) === (null || undefined)
    }),
    defineField({
      name: 'BodyQuote7',
      type: 'array',
      of: [{type: 'block'}],
      hidden: ({document}) => !document!.BodyText7 || document!.BodyText7 === (null || undefined)
    }),
    defineField({
    name: 'BodyImage7',
    type: 'image',
    options: { hotspot: true },
    hidden: ({document}) => (document!.BodyText6 || document!.BodyImage6) === (null || undefined)
    }),
    defineField({
    name: 'BodyImageCaption7',
    type: 'string',
    hidden: ({document}) => !document!.BodyImage7 || document!.BodyImage7 === (null || undefined)
    }),
    defineField({
      name: 'BodyText8',
      type: 'array',
      of: [{type: 'block'}],
      hidden: ({document}) => (document!.BodyText7 || document!.BodyImage7) === (null || undefined)
    }),
    defineField({
      name: 'BodyQuote8',
      type: 'array',
      of: [{type: 'block'}],
      hidden: ({document}) => !document!.BodyText8 || document!.BodyText8 === (null || undefined)
    }),
    defineField({
    name: 'BodyImage8',
    type: 'image',
    options: { hotspot: true },
    hidden: ({document}) => (document!.BodyText7 || document!.BodyImage7) === (null || undefined)
    }),
    defineField({
    name: 'BodyImageCaption8',
    type: 'string',
    hidden: ({document}) => !document!.BodyImage8 || document!.BodyImage8 === (null || undefined)
    }),
    defineField({
      name: 'BodyText9',
      type: 'array',
      of: [{type: 'block'}],
      hidden: ({document}) => (document!.BodyText8 || document!.BodyImage8) === (null || undefined)
    }),
    defineField({
      name: 'BodyQuote9',
      type: 'array',
      of: [{type: 'block'}],
      hidden: ({document}) => !document!.BodyText9 || document!.BodyText9 === (null || undefined)
    }),
    defineField({
    name: 'BodyImage9',
    type: 'image',
    options: { hotspot: true },
    hidden: ({document}) => (document!.BodyText8 || document!.BodyImage8) === (null || undefined)
    }),
    defineField({
    name: 'BodyImageCaption9',
    type: 'string',
    hidden: ({document}) => !document!.BodyImage9 || document!.BodyImage9 === (null || undefined)
    }),
    defineField({
      name: 'BodyText10',
      type: 'array',
      of: [{type: 'block'}],
      hidden: ({document}) => (document!.BodyText9 || document!.BodyImage9) === (null || undefined)
    }),
    defineField({
      name: 'BodyQuote10',
      type: 'array',
      of: [{type: 'block'}],
      hidden: ({document}) => !document!.BodyText10 || document!.BodyText10 === (null || undefined)
    }),
    defineField({
    name: 'BodyImage10',
    type: 'image',
    options: { hotspot: true },
    hidden: ({document}) => (document!.BodyText9 || document!.BodyImage9) === (null || undefined)
    }),
    defineField({
    name: 'BodyImageCaption10',
    type: 'string',
    hidden: ({document}) => !document!.BodyImage10 || document!.BodyImage10 === (null || undefined)
    }),
    defineField({
      name: 'BodyText11',
      type: 'array',
      of: [{type: 'block'}],
      hidden: ({document}) => (document!.BodyText10 || document!.BodyImage10) === (null || undefined)
    }),
    defineField({
      name: 'BodyQuote11',
      type: 'array',
      of: [{type: 'block'}],
      hidden: ({document}) => !document!.BodyText11 || document!.BodyText11 === (null || undefined)
    }),
    defineField({
    name: 'BodyImage11',
    type: 'image',
    options: { hotspot: true },
    hidden: ({document}) => (document!.BodyText10 || document!.BodyImage10) === (null || undefined)
    }),
    defineField({
    name: 'BodyImageCaption11',
    type: 'string',
    hidden: ({document}) => !document!.BodyImage11 || document!.BodyImage11 === (null || undefined)
    }),
    defineField({
      name: 'BodyText12',
      type: 'array',
      of: [{type: 'block'}],
      hidden: ({document}) => (document!.BodyText11 || document!.BodyImage11) === (null || undefined)
    }),
    defineField({
      name: 'BodyQuote12',
      type: 'array',
      of: [{type: 'block'}],
      hidden: ({document}) => !document!.BodyText12 || document!.BodyText12 === (null || undefined)
    }),
    defineField({
    name: 'BodyImage12',
    type: 'image',
    options: { hotspot: true },
    hidden: ({document}) => (document!.BodyText11 || document!.BodyImage11) === (null || undefined)
    }),
    defineField({
    name: 'BodyImageCaption12',
    type: 'string',
    hidden: ({document}) => !document!.BodyImage12 || document!.BodyImage12 === (null || undefined)
    }),
    defineField({
      name: 'BodyText13',
      type: 'array',
      of: [{type: 'block'}],
      hidden: ({document}) => (document!.BodyText12 || document!.BodyImage12) === (null || undefined)
    }),
    defineField({
      name: 'BodyQuote13',
      type: 'array',
      of: [{type: 'block'}],
      hidden: ({document}) => !document!.BodyText13 || document!.BodyText13 === (null || undefined)
    }),
    defineField({
    name: 'BodyImage13',
    type: 'image',
    options: { hotspot: true },
    hidden: ({document}) => (document!.BodyText12 || document!.BodyImage12) === (null || undefined)
    }),
    defineField({
    name: 'BodyImageCaption13',
    type: 'string',
    hidden: ({document}) => !document!.BodyImage13 || document!.BodyImage13 === (null || undefined)
    }),
    defineField({
      name: 'BodyText14',
      type: 'array',
      of: [{type: 'block'}],
      hidden: ({document}) => (document!.BodyText13 || document!.BodyImage13) === (null || undefined)
    }),
    defineField({
      name: 'BodyQuote14',
      type: 'array',
      of: [{type: 'block'}],
      hidden: ({document}) => !document!.BodyText14 || document!.BodyText14 === (null || undefined)
    }),
    defineField({
    name: 'BodyImage14',
    type: 'image',
    options: { hotspot: true },
    hidden: ({document}) => (document!.BodyText13 || document!.BodyImage13) === (null || undefined)
    }),
    defineField({
    name: 'BodyImageCaption14',
    type: 'string',
    hidden: ({document}) => !document!.BodyImage14 || document!.BodyImage14 === (null || undefined)
    }),
    defineField({
      name: 'BodyText15',
      type: 'array',
      of: [{type: 'block'}],
      hidden: ({document}) => (document!.BodyText14 || document!.BodyImage14) === (null || undefined)
    }),
    defineField({
      name: 'BodyQuote15',
      type: 'array',
      of: [{type: 'block'}],
      hidden: ({document}) => !document!.BodyText15 || document!.BodyText15 === (null || undefined)
    }),
    defineField({
    name: 'BodyImage15',
    type: 'image',
    options: { hotspot: true },
    hidden: ({document}) => (document!.BodyText14 || document!.BodyImage14) === (null || undefined)
    }),
    defineField({
    name: 'BodyImageCaption15',
    type: 'string',
    hidden: ({document}) => !document!.BodyImage15 || document!.BodyImage15 === (null || undefined)
    }),
    defineField({
      name: 'BodyText16',
      type: 'array',
      of: [{type: 'block'}],
      hidden: ({document}) => (document!.BodyText15 || document!.BodyImage15) === (null || undefined)
    }),
    defineField({
      name: 'BodyQuote16',
      type: 'array',
      of: [{type: 'block'}],
      hidden: ({document}) => !document!.BodyText16 || document!.BodyText16 === (null || undefined)
    }),
    defineField({
    name: 'BodyImage16',
    type: 'image',
    options: { hotspot: true },
    hidden: ({document}) => (document!.BodyText15 || document!.BodyImage15) === (null || undefined)
    }),
    defineField({
    name: 'BodyImageCaption16',
    type: 'string',
    hidden: ({document}) => !document!.BodyImage16 || document!.BodyImage16 === (null || undefined)
    }),
    defineField({
      name: 'BodyText17',
      type: 'array',
      of: [{type: 'block'}],
      hidden: ({document}) => (document!.BodyText16 || document!.BodyImage16) === (null || undefined)
    }),
    defineField({
      name: 'BodyQuote17',
      type: 'array',
      of: [{type: 'block'}],
      hidden: ({document}) => !document!.BodyText17 || document!.BodyText17 === (null || undefined)
    }),
    defineField({
    name: 'BodyImage17',
    type: 'image',
    options: { hotspot: true },
    hidden: ({document}) => (document!.BodyText16 || document!.BodyImage16) === (null || undefined)
    }),
    defineField({
    name: 'BodyImageCaption17',
    type: 'string',
    hidden: ({document}) => !document!.BodyImage17 || document!.BodyImage17 === (null || undefined)
    }),
    defineField({
      name: 'BodyText18',
      type: 'array',
      of: [{type: 'block'}],
      hidden: ({document}) => (document!.BodyText17 || document!.BodyImage17) === (null || undefined)
    }),
    defineField({
      name: 'BodyQuote18',
      type: 'array',
      of: [{type: 'block'}],
      hidden: ({document}) => !document!.BodyText18 || document!.BodyText18 === (null || undefined)
    }),
    defineField({
    name: 'BodyImage18',
    type: 'image',
    options: { hotspot: true },
    hidden: ({document}) => (document!.BodyText17 || document!.BodyImage17) === (null || undefined)
    }),
    defineField({
    name: 'BodyImageCaption18',
    type: 'string',
    hidden: ({document}) => !document!.BodyImage18 || document!.BodyImage18 === (null || undefined)
    }),
    defineField({
      name: 'BodyText19',
      type: 'array',
      of: [{type: 'block'}],
      hidden: ({document}) => (document!.BodyText18 || document!.BodyImage18) === (null || undefined)
    }),
    defineField({
      name: 'BodyQuote19',
      type: 'array',
      of: [{type: 'block'}],
      hidden: ({document}) => !document!.BodyText19 || document!.BodyText19 === (null || undefined)
    }),
    defineField({
    name: 'BodyImage19',
    type: 'image',
    options: { hotspot: true },
    hidden: ({document}) => (document!.BodyText18 || document!.BodyImage18) === (null || undefined)
    }),
    defineField({
    name: 'BodyImageCaption19',
    type: 'string',
    hidden: ({document}) => !document!.BodyImage19 || document!.BodyImage19 === (null || undefined)
    }),
    defineField({
      name: 'BodyText20',
      type: 'array',
      of: [{type: 'block'}],
      hidden: ({document}) => (document!.BodyText19 || document!.BodyImage19) === (null || undefined)
    }),
    defineField({
      name: 'BodyQuote20',
      type: 'array',
      of: [{type: 'block'}],
      hidden: ({document}) => !document!.BodyText20 || document!.BodyText20 === (null || undefined)
    }),
    defineField({
    name: 'BodyImage20',
    type: 'image',
    options: { hotspot: true },
    hidden: ({document}) => (document!.BodyText19 || document!.BodyImage19) === (null || undefined)
    }),
    defineField({
    name: 'BodyImageCaption20',
    type: 'string',
    hidden: ({document}) => !document!.BodyImage20 || document!.BodyImage20 === (null || undefined)
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