/* const JupyterTemplate = ({
  data: {
    jupyterNotebook: {
      metadata: { title },
      html,
    },
  },
}) => (
  <Layout>
    <PageTitle title={title} />
    <Stack dangerouslySetInnerHTML={{ __html: html }} />
  </Layout>
);

export default JupyterTemplate

export const query = graphql`
  query JupyterPage($path: String!) {
    allJupyterNotebook(metadata: { path: { eq: $path } }) {
      metadata {
        title
      }
      html
    }
  }
`; */