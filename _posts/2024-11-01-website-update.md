---
layout: post
title:  "New Website Update!"
date:   2024-11-01
categories: Web Development
---

# Problem
For a while now I have been keen on learning web development, but did not want to resort to a php based website. I wanted to learn something new and exciting. I first developed a website using Vue, however I did not need the majority of the dynamic functionality offered. 

Currently, my site is deployed on a cloudflare pages worker, which dispatches the site users, which is ideal for websites that use client side rendering. After completing this site *(and discovering my complete and utter disdain for CSS)*, I decided to find a new solution for my website.

# Solution
The solution to all my problem comes in the form of Jekyll. Jekyll is a static site generator that is perfect for my needs. 
If you are interested, the source code for this website is available on my [GitHub](https://github.com/Zec-Wicks/zecwicks.com-Website). 
Through the process of developing and deploying my Jekyll site, I have fount several benefits for the site:
- Simplicity: Jekyll allows me to write content in Markdown, which is then converted into static HTML files. This means I can focus on writing without worrying about complex backend code.
- Performance: Since Jekyll generates static sites, the pages load faster compared to dynamic sites. This improves the user experience and can positively impact SEO.
- Security: Static sites are less vulnerable to attacks because there is no server-side processing. This reduces the risk of common vulnerabilities such as SQL injection and cross-site scripting.

# Ramblings
Do you strongly dislike CSS? I sure do. I have spent countless hours trying to get my previous sites to look the way I want it to, only to have it look terrible, with numerous CSS conflicts and errors. I have come to the conclusion that I am not a designer. Using Jekyll has significantly simplified the process of creating a website, as I can focus on writing content rather than tweaking the design.

