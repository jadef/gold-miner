"use strict"

module.exports = {
  "ignoreFiles": '**/vendor/**/*.s@(a|c)ss',
  "extends": "stylelint-config-standard",
  "rules": {
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
