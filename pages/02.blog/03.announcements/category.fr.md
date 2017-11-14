---
title: 'Annonces'
menu: 'Annonces'
menu_icon: 'bullhorn'

banner:
  heading: 'Dernière annonce'
  summary: true
  class:  'summary'
      
sitemap:
    changefreq: monthly
    priority: 1.03

content:
    items:
        '@taxonomy.category': announcements
    order:
        by: date
        dir: desc
    limit: 10

feed:
    description: 'Annonces'
    limit: 10
---
