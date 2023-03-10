import {
  Card,
  Page,
  Button,
  Layout,
  TextContainer,
  Image,
  Stack,
  Link,
  Heading,
} from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";

import { trophyImage } from "../assets";

import { useAppQuery, useAuthenticatedFetch } from "../hooks";

import { ProductsCard } from "../components";
import { useNavigate } from 'react-router-dom';
// import {axios} from 'axios';

export default function HomePage() {
  const navigate = useNavigate();
  const fetch = useAuthenticatedFetch();

  const handleClick = () => {
    navigate('/landing-page');
  }
  // const getShop = async () => {
  //   const {
  //     data,
  //     refetch: refetchProductCount,
  //     isLoading: isLoadingCount,
  //     isRefetching: isRefetchingCount,
  //   } = useAppQuery({
  //     url: "/api/products/count",
  //     reactQueryOptions: {
  //       onSuccess: () => {
  //         setIsLoading(false);
  //       },
  //     },
  //   })
  // }
  const getShop = async () => {
    const response = await fetch("/api/shop/getShop");
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      
    }
  }
  return (
    <Page narrowWidth>
      <TitleBar title="App name" primaryAction={null} />
      <Layout>
        <Layout.Section>
          <Card sectioned>
            <Button onClick={handleClick}>Go to Landing Page</Button>
            <Button onClick={getShop}>Get Shop</Button>
            <Stack
              wrap={false}
              spacing="extraTight"
              distribution="trailing"
              alignment="center"
            >
              <Stack.Item fill>
                <TextContainer spacing="loose">
                  <Heading>Nice work on building a Shopify app 🎉</Heading>
                  <p>
                    Your app is ready to explore! It contains everything you
                    need to get started including the{" "}
                    <Link url="https://polaris.shopify.com/" external>
                      Polaris design system
                    </Link>
                    ,{" "}
                    <Link url="https://shopify.dev/api/admin-graphql" external>
                      Shopify Admin API
                    </Link>
                    , and{" "}
                    <Link
                      url="https://shopify.dev/apps/tools/app-bridge"
                      external
                    >
                      App Bridge
                    </Link>{" "}
                    UI library and components.
                  </p>
                  <p>
                    Ready to go? Start populating your app with some sample
                    products to view and test in your store.{" "}
                  </p>
                  <p>
                    Learn more about building out your app in{" "}
                    <Link
                      url="https://shopify.dev/apps/getting-started/add-functionality"
                      external
                    >
                      this Shopify tutorial
                    </Link>{" "}
                    📚{" "}
                  </p>
                </TextContainer>
              </Stack.Item>
              <Stack.Item>
                <div style={{ padding: "0 20px" }}>
                  <Image
                    source={trophyImage}
                    alt="Nice work on building a Shopify app"
                    width={120}
                  />
                </div>
              </Stack.Item>
            </Stack>
          </Card>
        </Layout.Section>
        <Layout.Section>
          <ProductsCard />
        </Layout.Section>
      </Layout>
    </Page>
  );
}
