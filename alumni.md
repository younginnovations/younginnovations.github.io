---
layout: page
permalink: /ouralumni
title: Alumni
tagline: Alumni at YoungInnovations
tags: [page]
modified: 2017-01-02
comments: true
---

<div class="service-wrapper">
    <div class="service-wrap">
        <div class="service-title layout">
           Our Alumni
        </div>
    </div>
</div>

<div id="alumni-wrapper" class="">
  <div class="alumni__block grid-wrap">
      <ul class="grid swipe-down" id="grid">
      {% for alumni in site.alumnis %}
        <li>
            <a href="javascript:void(0)"> 
                <img src="{{ alumni.image }}" alt="YIPL Alumni Images" />
                <h3>{{ alumni.name }}</h3>
            </a>
        </li>
      {% endfor %}
      </ul>
  </div>
</div>