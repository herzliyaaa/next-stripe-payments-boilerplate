import Shopify, { ApiVersion } from '@shopify/shopify-api';

Shopify.Context.initialize({
  API_KEY: process.env.SHOPIFY_API_KEY,
  API_SECRET_KEY: process.env.SHOPIFY_API_SECRET,
  SCOPES: process.env.SHOPIFY_SCOPES.split(','),
  HOST_NAME: process.env.SHOPIFY_SHOP.replace(/https?:\/\//, ''),
  API_VERSION: ApiVersion.October20,
  IS_EMBEDDED_APP: false,
  SESSION_STORAGE: new Shopify.Session.MemorySessionStorage(),
});

export const withShopifyAuth = (handler) => async (req, res) => {
  const session = await Shopify.Utils.loadCurrentSession(req, res);
  if (!session) {
    res.redirect(`/auth/shopify`);
    return;
  }
  return handler(req, res);
};
