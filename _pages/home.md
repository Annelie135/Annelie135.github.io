---
layout: splash
title: Aura
permalink: /
hidden: true
classes: wide
header:
  overlay_color: "#5e616c"
  overlay_image: /assets/images/bracelet.png
  actions:
    - label: "<i class='fas fa-shopping-bag'></i> Shop now"
      url: "/pages/all-jewellery/"
excerpt: >
  Handcrafted jewellery that captures effortless beauty.<br />
  <small>Timeless pieces for every moment.</small>

feature_row:
  - image_path: /assets/images/pearl_necklace.png
    alt: "Necklaces"
    title: "Necklaces"
    excerpt: "Elegant, handcrafted necklaces designed to elevate any look."
    url: "/pages/necklaces/"
    btn_class: "btn--primary"
    btn_label: "View Collection"

  - image_path: /assets/images/bracelet.png
    alt: "Bracelets"
    title: "Bracelets"
    excerpt: "Minimal, modern bracelets that celebrate everyday luxury."
    url: "/pages/bracelets/"
    btn_class: "btn--primary"
    btn_label: "View Collection"

  - image_path: /assets/images/earrings.png
    alt: "Earrings"
    title: "Earrings"
    excerpt: "Effortless designs that catch the light — and attention."
    url: "/pages/earrings/"
    btn_class: "btn--primary"
    btn_label: "View Collection"

  - image_path: /assets/images/ring.png
    alt: "Rings"
    title: "Rings"
    excerpt: "Timeless, modern rings that complete every look."
    url: "/pages/rings/"
    btn_class: "btn--primary"
    btn_label: "View Collection"
---

{% include feature_row id="intro" type="center" %}

{% include feature_row %}

{% include feature_row id="feature_row2" type="left" %}

{% include feature_row id="feature_row3" type="right" %}

{% include feature_row id="feature_row4" type="center" %}
