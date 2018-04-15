---
path: "/article-webpack"
date: "2018-03-31T03:15:59.175Z"
title: "A tale of Webpack 4 and how to finally configure it in the right way"
tags: ['webpack4', 'javascript']
excerpt: "There are a million tutorials online, so you probably have seen a thousand different ways to configure Webpack file. And all of them will be working examples. Why is it so? Webpack itself has been evolving really fast and a lot of loaders and plugins have to keep up. This is a major reason why the configuration files are so different: with a different version combination of the same tools things might work, or break..."
---

# Webpack 4

There are a million tutorials online, so you probably have seen a thousand different ways to configure Webpack file. And all of them will be working examples. Why is it so? Webpack itself has been evolving really fast and a lot of loaders and plugins have to keep up. This is a major reason why the configuration files are so different: with a different version combination of the same tools things might work, or break.

Let me just say one thing, and this is my sincere opinion: a lot of people have been complaining about webpack and how cumbersome it is. This is true in many ways, although I have to say with my experience of working with gulp and grunt, you stumble upon the same type of errors there too, meaning that when you use npm modules, it’s inevitable that some versions would be incompatible.

Webpack 4 so far is the popular module bundler that has just undergone a massive update. There is a lot of new things it has to offer, such as zero configuration, reasonable defaults, performance improvement, optimisation tools out of the box.