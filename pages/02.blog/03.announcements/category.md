---
title: 'Announcements'
menu: 'Announcements'
menu_icon: 'bullhorn'

banner:
  heading: 'Latest Announcement'
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
    description: 'Announcements'
    limit: 10       
---
