# ⌨️ SQL-Query-Editor
![Query-Result](./src/assets/Screenshot%20(124).png)


## 🧾 Overview

This is a basic Sql query editor which show the output for the given query. I have provided some predefined quries to run as well as the information about the tables which ar available to user.


## ✨ What I have use
    - reactjs
    - monaco-editor/react
    - tailwind css
    - react-csv
    - vite
    - terser


## 👀 Live Demo
You can play around with this editor here : [SQL-Query-Editor](https://sql-query-editor-mauve.vercel.app)


## ⏱ Page Load Time
-   Before Optimisation
    -   LPC -> 0.9s 
    -   TBT -> 0.7s 
    -   CLS -> 0  

-   After Optimisation
    -   LPC -> 0.288s 
    -   TBT -> 0.1s 
    -   CLS -> 0  

## 🛠️ Tools I have used to improve performance and load time

-   PageSpeedInsights
-   GTmetrix
-   Lighthouse
-   Devtools


## 🦿 Steps to improve   
- Use code splitting for the bundle file.
- Optimize the JS Code and remove the unnecessary code
- text compression
- LCP Optimisation