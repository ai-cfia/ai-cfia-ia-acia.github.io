import React, { useEffect, useState } from 'react';
import { Remarkable } from 'remarkable';



import Layout from '@theme/Layout';

const md = new Remarkable();

const DynamicContent = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/ai-cfia/dev-rel-docs/main/REAME.md')
      .then(response => {
        if (!response.ok) {
          throw new Error(`Status: ${response.status}`);
        }
        return response.text();
      })
      .then(data => {
        console.log(data);
        document.getElementById('output').innerHTML = md.render(data);
      })
      .catch(() => {
        window.location.href = 'docs/dev-rel-docs';
      });
  }, []);

  return (
    <Layout
      title="Dev-Rel-Docs-Dynamic"
      description="Your Page Description"
    >

      <div className="docPage__5DB">
        <main className="docMainContainer_gTbr docMainContainerEnhanced_Uz_u">
          <div className="container padding-top--md padding-bottom--lg">
            <div className="row">
              <div className="col docItemCol_VOVn">
                <div className="docItemContainer_Djhp">
                  <article>
                    <div className='theme-doc-markdown markdown'>
                      <div id="output"></div>
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
