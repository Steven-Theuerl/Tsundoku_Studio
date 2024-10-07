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
      hidden: ({document}) => !document!.category1 || document!.category1 == null || document!.category1 === undefined
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
      name: 'MainVisualAlt',
      type: 'string',
      description: 'This field is what will be used for an alt tag. Filling out this field accurately is very important for SEO and User Accessibility.'
    }),
    defineField({
      name: 'IntroductionText',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'OutPageLinks',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'InPageLinksPreface',
      type: 'array',
      of: [{type: 'block'}],
    }),

    // Content Section 1:

        defineField({
          name: 'InPageLinkToBodyText1',
          type: 'string',
          description: 'This is the text that will represent the in-page link to the respective BodyTextElement.',
          hidden: ({document}) => !document!.BodyText1 || document!.BodyText1 == null
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
          hidden: ({document}) => !document!.BodyText1 || document!.BodyText1 == null
        }),
        defineField({
          name: 'BodyImage1',
          type: 'image',
          options: { hotspot: true }
        }),
        defineField({
          name: 'BodyImageCaption1',
          type: 'string',
          hidden: ({document}) => !document!.BodyImage1 || document!.BodyImage1  == null
        }),
        defineField({
          name: 'BodyImage1Alt',
          type: 'string',
          description: 'This field is what will be used for an alt tag. Filling out this field accurately is very important for SEO and User Accessibility.',
          hidden: ({document}) => !document!.BodyImage1 || document!.BodyImage1 == null,
        }),

    // Content Section 2:

        defineField({
          name: 'InPageLinkToBodyText2',
          type: 'string',
          description: 'This is the text that will represent the in-page link to the respective BodyTextElement.',
          hidden: ({document}) => !document!.BodyText2 || document!.BodyText2 == null,
        }),
        defineField({
          name: 'BodyText2',
          type: 'array',
          of: [{type: 'block'}],
          hidden: ({document}) => (document!.BodyText1 || document!.BodyImage1)  == null
        }),
        defineField({
          name: 'BodyQuote2',
          type: 'array',
          of: [{type: 'block'}],
          hidden: ({document}) => !document!.BodyText2 || document!.BodyText2  == null
        }),
        defineField({
          name: 'BodyImage2',
          type: 'image',
          options: { hotspot: true },
          hidden: ({document}) => (document!.BodyText1 || document!.BodyImage1)  == null
        }),
        defineField({
          name: 'BodyImageCaption2',
          type: 'string',
          hidden: ({document}) => !document!.BodyImage2 || document!.BodyImage2  == null
        }),
        defineField({
          name: 'BodyImage2Alt',
          type: 'string',
          description: 'This field is what will be used for an alt tag. Filling out this field accurately is very important for SEO and User Accessibility.',
          hidden: ({document}) => !document!.BodyImage2 || document!.BodyImage2 == null,
        }),

    // Content Section 3:

        defineField({
          name: 'InPageLinkToBodyText3',
          type: 'string',
          description: 'This is the text that will represent the in-page link to the respective BodyTextElement.',
          hidden: ({document}) => !document!.BodyText3 || document!.BodyText3 == null
        }),
        defineField({
          name: 'BodyText3',
          type: 'array',
          of: [{type: 'block'}],
          hidden: ({document}) => (document!.BodyText2 || document!.BodyImage2)  == null
        }),
        defineField({
          name: 'BodyQuote3',
          type: 'array',
          of: [{type: 'block'}],
          hidden: ({document}) => !document!.BodyText3 || document!.BodyText3  == null
        }),
        defineField({
          name: 'BodyImage3',
          type: 'image',
          options: { hotspot: true },
          hidden: ({document}) => (document!.BodyText2 || document!.BodyImage2)  == null
        }),
        defineField({
        name: 'BodyImageCaption3',
        type: 'string',
        hidden: ({document}) => !document!.BodyImage3 || document!.BodyImage3  == null
        }),
        defineField({
          name: 'BodyImage3Alt',
          type: 'string',
          description: 'This field is what will be used for an alt tag. Filling out this field accurately is very important for SEO and User Accessibility.',
          hidden: ({document}) => !document!.BodyImage3 || document!.BodyImage3 == null,
        }),

    // Content Section 4:

        defineField({
          name: 'InPageLinkToBodyText4',
          type: 'string',
          description: 'This is the text that will represent the in-page link to the respective BodyTextElement.',
          hidden: ({document}) => !document!.BodyText4 || document!.BodyText4 == null
        }),
        defineField({
          name: 'BodyText4',
          type: 'array',
          of: [{type: 'block'}],
          hidden: ({document}) => (document!.BodyText3 || document!.BodyImage3)  == null
        }),
        defineField({
          name: 'BodyQuote4',
          type: 'array',
          of: [{type: 'block'}],
          hidden: ({document}) => !document!.BodyText4 || document!.BodyText4  == null
        }),
        defineField({
        name: 'BodyImage4',
        type: 'image',
        options: { hotspot: true },
        hidden: ({document}) => (document!.BodyText3 || document!.BodyImage3)  == null
        }),
        defineField({
        name: 'BodyImageCaption4',
        type: 'string',
        hidden: ({document}) => !document!.BodyImage4 || document!.BodyImage4  == null
        }),
        defineField({
          name: 'BodyImage4Alt',
          type: 'string',
          description: 'This field is what will be used for an alt tag. Filling out this field accurately is very important for SEO and User Accessibility.',
          hidden: ({document}) => !document!.BodyImage4 || document!.BodyImage4 == null
        }),

    // Content Section 5:

        defineField({
          name: 'InPageLinkToBodyText5',
          type: 'string',
          description: 'This is the text that will represent the in-page link to the respective BodyTextElement.',
          hidden: ({document}) => !document!.BodyText5 || document!.BodyText5 == null
        }),
        defineField({
          name: 'BodyText5',
          type: 'array',
          of: [{type: 'block'}],
          hidden: ({document}) => (document!.BodyText4 || document!.BodyImage4)  == null
        }),
        defineField({
          name: 'BodyQuote5',
          type: 'array',
          of: [{type: 'block'}],
          hidden: ({document}) => !document!.BodyText5 || document!.BodyText5  == null
        }),
        defineField({
        name: 'BodyImage5',
        type: 'image',
        options: { hotspot: true },
        hidden: ({document}) => (document!.BodyText4 || document!.BodyImage4)  == null
        }),
        defineField({
        name: 'BodyImageCaption5',
        type: 'string',
        hidden: ({document}) => !document!.BodyImage5 || document!.BodyImage5  == null
        }),
        defineField({
          name: 'BodyImage5Alt',
          type: 'string',
          description: 'This field is what will be used for an alt tag. Filling out this field accurately is very important for SEO and User Accessibility.',
          hidden: ({document}) => !document!.BodyImage5 || document!.BodyImage5 == null
        }),

    // Content Section 6:

        defineField({
          name: 'InPageLinkToBodyText6',
          type: 'string',
          description: 'This is the text that will represent the in-page link to the respective BodyTextElement.',
          hidden: ({document}) => !document!.BodyText6 || document!.BodyText6 == null
        }),
        defineField({
          name: 'BodyText6',
          type: 'array',
          of: [{type: 'block'}],
          hidden: ({document}) => (document!.BodyText5 || document!.BodyImage5)  == null
        }),
        defineField({
          name: 'BodyQuote6',
          type: 'array',
          of: [{type: 'block'}],
          hidden: ({document}) => !document!.BodyText6 || document!.BodyText6  == null
        }),
        defineField({
        name: 'BodyImage6',
        type: 'image',
        options: { hotspot: true },
        hidden: ({document}) => (document!.BodyText5 || document!.BodyImage5)  == null
        }),
        defineField({
        name: 'BodyImageCaption6',
        type: 'string',
        hidden: ({document}) => !document!.BodyImage6 || document!.BodyImage6  == null
        }),
        defineField({
          name: 'BodyImage6Alt',
          type: 'string',
          description: 'This field is what will be used for an alt tag. Filling out this field accurately is very important for SEO and User Accessibility.',
          hidden: ({document}) => !document!.BodyImage6 || document!.BodyImage6 == null
        }),

    // Content Section 7:

        defineField({
          name: 'InPageLinkToBodyText7',
          type: 'string',
          description: 'This is the text that will represent the in-page link to the respective BodyTextElement.',
          hidden: ({document}) => !document!.BodyText7 || document!.BodyText7 == null
        }),
        defineField({
          name: 'BodyText7',
          type: 'array',
          of: [{type: 'block'}],
          hidden: ({document}) => (document!.BodyText6 || document!.BodyImage6)  == null
        }),
        defineField({
          name: 'BodyQuote7',
          type: 'array',
          of: [{type: 'block'}],
          hidden: ({document}) => !document!.BodyText7 || document!.BodyText7  == null
        }),
        defineField({
        name: 'BodyImage7',
        type: 'image',
        options: { hotspot: true },
        hidden: ({document}) => (document!.BodyText6 || document!.BodyImage6)  == null
        }),
        defineField({
        name: 'BodyImageCaption7',
        type: 'string',
        hidden: ({document}) => !document!.BodyImage7 || document!.BodyImage7  == null
        }),
        defineField({
          name: 'BodyImage7Alt',
          type: 'string',
          description: 'This field is what will be used for an alt tag. Filling out this field accurately is very important for SEO and User Accessibility.',
          hidden: ({document}) => !document!.BodyImage7 || document!.BodyImage7 == null
        }),

    // Content Section 8:

        defineField({
          name: 'InPageLinkToBodyText8',
          type: 'string',
          description: 'This is the text that will represent the in-page link to the respective BodyTextElement.',
          hidden: ({document}) => !document!.BodyText8 || document!.BodyText8 == null
        }),
        defineField({
          name: 'BodyText8',
          type: 'array',
          of: [{type: 'block'}],
          hidden: ({document}) => (document!.BodyText7 || document!.BodyImage7)  == null
        }),
        defineField({
          name: 'BodyQuote8',
          type: 'array',
          of: [{type: 'block'}],
          hidden: ({document}) => !document!.BodyText8 || document!.BodyText8  == null
        }),
        defineField({
        name: 'BodyImage8',
        type: 'image',
        options: { hotspot: true },
        hidden: ({document}) => (document!.BodyText7 || document!.BodyImage7)  == null
        }),
        defineField({
        name: 'BodyImageCaption8',
        type: 'string',
        hidden: ({document}) => !document!.BodyImage8 || document!.BodyImage8  == null
        }),
        defineField({
          name: 'BodyImage8Alt',
          type: 'string',
          description: 'This field is what will be used for an alt tag. Filling out this field accurately is very important for SEO and User Accessibility.',
          hidden: ({document}) => !document!.BodyImage8 || document!.BodyImage8 == null
        }),

    // Content Section 9:

        defineField({
          name: 'InPageLinkToBodyText9',
          type: 'string',
          description: 'This is the text that will represent the in-page link to the respective BodyTextElement.',
          hidden: ({document}) => !document!.BodyText9 || document!.BodyText9 == null
        }),
        defineField({
          name: 'BodyText9',
          type: 'array',
          of: [{type: 'block'}],
          hidden: ({document}) => (document!.BodyText8 || document!.BodyImage8)  == null
        }),
        defineField({
          name: 'BodyQuote9',
          type: 'array',
          of: [{type: 'block'}],
          hidden: ({document}) => !document!.BodyText9 || document!.BodyText9  == null
        }),
        defineField({
        name: 'BodyImage9',
        type: 'image',
        options: { hotspot: true },
        hidden: ({document}) => (document!.BodyText8 || document!.BodyImage8)  == null
        }),
        defineField({
        name: 'BodyImageCaption9',
        type: 'string',
        hidden: ({document}) => !document!.BodyImage9 || document!.BodyImage9  == null
        }),
        defineField({
          name: 'BodyImage9Alt',
          type: 'string',
          description: 'This field is what will be used for an alt tag. Filling out this field accurately is very important for SEO and User Accessibility.',
          hidden: ({document}) => !document!.BodyImage9 || document!.BodyImage9 == null
        }),

    // Content Section 10:

        defineField({
          name: 'InPageLinkToBodyText10',
          type: 'string',
          description: 'This is the text that will represent the in-page link to the respective BodyTextElement.',
          hidden: ({document}) => !document!.BodyText10 || document!.BodyText10 == null
        }),
        defineField({
          name: 'BodyText10',
          type: 'array',
          of: [{type: 'block'}],
          hidden: ({document}) => (document!.BodyText9 || document!.BodyImage9)  == null
        }),
        defineField({
          name: 'BodyQuote10',
          type: 'array',
          of: [{type: 'block'}],
          hidden: ({document}) => !document!.BodyText10 || document!.BodyText10  == null
        }),
        defineField({
        name: 'BodyImage10',
        type: 'image',
        options: { hotspot: true },
        hidden: ({document}) => (document!.BodyText9 || document!.BodyImage9)  == null
        }),
        defineField({
        name: 'BodyImageCaption10',
        type: 'string',
        hidden: ({document}) => !document!.BodyImage10 || document!.BodyImage10  == null
        }),
        defineField({
          name: 'BodyImage10Alt',
          type: 'string',
          description: 'This field is what will be used for an alt tag. Filling out this field accurately is very important for SEO and User Accessibility.',
          hidden: ({document}) => !document!.BodyImage10 || document!.BodyImage10 == null
        }),

    // Content Section 11:

        defineField({
          name: 'InPageLinkToBodyText11',
          type: 'string',
          description: 'This is the text that will represent the in-page link to the respective BodyTextElement.',
          hidden: ({document}) => !document!.BodyText11 || document!.BodyText11 == null
        }),
        defineField({
          name: 'BodyText11',
          type: 'array',
          of: [{type: 'block'}],
          hidden: ({document}) => (document!.BodyText10 || document!.BodyImage10)  == null
        }),
        defineField({
          name: 'BodyQuote11',
          type: 'array',
          of: [{type: 'block'}],
          hidden: ({document}) => !document!.BodyText11 || document!.BodyText11  == null
        }),
        defineField({
        name: 'BodyImage11',
        type: 'image',
        options: { hotspot: true },
        hidden: ({document}) => (document!.BodyText10 || document!.BodyImage10)  == null
        }),
        defineField({
        name: 'BodyImageCaption11',
        type: 'string',
        hidden: ({document}) => !document!.BodyImage11 || document!.BodyImage11  == null
        }),
        defineField({
          name: 'BodyImage11Alt',
          type: 'string',
          description: 'This field is what will be used for an alt tag. Filling out this field accurately is very important for SEO and User Accessibility.',
          hidden: ({document}) => !document!.BodyImage11 || document!.BodyImage11 == null
        }),

    // Content Section 12:

        defineField({
          name: 'InPageLinkToBodyText12',
          type: 'string',
          description: 'This is the text that will represent the in-page link to the respective BodyTextElement.',
          hidden: ({document}) => !document!.BodyText12 || document!.BodyText12 == null
        }),
        defineField({
          name: 'BodyText12',
          type: 'array',
          of: [{type: 'block'}],
          hidden: ({document}) => (document!.BodyText11 || document!.BodyImage11)  == null
        }),
        defineField({
          name: 'BodyQuote12',
          type: 'array',
          of: [{type: 'block'}],
          hidden: ({document}) => !document!.BodyText12 || document!.BodyText12  == null
        }),
        defineField({
        name: 'BodyImage12',
        type: 'image',
        options: { hotspot: true },
        hidden: ({document}) => (document!.BodyText11 || document!.BodyImage11)  == null
        }),
        defineField({
        name: 'BodyImageCaption12',
        type: 'string',
        hidden: ({document}) => !document!.BodyImage12 || document!.BodyImage12  == null
        }),
        defineField({
          name: 'BodyImage12Alt',
          type: 'string',
          description: 'This field is what will be used for an alt tag. Filling out this field accurately is very important for SEO and User Accessibility.',
          hidden: ({document}) => !document!.BodyImage12 || document!.BodyImage12 == null
        }),

    // Content Section 13:

        defineField({
          name: 'InPageLinkToBodyText13',
          type: 'string',
          description: 'This is the text that will represent the in-page link to the respective BodyTextElement.',
          hidden: ({document}) => !document!.BodyText13 || document!.BodyText13 == null
        }),
        defineField({
          name: 'BodyText13',
          type: 'array',
          of: [{type: 'block'}],
          hidden: ({document}) => (document!.BodyText12 || document!.BodyImage12)  == null
        }),
        defineField({
          name: 'BodyQuote13',
          type: 'array',
          of: [{type: 'block'}],
          hidden: ({document}) => !document!.BodyText13 || document!.BodyText13  == null
        }),
        defineField({
        name: 'BodyImage13',
        type: 'image',
        options: { hotspot: true },
        hidden: ({document}) => (document!.BodyText12 || document!.BodyImage12)  == null
        }),
        defineField({
        name: 'BodyImageCaption13',
        type: 'string',
        hidden: ({document}) => !document!.BodyImage13 || document!.BodyImage13  == null
        }),
        defineField({
          name: 'BodyImage13Alt',
          type: 'string',
          description: 'This field is what will be used for an alt tag. Filling out this field accurately is very important for SEO and User Accessibility.',
          hidden: ({document}) => !document!.BodyImage13 || document!.BodyImage13 == null
        }),

    // Content Section 14:

        defineField({
          name: 'InPageLinkToBodyText14',
          type: 'string',
          description: 'This is the text that will represent the in-page link to the respective BodyTextElement.',
          hidden: ({document}) => !document!.BodyText14 || document!.BodyText14 == null
        }),
        defineField({
          name: 'BodyText14',
          type: 'array',
          of: [{type: 'block'}],
          hidden: ({document}) => (document!.BodyText13 || document!.BodyImage13)  == null
        }),
        defineField({
          name: 'BodyQuote14',
          type: 'array',
          of: [{type: 'block'}],
          hidden: ({document}) => !document!.BodyText14 || document!.BodyText14  == null
        }),
        defineField({
        name: 'BodyImage14',
        type: 'image',
        options: { hotspot: true },
        hidden: ({document}) => (document!.BodyText13 || document!.BodyImage13)  == null
        }),
        defineField({
        name: 'BodyImageCaption14',
        type: 'string',
        hidden: ({document}) => !document!.BodyImage14 || document!.BodyImage14  == null
        }),
        defineField({
          name: 'BodyImage14Alt',
          type: 'string',
          description: 'This field is what will be used for an alt tag. Filling out this field accurately is very important for SEO and User Accessibility.',
          hidden: ({document}) => !document!.BodyImage14 || document!.BodyImage14 == null
        }),

    // Content Section 15:

        defineField({
          name: 'InPageLinkToBodyText15',
          type: 'string',
          description: 'This is the text that will represent the in-page link to the respective BodyTextElement.',
          hidden: ({document}) => !document!.BodyText15 || document!.BodyText15 == null
        }),
        defineField({
          name: 'BodyText15',
          type: 'array',
          of: [{type: 'block'}],
          hidden: ({document}) => (document!.BodyText14 || document!.BodyImage14)  == null
        }),
        defineField({
          name: 'BodyQuote15',
          type: 'array',
          of: [{type: 'block'}],
          hidden: ({document}) => !document!.BodyText15 || document!.BodyText15  == null
        }),
        defineField({
        name: 'BodyImage15',
        type: 'image',
        options: { hotspot: true },
        hidden: ({document}) => (document!.BodyText14 || document!.BodyImage14)  == null
        }),
        defineField({
        name: 'BodyImageCaption15',
        type: 'string',
        hidden: ({document}) => !document!.BodyImage15 || document!.BodyImage15  == null
        }),
        defineField({
          name: 'BodyImage15Alt',
          type: 'string',
          description: 'This field is what will be used for an alt tag. Filling out this field accurately is very important for SEO and User Accessibility.',
          hidden: ({document}) => !document!.BodyImage15 || document!.BodyImage15 == null
        }),

    // Content Section 16:

        defineField({
          name: 'InPageLinkToBodyText16',
          type: 'string',
          description: 'This is the text that will represent the in-page link to the respective BodyTextElement.',
          hidden: ({document}) => !document!.BodyText16 || document!.BodyText16 == null
        }),
        defineField({
          name: 'BodyText16',
          type: 'array',
          of: [{type: 'block'}],
          hidden: ({document}) => (document!.BodyText15 || document!.BodyImage15)  == null
        }),
        defineField({
          name: 'BodyQuote16',
          type: 'array',
          of: [{type: 'block'}],
          hidden: ({document}) => !document!.BodyText16 || document!.BodyText16  == null
        }),
        defineField({
        name: 'BodyImage16',
        type: 'image',
        options: { hotspot: true },
        hidden: ({document}) => (document!.BodyText15 || document!.BodyImage15)  == null
        }),
        defineField({
        name: 'BodyImageCaption16',
        type: 'string',
        hidden: ({document}) => !document!.BodyImage16 || document!.BodyImage16  == null
        }),
        defineField({
          name: 'BodyImage16Alt',
          type: 'string',
          description: 'This field is what will be used for an alt tag. Filling out this field accurately is very important for SEO and User Accessibility.',
          hidden: ({document}) => !document!.BodyImage16 || document!.BodyImage16 == null
        }),

    // Content Section 17:

        defineField({
          name: 'InPageLinkToBodyText17',
          type: 'string',
          description: 'This is the text that will represent the in-page link to the respective BodyTextElement.',
          hidden: ({document}) => !document!.BodyText17 || document!.BodyText17 == null
        }),
        defineField({
          name: 'BodyText17',
          type: 'array',
          of: [{type: 'block'}],
          hidden: ({document}) => (document!.BodyText16 || document!.BodyImage16)  == null
        }),
        defineField({
          name: 'BodyQuote17',
          type: 'array',
          of: [{type: 'block'}],
          hidden: ({document}) => !document!.BodyText17 || document!.BodyText17  == null
        }),
        defineField({
        name: 'BodyImage17',
        type: 'image',
        options: { hotspot: true },
        hidden: ({document}) => (document!.BodyText16 || document!.BodyImage16)  == null
        }),
        defineField({
        name: 'BodyImageCaption17',
        type: 'string',
        hidden: ({document}) => !document!.BodyImage17 || document!.BodyImage17  == null
        }),
        defineField({
          name: 'BodyImage17Alt',
          type: 'string',
          description: 'This field is what will be used for an alt tag. Filling out this field accurately is very important for SEO and User Accessibility.',
          hidden: ({document}) => !document!.BodyImage17 || document!.BodyImage17 == null
        }),

    // Content Section 18:

        defineField({
          name: 'InPageLinkToBodyText18',
          type: 'string',
          description: 'This is the text that will represent the in-page link to the respective BodyTextElement.',
          hidden: ({document}) => !document!.BodyText18 || document!.BodyText18 == null
        }),
        defineField({
          name: 'BodyText18',
          type: 'array',
          of: [{type: 'block'}],
          hidden: ({document}) => (document!.BodyText17 || document!.BodyImage17)  == null
        }),
        defineField({
          name: 'BodyQuote18',
          type: 'array',
          of: [{type: 'block'}],
          hidden: ({document}) => !document!.BodyText18 || document!.BodyText18  == null
        }),
        defineField({
        name: 'BodyImage18',
        type: 'image',
        options: { hotspot: true },
        hidden: ({document}) => (document!.BodyText17 || document!.BodyImage17)  == null
        }),
        defineField({
        name: 'BodyImageCaption18',
        type: 'string',
        hidden: ({document}) => !document!.BodyImage18 || document!.BodyImage18  == null
        }),
        defineField({
          name: 'BodyImage18Alt',
          type: 'string',
          description: 'This field is what will be used for an alt tag. Filling out this field accurately is very important for SEO and User Accessibility.',
          hidden: ({document}) => !document!.BodyImage18 || document!.BodyImage18 == null
        }),

    // Content Section 19:

        defineField({
          name: 'InPageLinkToBodyText19',
          type: 'string',
          description: 'This is the text that will represent the in-page link to the respective BodyTextElement.',
          hidden: ({document}) => !document!.BodyText19 || document!.BodyText19 == null
        }),
        defineField({
          name: 'BodyText19',
          type: 'array',
          of: [{type: 'block'}],
          hidden: ({document}) => (document!.BodyText18 || document!.BodyImage18)  == null
        }),
        defineField({
          name: 'BodyQuote19',
          type: 'array',
          of: [{type: 'block'}],
          hidden: ({document}) => !document!.BodyText19 || document!.BodyText19  == null
        }),
        defineField({
        name: 'BodyImage19',
        type: 'image',
        options: { hotspot: true },
        hidden: ({document}) => (document!.BodyText18 || document!.BodyImage18)  == null
        }),
        defineField({
        name: 'BodyImageCaption19',
        type: 'string',
        hidden: ({document}) => !document!.BodyImage19 || document!.BodyImage19  == null
        }),
        defineField({
          name: 'BodyImage19Alt',
          type: 'string',
          description: 'This field is what will be used for an alt tag. Filling out this field accurately is very important for SEO and User Accessibility.',
          hidden: ({document}) => !document!.BodyImage19 || document!.BodyImage19 == null
        }),

    // Content Section 20:

        defineField({
          name: 'InPageLinkToBodyText20',
          type: 'string',
          description: 'This is the text that will represent the in-page link to the respective BodyTextElement.',
          hidden: ({document}) => !document!.BodyText20 || document!.BodyText20 == null
        }),
        defineField({
          name: 'BodyText20',
          type: 'array',
          of: [{type: 'block'}],
          hidden: ({document}) => (document!.BodyText19 || document!.BodyImage19)  == null
        }),
        defineField({
          name: 'BodyQuote20',
          type: 'array',
          of: [{type: 'block'}],
          hidden: ({document}) => !document!.BodyText20 || document!.BodyText20  == null
        }),
        defineField({
        name: 'BodyImage20',
        type: 'image',
        options: { hotspot: true },
        hidden: ({document}) => (document!.BodyText19 || document!.BodyImage19)  == null
        }),
        defineField({
        name: 'BodyImageCaption20',
        type: 'string',
        hidden: ({document}) => !document!.BodyImage20 || document!.BodyImage20  == null
        }),
        defineField({
          name: 'BodyImage20Alt',
          type: 'string',
          description: 'This field is what will be used for an alt tag. Filling out this field accurately is very important for SEO and User Accessibility.',
          hidden: ({document}) => !document!.BodyImage20 || document!.BodyImage20 == null
        }),

    // Content Section 21:

        defineField({
          name: 'InPageLinkToBodyText21',
          type: 'string',
          description: 'This is the text that will represent the in-page link to the respective BodyTextElement.',
          hidden: ({document}) => !document!.BodyText21 || document!.BodyText21 == null
        }),
        defineField({
          name: 'BodyText21',
          type: 'array',
          of: [{type: 'block'}],
          hidden: ({document}) => (document!.BodyText20 || document!.BodyImage20)  == null
        }),
        defineField({
          name: 'BodyQuote21',
          type: 'array',
          of: [{type: 'block'}],
          hidden: ({document}) => !document!.BodyText21 || document!.BodyText21  == null
        }),
        defineField({
        name: 'BodyImage21',
        type: 'image',
        options: { hotspot: true },
        hidden: ({document}) => (document!.BodyText20 || document!.BodyImage20)  == null
        }),
        defineField({
        name: 'BodyImageCaption21',
        type: 'string',
        hidden: ({document}) => !document!.BodyImage21 || document!.BodyImage21  == null
        }),
        defineField({
          name: 'BodyImage21Alt',
          type: 'string',
          description: 'This field is what will be used for an alt tag. Filling out this field accurately is very important for SEO and User Accessibility.',
          hidden: ({document}) => !document!.BodyImage21 || document!.BodyImage21 == null
        }),

    // Content Section 22:

        defineField({
          name: 'InPageLinkToBodyText22',
          type: 'string',
          description: 'This is the text that will represent the in-page link to the respective BodyTextElement.',
          hidden: ({document}) => !document!.BodyText22 || document!.BodyText22 == null
        }),
        defineField({
          name: 'BodyText22',
          type: 'array',
          of: [{type: 'block'}],
          hidden: ({document}) => (document!.BodyText21 || document!.BodyImage21)  == null
        }),
        defineField({
          name: 'BodyQuote22',
          type: 'array',
          of: [{type: 'block'}],
          hidden: ({document}) => !document!.BodyText22 || document!.BodyText22  == null
        }),
        defineField({
        name: 'BodyImage22',
        type: 'image',
        options: { hotspot: true },
        hidden: ({document}) => (document!.BodyText21 || document!.BodyImage21)  == null
        }),
        defineField({
        name: 'BodyImageCaption22',
        type: 'string',
        hidden: ({document}) => !document!.BodyImage22 || document!.BodyImage22  == null
        }),
        defineField({
          name: 'BodyImage22Alt',
          type: 'string',
          description: 'This field is what will be used for an alt tag. Filling out this field accurately is very important for SEO and User Accessibility.',
          hidden: ({document}) => !document!.BodyImage22 || document!.BodyImage22 == null
        }),

    // Content Section 23:

        defineField({
          name: 'InPageLinkToBodyText23',
          type: 'string',
          description: 'This is the text that will represent the in-page link to the respective BodyTextElement.',
          hidden: ({document}) => !document!.BodyText23 || document!.BodyText23 == null
        }),
        defineField({
          name: 'BodyText23',
          type: 'array',
          of: [{type: 'block'}],
          hidden: ({document}) => (document!.BodyText22 || document!.BodyImage22)  == null
        }),
        defineField({
          name: 'BodyQuote23',
          type: 'array',
          of: [{type: 'block'}],
          hidden: ({document}) => !document!.BodyText23 || document!.BodyText23  == null
        }),
        defineField({
        name: 'BodyImage23',
        type: 'image',
        options: { hotspot: true },
        hidden: ({document}) => (document!.BodyText22 || document!.BodyImage22)  == null
        }),
        defineField({
        name: 'BodyImageCaption23',
        type: 'string',
        hidden: ({document}) => !document!.BodyImage23 || document!.BodyImage23  == null
        }),
        defineField({
          name: 'BodyImage23Alt',
          type: 'string',
          description: 'This field is what will be used for an alt tag. Filling out this field accurately is very important for SEO and User Accessibility.',
          hidden: ({document}) => !document!.BodyImage23 || document!.BodyImage23 == null
        }),

    // Content Section 24:

        defineField({
          name: 'InPageLinkToBodyText24',
          type: 'string',
          description: 'This is the text that will represent the in-page link to the respective BodyTextElement.',
          hidden: ({document}) => !document!.BodyText24 || document!.BodyText24 == null
        }),
        defineField({
          name: 'BodyText24',
          type: 'array',
          of: [{type: 'block'}],
          hidden: ({document}) => (document!.BodyText23 || document!.BodyImage23)  == null
        }),
        defineField({
          name: 'BodyQuote24',
          type: 'array',
          of: [{type: 'block'}],
          hidden: ({document}) => !document!.BodyText24 || document!.BodyText24  == null
        }),
        defineField({
        name: 'BodyImage24',
        type: 'image',
        options: { hotspot: true },
        hidden: ({document}) => (document!.BodyText23 || document!.BodyImage23)  == null
        }),
        defineField({
        name: 'BodyImageCaption24',
        type: 'string',
        hidden: ({document}) => !document!.BodyImage24 || document!.BodyImage24  == null
        }),
        defineField({
          name: 'BodyImage24Alt',
          type: 'string',
          description: 'This field is what will be used for an alt tag. Filling out this field accurately is very important for SEO and User Accessibility.',
          hidden: ({document}) => !document!.BodyImage24 || document!.BodyImage24 == null
        }),

    // Content Section 25:

        defineField({
          name: 'InPageLinkToBodyText25',
          type: 'string',
          description: 'This is the text that will represent the in-page link to the respective BodyTextElement.',
          hidden: ({document}) => !document!.BodyText25 || document!.BodyText25 == null
        }),
        defineField({
          name: 'BodyText25',
          type: 'array',
          of: [{type: 'block'}],
          hidden: ({document}) => (document!.BodyText24 || document!.BodyImage24)  == null
        }),
        defineField({
          name: 'BodyQuote25',
          type: 'array',
          of: [{type: 'block'}],
          hidden: ({document}) => !document!.BodyText25 || document!.BodyText25  == null
        }),
        defineField({
        name: 'BodyImage25',
        type: 'image',
        options: { hotspot: true },
        hidden: ({document}) => (document!.BodyText24 || document!.BodyImage24)  == null
        }),
        defineField({
        name: 'BodyImageCaption25',
        type: 'string',
        hidden: ({document}) => !document!.BodyImage25 || document!.BodyImage25  == null
        }),
        defineField({
          name: 'BodyImage25Alt',
          type: 'string',
          description: 'This field is what will be used for an alt tag. Filling out this field accurately is very important for SEO and User Accessibility.',
          hidden: ({document}) => !document!.BodyImage25 || document!.BodyImage25 == null
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