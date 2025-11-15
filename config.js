// Image bounds covering only Estonia
// Top-left & bottom-right corners of Estonia region
const ESTONIA_BOUNDS = [
  [60.2, 21.5],   // north-west
  [57.3, 28.3]    // south-east
];

// Fill with your own images
const CONFIG = {

  radar: {
    url: "https://meteologix.com/ee/radar-hd/estonia/20251115-2147z.html",
    bounds: ESTONIA_BOUNDS
  },

  satellite: {
    url: "https://meteologix.com/ee/satellite/estonia/satellite-cloud-tops-alert-10m-superhd/20251115-2130z.html",
    bounds: ESTONIA_BOUNDS
  },

  hail: {
    url: "xx_model-en-358-9_modswissnow_2025111520_2_945_1521.png",
    bounds: ESTONIA_BOUNDS
  },

  cape: {
    url: "xx_model-en-358-9_modswissnow_2025111520_2_945_255.png",
    bounds: ESTONIA_BOUNDS
  },

  srh: {
    url: "xx_model-en-358-9_modswissnow_2025111520_2_945_1356.png",
    bounds: ESTONIA_BOUNDS
  },

  "3cape": {
    url: "xx_model-en-358-9_modswissnow_2025111520_2_945_243.png",
    bounds: ESTONIA_BOUNDS
  }

};
