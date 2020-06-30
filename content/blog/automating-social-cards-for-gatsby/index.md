---
title: "Automating Social Cards For Gatsby.js"
date: "2018-03-20"
draft: true
---

If you share any of my Weeklies or blog posts in Twitter, Facebook or LinkedIn, you should something like the image below showing up in your share preview:

These are commonly known as share og image sharing cards, and almost every social media supports them when sharing links. Having sharing images in when sharing you content around the web can really help with more people noticing your content. Picture pops out more from a text filled twitter feed. Social images with brand styling also help capture your audience's attention, as they might recognize the your brand colors and fonts better than just random image in their feed.

You can quite easily add this functionality to your website as well, byt just altering a few tags and perhaps finding an accompanying image image for every page on your blog. But what if you don't want to use images? Or perhaps your website has hundreds of pages and finding good photo for each page, or creating them yourself individually just isn't a viable strategy. In this case you can look into creating a automated process to generate these images.

In this tutorial we are going to look at how to generate social sharing images automatically by building a custom gatsby plugin that uses a Node image manipulation library Jimp. Our sharing cards are going to also support showing the title our blog post, the most relevant tag of the post, and the display the estimated reading time of the blog post. The tutorials consists of four parts:

1. What are og-tags and why use them
2. Modifying the blog-post template and SEO component to support tags
3. Creating the social sharing image template
4. Building the gatsby-social-cards plugin

## What are og-tags and why use them

## Setting React Helmet to Support OG-tags and Twitter Tags

Let's start out by modifying our generic gatsby starter to support og-tags and twitter tags on our blog pages. To do this we need to modify to components. in the SEO component we are going to add the following new tags:

... code

To support social sharing sites such as Facebook and LinkedIn we are need to to use og-tags. You can read more about og-tags here. Twitter prefers to use their own tags to display content, so we added those as well.

## Creating the social sharing image template

We want our social sharing cards to follow a similar theme, so that the only thing that changes is the texts on the card. For my blog, I've designed the following style.

As you can see the blue wave as well as the domain name and icons for tags and reading time are already in the template. This is because we want Jimp just to take this template and print the text parts on the right places. To design your own card, you just need to create a image that is 1200 pixels in with and 600px in height. If you want to do something similar to what I'm doing with the icons, measure the offset from the sides of the image, that will help you later when aligning the text.

## Building the gatsby-social-cards plugin

```text
plugins
	gatsby-plugin-og-images
		index.js
		package.json
```

## Usage With Markdown

## Usage With Contentful

I love Contentful. We are currently using at Nyxo, and I also have it in my personal project [Salainen Tiedekunta](https://tiedekunta.com).
