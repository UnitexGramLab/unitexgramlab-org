---
title: 'Featured Posts'
menu: 'Featured'
menu_icon: 'star-o'

banner:
  heading: 'Featured Post'
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
    description: 'Featured Posts'
    limit: 10       
---
