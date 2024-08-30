import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import Layout from '@theme/Layout';

const DynamicContent = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    const lang = document.documentElement.lang || 'en';

    let fetchUrl;
    if (lang === 'fr') {
      fetchUrl = 'https://raw.githubusercontent.com/ai-cfia/dev-rel-docs/main/README.fr-ca.md';
    } else {
      fetchUrl = 'https://raw.githubusercontent.com/ai-cfia/dev-rel-docs/main/README.md';
    }

    fetch(fetchUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Status: ${response.status}`);
        }
        return response.text();
      })
      .then(data => {
        setContent(data);
      })
      .catch(() => {
        window.location.href = 'docs/dev-rel-docs';
      });
  }, []);

  return (
    <Layout
      title="Dev-Rel-Docs-Fetched"
      description="Fetches the content of the README.md file from the dev-rel-docs repository."
    >
      <div className="docsWrapper_hBAB">
        <div className="docRoot_UBD9">
          <main className="docMainContainer_TBSr docMainContainerEnhanced_lQrH">
            <div className="container padding-top--md padding-bottom--lg">
              <div className="row">
                <div className="col docItemCol_VOVn">
                  <div className="docItemContainer_Djhp">
                    <article>
                      <div className="theme-doc-markdown markdown">
                        <ReactMarkdown>{content}</ReactMarkdown>
                      </div>
                    </article>
                    <nav className="pagination-nav docusaurus-mt-lg" aria-label="Docs pages"></nav>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </Layout>
  );
};

export default DynamicContent;
