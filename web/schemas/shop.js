const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our data base's data structure 
const ShopSchema = new Schema({
    _id: {type: String},
    accessToken: String,
    shopName: String,
    shopOrigin: String,
    storefrontUrl: String,
    contactEmail: String,
    shopifyPlus: Boolean,
    plan: Map,
    bundles: [String],
    productIds: [String],
    productAnchorIds: [String],
    shopNotifications: Map,
    bundleCss: String,
    bundleJavascript: String,
    tierBundleCss: String,
    currentProductLabel: String,
    bundleLabels: Map,
    bundleScriptLocation: String,
    bundleCustomScriptLocation: String,
    transparentBackground: String,
    bundlePageTransparentBackground: String,
    moneyFormat: String,
    colorMap: Map,
    bundleCssMap: Map,
    displayOnCart: Boolean,
    isHideBundle: Boolean,
    swapOutOfStock: Boolean,
    productDescriptionModalActive: Boolean,
    showCartDiscountPrice: Boolean,
    isAutoApplyDiscount: Boolean,
    isSingleProductPurchase: Boolean,
    redirectLocation: String,
    scriptId: String,
    scriptUrl: String,
    recurring_application_charge: Map,
    shoffiActive: Boolean,
    postPurchaseBundle: Map,
  },
  { timestamps: true }
);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("Shop", ShopSchema);