'use client'

import {useEffect, useRef, useState} from 'react'
import {useDocumentStore} from 'sanity'
import {SanityDocument} from 'next-sanity'

export default function LivePreviewIframe({document}: {document: SanityDocument}) {
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const [url, setUrl] = useState('')
  const docStore = useDocumentStore()

  const documentId = document?._id
  const documentType = document?.displayed?._type
  const slug = document?.displayed?.slug?.current

  useEffect(() => {
    if (!documentId || !documentType) return

    const subscription = docStore.pair
      .documentEvents(documentId, documentType)
      .subscribe((event) => {
        if (event.type === 'mutation') {
          if (iframeRef.current) {
            iframeRef.current.src += '' // triggers reload
          }
        }
      })

    if (slug) {
      setUrl(`http://localhost:3000/posts/${slug}`)
    }

    return () => subscription.unsubscribe()
  }, [docStore, documentId, documentType, slug])

  if (!url) return null

  return (
    <iframe
      ref={iframeRef}
      src={url}
      title={`Live preview for ${slug || documentId}`}
      style={{width: '100%', height: '100%', border: 'none'}}
    />
  )
}
