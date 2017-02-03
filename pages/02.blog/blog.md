---
title: 'Blog'
menu: 'Posts'
menu_icon: 'calendar'

banner:
  heading: 'Latest Post'
  summary: true
  class:  'summary'

sitemap:
    changefreq: monthly
    priority: 1.03

content:
    items:
        '@taxonomy.category': blog
    order:
        by: date
        dir: desc
    limit: 4
    pagination: true

feed:
    description: 'Unitex/GramLab Latest Posts'
    limit: 10

pagination: true
---

