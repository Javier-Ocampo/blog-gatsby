---
path: "/article-ecmascript"
date: "2018-04-11T03:15:59.175Z"
title: "ECMAScript 2015 (ES6) tips and tricks"
tags: ['javascript', 'es2015']
excerpt: "EcmaScript 2015 (aka ES6) has been around for couple of years now, and various new features can be used in clever ways. I wanted to list and discuss some of them, since I think you’ll find them useful..."
---

# JavaScript!

EcmaScript 2015 (aka ES6) has been around for couple of years now, and various new features can be used in clever ways. I wanted to list and discuss some of them, since I think you’ll find them useful.

If you know of other tips, please let me know in the comment and I’ll be happy to add them.
1. Enforcing required parameters

ES6 provides default parameter values that allow you to set some default value to be used if the function is called without that parameter.

In the following example, we are setting the required() function as the default value for both a and b parameters. This means that if either a or b is not passed, the required() function is called and you’ll get an error.