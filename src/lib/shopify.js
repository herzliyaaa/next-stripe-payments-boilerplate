import Shopify from '@shopify/shopify-api';

const { SHOPIFY_API_KEY, SHOPIFY_API_SECRET, SHOPIFY_SCOPES, SHOPIFY_SHOP } = process.env;

const shopify = new Shopify.Clients.Rest(SHOPIFY_SHOP, SHOPIFY_API_KEY, SHOPIFY_API_SECRET);

export default shopify;
