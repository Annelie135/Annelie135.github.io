---
layout: splash
title: Aura
permalink: /
hidden: true
classes: wide
header:
  overlay_image: /assets/images/pearl_necklace.png
  overlay_filter: 0.2   # lighter overlay (clean + bright)
  actions:
    - label: "<i class='fas fa-shopping-bag'></i> Shop now"
      url: "/pages/all-jewellery/"
excerpt: >
  Handcrafted jewellery that captures effortless beauty.<br />
  <small>Timeless pieces for every moment.</small>

feature_row:
  - image_path: /assets/images/earrings.png
    alt: "Earrings"
    title: "Earrings"
    excerpt: "Classic hoops."
    url: "/pages/earrings/"
    btn_class: "btn--primary"
    btn_label: "View Collection"
feature_row2:
  - image_path: /assets/images/rings.png
    alt: "Rings"
    title: "Rings"
    excerpt: "Minimal, modern rings that celebrate everyday luxury."
    url: "/pages/rings/"
    btn_class: "btn--primary"
    btn_label: "View Collection"
feature_row3:
  - image_path: /assets/images/pendants.png
    alt: "Pendants"
    title: "Pendants"
    excerpt: "Effortless designs that catch the light — and attention."
    url: "/pages/pendants/"
    btn_class: "btn--primary"
    btn_label: "View Collection"

---

{% include feature_row id="intro" type="center" %}

{% include feature_row %}

{% include feature_row id="feature_row2" type="left" %}

{% include feature_row id="feature_row3" type="right" %}

{% include feature_row id="feature_row4" type="center" %}
