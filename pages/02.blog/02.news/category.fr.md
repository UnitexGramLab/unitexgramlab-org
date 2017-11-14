---
title: 'Nouvelles'
menu: 'Nouvelles'
menu_icon: 'newspaper-o'

banner:
  heading: 'Dernières nouvelles'
  summary: true
  class:  'summary'
      
sitemap:
    changefreq: monthly
    priority: 1.03

content:
    items:
        '@taxonomy.category': news
    order:
        by: date
        dir: desc
    limit: 10

feed:
    description: 'Nouvelles'
    limit: 10
---
