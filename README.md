# Zecwicks.com Website

Welcome to the Zecwicks.com website repository. This README provides an overview of the project, and other relevant information.

This website was originally made using Vue. Currently, the site is built using Jekyll.
The Repository is stored on GitHub, but the site is deployed on Cloudflare Pages.

# About
This website is Zechariah Wicks' personal portfolio and blog. It showcases my work, shares insights on programming, cybersecurity, data science, and more. The site is built using Jekyll, a static site generator, and uses the `minima` theme. The repository is hosted on GitHub, and the site is deployed on Cloudflare Pages.

# Use
To run this site locally, follow these steps:
1. **Clone the repository**:
    ```sh
    git clone https://github.com/Zec-Wicks/zecwicks.com-Website.git
    cd zecwicks.com-Website
    ```
2. **Install Dependencies**: Ensure you have Ruby and Bundler installed. Then run:
    ```sh
    bundle install
    ```
3. **Run the Jekyll server**:
    ```
    bundle exec jekyll serve
    ```
4. **Access the site**:
    Navigate to `http://http://localhost:4000` to see the content

## Adding a New Post
To add a new blog post, create a new file in the `_posts` directory with the following format:
```
---
layout: post
title: "Your Post Title"
date: YYYY-MM-DD
categories: [category1, category2]
---
Your post content here.
```


# License
This project is licensed under the MIT License.
