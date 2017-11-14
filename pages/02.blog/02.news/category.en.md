---
title: 'News'
menu: 'News'
menu_icon: 'newspaper-o'

banner:
  heading: 'Latest News'
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
    description: 'News'
    limit: 10       
---
