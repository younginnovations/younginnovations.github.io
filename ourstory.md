---
layout: page
permalink: /ourstory/
title: 
ourstory: true
tagline: Story behind YoungInnovations
tags: [page]
modified: 2014-05-15
comments: true
carousel:
  - image: /images/pages/carousel/sliderimg-1.jpg
  - image: /images/pages/carousel/sliderimg-2.jpg
---


<ul class="slide-navigation">
<li><a data-scroll-nav="0"><span>How do we do it?</span></a></li>
<li><a data-scroll-nav="1"><span>Team</span></a></li>
<!--<li><a data-scroll-nav="2"><span>Testimonials</span></a></li>-->
</ul>


<div class="service-wrapper">
<div class="service-wrap">
<div class="service-title layout">We develop innovative solutions! But we take pride in making solutions work and create impact!!</div>
</div>
</div>

<div class="wrap-out layout" data-scroll-index="0">
<h2>How do we do it?</h2>
<span class="ask"> Glad you asked!</span>
<p>We partner with clients from around the globe to provide innovative solutions in the areas of:</p>

<section class="services layout">
<div class="services-block" id="data-innovations">
<h3>Data Innovations</h3>
<div class="service-image">
<img src="{{ site.url }}/images/services/ic_data_innovations.png"/>
<img src="{{ site.url }}/images/services/ic_data_innovations@2x.png" class="small" width="159" height="104"/>
</div>
 <p>We love working with data. We develop and use automated tools to collect, curate, analyze and visualize data that makes sense.
</p>

<p>We develop tools and technologies around open data to facilitate the agenda of transparency and accountability in collaboration with our partners from different parts of the globe.
</p>
<p>Our work on platforms like Aidstream, Development Check and OpenNepal among others have already created huge impact at national and international level.
</p>
</div> 

<div class="services-block" id="technology-innovations">
<h3>Technology Innovations</h3>
<div class="service-image">
<img src="{{ site.url }}/images/services/ic_technology_innovations.png"/>
<img src="{{ site.url }}/images/services/ic_technology_innovations@2x.png" class="small" width="162" height="103"/>
</div>
<p>Technology is our heart and soul. We provide innovative technology solutions to our customers in the areas of web and mobile computing.</p>

<p>We help organizations become more efficient by integrating mobile telephony – mobile apps and SMS based technologies within existing business process and practices for wider reach and accessibility.</p>
</div>
<div class="services-block services-web" id="product-innovations">
<h3>Product Innovations</h3>
<div class="service-image">
<img src="{{ site.url }}/images/services/ic_product_innovations.png"/>
<img src="{{ site.url }}/images/services/ic_product_innovations@2x.png" class="small" width="158" height="77"/>
</div> 
 <p>We understand that working on long term products and projects requires more than just technical backstopping. This is where we partner with our customers in providing product specific services on a long term basis.  We consider your products and projects as our internal ones and provide proactive support. We ensure that the product lives up to its promise and has sustainable mechanism for continuous innovation and development.</p>

<p>Based on our niche and expertise, we also work on developing our internal products. As of now, our product <a href="http://aidstream.org" target="_blank">Aidstream</a> stands as one of the most promising platform that allows  development organizations to be more transparent by publishing into <a href="http://www.iatistandard.org" target="_blank">International Aid Transparency Initiative (IATI)</a>. It is being used by organizations in 20+ countries and is a dominant player in IATI ecosystem.</p>
</div>

<div class="services-block services-web" id="community-innovations">
<h3>Community Innovations</h3>
<div class="service-image">
<img src="{{ site.url }}/images/services/ic_community_innovations.png"/>
<img src="{{ site.url }}/images/services/ic_community_innovations@2x.png" class="small" width="161" height="109"/>
</div> 
 <p>We believe that innovations can flourish when we collaborate and think out of the box. This is why we have been involved in community innovations since the very beginning. We reach out to students and wider developer community to share our knowledge and get them engaged. We organize events and facilitate communities around Open Data , Mobile Technologies and Civic Engagement.
</p>

<p>We’ve partnered with organizations like World Bank and Development Initiatives to facilitate open data movement in Nepal. We have organized meet -ups, hackathons, conferences and workshops including the annual Open Data Day celebration in Nepal.</p>
<p>With initial support from infoDev, The World Bank, We have been facilitating the first ever mobile app development community of practice called MobileNepal. We have also been partnering with NCell to conduct  annual App Development conclave – NcellAppCamp in Nepal since 2014.</p>
<p>We have facilitated International events like Global M2Work Hackathon in partnership with infoDev, World Bank and have brought international initiatives like NASA Space App challenge to Nepalese context.</p>
</div>
</section>
</div>

<div class="layout motto-wrapper">
<div class="motto">
With a motto of creating impact through innovative solutions, we make sure that we are there to support our clients from start to end. 
</div>
<blockquote>
We are more than technology service providers.
We are your partners from start to end for development, deployment and institutionalization of solutions that matters to you.
</blockquote>

</div>
<div class="layout intro">
YoungInnovations was co-founded by a team of young entrepreneurs determined to lead initiatives for corporate and social changes through strategic use of ICTs in mid 2007. Since then, the company has come a long way forward. We have been able to create an impact with our solutions around the globe. 
</div>


<div class="layout team-title" data-scroll-index="1">
Happy Team<span>=</span>Productivity
</div>

  
  
  
<div id="staff-wrapper">
  <div class="staff__block">
  {% for staff in site.staffs %}
    <div class="card slow_zoom">
      <div class="text_holder">
        <div class="text_holder_outer">
          <div class="text_holder_inner">
            <h2 class="title">
              {{ staff.name }}
            </h2>
            <span class="designation">{{ staff.designation }}</span>
          </div>
        </div>
      </div>
      <div class="icons_holder"></div>
      <div class="image_shader"></div>
      <div class="staff_image_holder">
        <span class="image">
          <img src="{{ staff.image }}" alt="YIPL Staff Images">
        </span>
      </div>
    </div>
    {% endfor %}
  </div>
</div>


<div class="service-wrapper quote-wrapper">
<div class="service-wrap quote-wrap">
<div class="service-title quote-title layout">Dreams don't work unless you do</div>
</div>
</div>
