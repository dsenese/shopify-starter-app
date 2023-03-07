import express from 'express';
import fetch from 'node-fetch';
import { LATEST_API_VERSION } from '@shopify/shopify-api';

const graphqlRouter = express.Router();

graphqlRouter.get('/graphql/getShop/:accessToken/:shopOrigin', async (req, res) => {
  const { accessToken, shopOrigin } = req.params;
  const query = JSON.stringify({
    query: `{
      shop {
        name
        id
        storefrontUrl
        contactEmail
        plan {
          displayName
          shopifyPlus
          partnerDevelopment
        }
      }
    }`,
  });
  console.log('GRAPHQL getShop called');
  const response = await fetch(`https://${shopOrigin}/admin/api/${LATEST_API_VERSION}/graphql.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Access-Token': accessToken,
    },
    body: query,
  });
  const responseJson = await response.json();
  console.log('GQL GET SHOP:', responseJson);
  res.json(responseJson);
});

export default graphqlRouter;
