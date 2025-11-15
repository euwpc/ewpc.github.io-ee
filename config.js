// Image bounds covering only Estonia
// Top-left & bottom-right corners of Estonia region
const ESTONIA_BOUNDS = [
  [60.2, 21.5],   // north-west
  [57.3, 28.3]    // south-east
];

// Fill with your own images
const CONFIG = {

  radar: {
    url: "xx_px250-en-358-9_2025_11_15_945_2137.png",
    bounds: ESTONIA_BOUNDS
  },

  satellite: {
    url: "xx_sat-en-358-9_2025_11_15_21_20_945_1426.png",
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
