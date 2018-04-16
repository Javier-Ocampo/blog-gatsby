---
path: "/react-released"
date: "2018-04-01T03:15:59.175Z"
title: "React 16.3 Context API basics"
tags: ['react', 'javascript']
excerpt: "In the coming weeks and months, the newest version of React will be released..."
---

# React 16.3

In the coming weeks and months, the newest version of React will be released — 16.3. With it comes a better implementation of the already existing Context API. I only started using React in October 2017, and on the rare occasions I had used the current Context API, I found it a bit confusing. And of course, the multitude of reasons not to use the API put me off from using it.

I have recently played around with the newer API on an alpha version of React 16.3 and found it so much more enjoyable to use.

One problem I have always had when having a multitude of React components is passing props down a number of levels, known as “prop drilling.” Many components on the way down don’t care about this prop, so they are literally just receiving it for the purpose of passing it down. Pointless.

This is where the context API becomes useful.

Before we proceed, I must add that React 16.3 is currently in Alpha and is not suitable for production. So if you want to follow along to learn the API before release, then feel free to do so.

To install the alpha version of React 16.3, just simply run:

npm install --save react@next react-dom@next