module.exports = {
  root: true,
  extends: ["@nuxtjs/eslint-config-typescript"],
  rules: {
    "quotes": [2, "single", "avoid-escape"],
    'vue/no-v-html': 'off',
    "vue/max-attributes-per-line": ["error", {
      "singleline": {
        "max": 4
      },
      "multiline": {
        "max": 1
      }
    }],
    "no-new": 0,
    "import/no-named-as-default": 0,
  }
};
