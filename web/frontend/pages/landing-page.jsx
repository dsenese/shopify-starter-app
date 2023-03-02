import React from 'react';
import { Page, Layout, Card, ResourceList, TextStyle } from '@shopify/polaris';

function LandingPage() {
  // Sample data for the resource list
  const resources = [
    {
      id: '1',
      title: 'Resource 1',
      url: '/resource1',
      description: 'This is the first resource',
    },
    {
      id: '2',
      title: 'Resource 2',
      url: '/resource2',
      description: 'This is the second resource',
    },
    {
      id: '3',
      title: 'Resource 3',
      url: '/resource3',
      description: 'This is the third resource',
    },
  ];

  return (
    <Page>
      <Layout>
        <Layout.Section oneThird>
          <Card title="Section 1">
            <p>Info about section 1 goes here.</p>
          </Card>
        </Layout.Section>
        <Layout.Section oneThird>
          <Card title="Section 2">
            <p>Info about section 2 goes here.</p>
          </Card>
        </Layout.Section>
        <Layout.Section>
          <Card>
            <ResourceList
              resourceName={{singular: 'resource', plural: 'resources'}}
              items={resources}
              renderItem={(item) => (
                <ResourceList.Item
                  id={item.id}
                  url={item.url}
                  accessibilityLabel={`View details for ${item.title}`}
                >
                  <h3>
                    <TextStyle variation="strong">{item.title}</TextStyle>
                  </h3>
                  <div>{item.description}</div>
                </ResourceList.Item>
              )}
            />
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}

export default LandingPage;