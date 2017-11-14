---
title: 'Blog'
menu: 'Messages'
menu_icon: 'calendar'

banner:
  heading: 'Dernière entrée'
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
    limit: 7
    pagination: true

feed:
    description: 'Dernières entrées'
    limit: 10

pagination: true
---

