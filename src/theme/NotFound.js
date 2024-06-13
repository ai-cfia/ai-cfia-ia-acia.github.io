import React from 'react';
import Translate, { translate } from '@docusaurus/Translate';
import { PageMetadata } from '@docusaurus/theme-common';
import Layout from '@theme/Layout';
// Importing the original mapper + our components according to the Docusaurus doc
import MDXComponents from '@theme-original/MDXComponents';
import Button from '@site/src/components/Button';


export default function NotFound() {
  return (
    <>
      <PageMetadata
        title={translate({
          id: 'theme.NotFound.title',
          message: 'Page Not Found',
        })}
      />
      <Layout>
        <main className="container margin-vert--xl" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', textAlign: 'center' }}>
          <div className="row">
            <div className="col">
              <h1 className="hero__title">
                <Translate
                  id="theme.NotFound.title"
                  description="The title of the 404 page"
                >
                  Page Not Found
                </Translate>
              </h1>
              <img src="/img/404-robot-image-v2.svg" alt="404 Robot Image" />
              <p>
                <Translate
                  id="theme.NotFound.p1"
                  description="The first paragraph of the 404 page"
                >
                  We could not find what you were looking for.
                </Translate>
              </p>

              <p>
                <Button label="Go to Homepage" link="/" variant="info" size="lg"/>
              </p>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
}
