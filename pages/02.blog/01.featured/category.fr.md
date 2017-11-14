---
title: 'Messages à la une'
menu: 'A la Une'
menu_icon: 'star-o'

banner:
  heading: 'Messages à la une'
  summary: true
  class:  'summary'
      
sitemap:
    changefreq: monthly
    priority: 1.03

content:
    items:
        '@taxonomy.category': featured
    order:
        by: date
        dir: desc
    limit: 10

feed:
    description: 'Messages à la une'
    limit: 10
---
