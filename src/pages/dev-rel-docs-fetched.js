import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
// imported from : https://github.com/remarkjs/react-markdown

import Layout from '@theme/Layout';


const DynamicContent = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/ai-cfia/dev-rel-docs/main/README.md')
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
        // If there is an error fetching the data, redirect to the static page
        window.location.href = 'docs/dev-rel-docs';
      });
  }, []);

  return (
    <Layout
      title="Dev-Rel-Docs-Fetched"
      description="Fetches the content of the README.md file from the dev-rel-docs repository."
    >

        <div class="docPage__5DB">
          <main class="docMainContainer_gTbr docMainContainerEnhanced_Uz_u">
            <div class="container padding-top--md padding-bottom--lg">
              <div class="row">
                <div class="col docItemCol_VOVn">
                  <div class="docItemContainer_Djhp">
                    <article>
                      <div class="theme-doc-markdown markdown">
                        <ReactMarkdown>{content}</ReactMarkdown>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>


    </Layout>
  );
};

export default DynamicContent;
