# Accordion by Elle Famkar (developed with React)

## Welcome to the Accordion Component project! 👋

important point : remember to install node package and then command -> npm run dev so as to start the project

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

Thank you for exploring this React project! The goal was to gain experience with React and hooks. I hope you enjoy it and welcome your feedback!

Remember that "Every day is a learning day", so let's checkout the requirements to start such project

### The challenge

In his project you should be able to:

- Have a good react mindset
- good state management
- lift states up
- children props
- Use react hooks

### Screenshot

![](src/assets/images/accordion.png)

<!-- ### Links

- Live Site URL: [mini perfume shop](https://ellefamkar.github.io/perfume-shop/) -->

## My process

### Where to find resources

This repository provides even the smallest details about the style requirements of this project such as `font-size`, `padding` and `margin` as well as finding all the required assets in the `/images` folder. The assets are already optimized. All the compontents structures are available here.

### Built with

- Semantic HTML5 markup
- react
- react hooks
- vite
- mobile-first workflow

You can use any tools you like to help you complete the project. So if you got something you'd like to practice, feel free to give it a try.

### What I learned

This projects helped me being more confident with the details of react components, hooks and react mindset to create a responsive Note App with.

To see parts of my codes and see how you can add code snippets, see below:

```Jsx

function AccordionOpen() {
  const [open, setOpen] = useState(null);

  return (
    <div className="accordion one-open-accordion">
      {data.map((item) => (
        <AccordionItem
          key={item.id}
          id={item.id}
          title={item.title}
          open={open}
        >
          {item.content}
        </AccordionItem>
      ))}
      <AccordionItem
        id={0}
        title={"Last Accordion"}
        setOpen={setOpen}
        open={open}
      >
        <p>Text for the dynamic accordion</p>
      </AccordionItem>
    </div>
  );
}

export default AccordionOpen;

function AccordionItem({ id, title, setOpen, open, children }) {
  const isOpen = id === open;

  return (
    <div className={`accordion-item ${isOpen ? "accordion__expanded" : ""}`}>
      <div
        className="accordion-item__header"
        onClick={() => setOpen(isOpen ? null : id)}
      >
        {title}
        <ChevronDownIcon className="accordion-item__chevron" />
      </div>
      <div className="accordion-item__content">{children}</div>
    </div>
  );
}


```

```css
.accordion-item__content {
  transition: all 0.3s ease-in-out;
  max-height: 0px;
  opacity: 0;
  overflow: hidden;
  color: #374151;
  font-size: 1.1rem;
  line-height: 1.6;
  padding: 0 1rem;
}

.accordion-item.accordion__expanded .accordion-item__content {
  padding: 1rem;
  opacity: 1;
  max-height: 100vh;
  transition: all 0.2s ease-in-out;
}

.accordion-item__chevron {
  width: 1.2rem;
  height: 1.2rem;
  transition: all 0.3s ease-out;
  rotate: 0deg;
}
```

### Continued development

In my future projects, not only i am going to focus on improving my knowledge of front end development (html,css, and Js), but also i will make it more dynamic and use react and typeScript so as to develop cooler projects. I will also try to be much more familiar with UI design so as to better understand my clients needs and requirements.

### Useful resources

In order to do this project in a correct way you need to have a good knowledge of html and pure css and grid and then tailwind and you need to know how to work with alpine js in the project and connect it to css if you want to use js.

- [w3schools](https://www.w3schools.com/)
- [MDN](https://developer.mozilla.org/en-US/) - Remember that no matter how many tutorial videos you have watched, you always need to learn details and features from codes documentations
- [codeacademy](https://www.codecademy.com/)
- [udemy](https://www.udemy.com/) - Here you can find a number of tutorials in different languages
- [coursera](https://www.coursera.org/)

To my persian friends:
You can benefit from this complete article on which sources to use to master flex and grid.

## Author

- Website - My website is under construction but you can find my works here : [Elle Famkar](https://github.com/ellefamkar)
- Twitter - [@Ellefamkar](https://www.twitter.com/ellefamkar)

Feel free to ask any questions come to your mind on my github account!

## Acknowledgments

I want to thanks my react mentor, [Saheb Mohammadi](https://www.fronthooks.ir/), who has been inspiring and helpfull with great projects, tips and lessons.

**Have fun using this project!** 🚀
