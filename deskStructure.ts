import {StructureResolver} from 'sanity/structure'
import LivePreviewIframe from './components/LivePreviewIframe'
import {Iframe} from 'sanity-plugin-iframe-pane'

const PREVIEW_URL = 'https://www.tsundoku.blog'

const deskStructure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      // This is the actual "Posts" document list
      S.listItem()
        .title('Posts')
        .schemaType('post')
        .child(
          S.documentTypeList('post')
            .title('Posts')
            .child((documentId) =>
              S.document()
                .documentId(documentId)
                .schemaType('post')
                .views([
                  S.view.form(),
                  S.view
                    .component(Iframe)
                    .options({
                      url: (doc: any) =>
                        `${PREVIEW_URL}/api/preview?redirect=/posts/${doc?.slug?.current || ''}`,
                      defaultSize: 'desktop',
                      reload: {button: true},
                      credentials: 'include',
                    })
                    .title('Preview'),
                ]),
            ),
        ),

      // Add back all other document types *except* 'post'
      ...S.documentTypeListItems().filter((item) => item.getId() !== 'post'),
    ])

export default deskStructure
