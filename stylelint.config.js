"use strict"

module.exports = {
  "ignoreFiles": '**/vendor/**/*.s@(a|c)ss',
  "extends": "stylelint-config-standard",
  "plugins": [
    "stylelint-scss"
  ],
  "rules": {
    "at-rule-no-unknown": null,
    "scss/at-rule-no-unknown": true,
    "at-rule-empty-line-before": [ "always", {
      except: [
        "blockless-after-same-name-blockless",
        "blockless-after-blockless",
        "first-nested",
      ],
      ignore: ["after-comment"],
    } ],
    "declaration-empty-line-before": "never",
    "shorthand-property-no-redundant-values": null
  }
}
