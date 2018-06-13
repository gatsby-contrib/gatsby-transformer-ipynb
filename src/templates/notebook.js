import React from 'react'
import 'katex/dist/katex.min.css'
import NotebookPreview from '@nteract/notebook-preview'

export default ({ data }) => {
  const post = data.jupyterNotebook
  const notebookJSON = JSON.parse(post.internal.content)
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ width: '50%' }}>
        <p>
          This notebook is displayed in the <strong>client-side</strong> using
          react component
          <code>NotebookPreview</code>
          from
          <a href="https://github.com/nteract/nteract/tree/master/packages/notebook-preview">
            <code>@nteract/notebook-preview</code>.
          </a>
        </p>

        <NotebookPreview notebook={notebookJSON} />
      </div>
      <div style={{ width: '50%' }}>
        <p>
          This notebook is rendered in the <strong>server-side</strong> using
          react component
          <code>NotebookRender</code>
          from
          <a href="https://github.com/nteract/nteract/tree/master/packages/notebook-render">
            <code>@nteract/notebook-render</code>.
          </a>
        </p>

        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </div>
  )
}

export const query = graphql`
  query NotebookQuery($slug: String!) {
    jupyterNotebook(fields: { slug: { eq: $slug } }) {
      html
      internal {
        content
      }
    }
  }
`
