import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

const data = [
  {
    id: 1,
    title: "Accordion One",
    content:
      "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus quae fuga totam recusandae voluptate minus id aliquam possimus minima reprehenderit inventore fugiat voluptatem sequi, maiores accusantium animi doloribus similique tempore.",
  },
  {
    id: 2,
    title: "Accordion Two",
    content:
      "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus quae fuga totam recusandae voluptate minus id aliquam possimus minima reprehenderit inventore fugiat voluptatem sequi, maiores accusantium animi doloribus similique tempore.",
  },
  {
    id: 3,
    title: "Accordion Three",
    content:
      "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus quae fuga totam recusandae voluptate minus id aliquam possimus minima reprehenderit inventore fugiat voluptatem sequi, maiores accusantium animi doloribus similique tempore.",
  },
];

function AccordionOpen() {
  const [open, setOpen] = useState(null);

  //   const handleOpen = (id) => {
  //     setOpen(id === open ? null : id)
  //   }

  return (
    <div className="accordion one-open-accordion">
      {data.map((item) => (
        <AccordionItem
          key={item.id}
          id={item.id}
          title={item.title}
          setOpen={setOpen}
          //   onOpen={setOpen}
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
        // onClick={() => setOpen(item.id)}
        onClick={() => setOpen(isOpen ? null : id)}
      >
        {title}
        <ChevronDownIcon className="accordion-item__chevron" />
      </div>
      <div className="accordion-item__content">{children}</div>
      {/* {isOpen && <div className="accordion-item__content">{item.content}</div>} */}
    </div>
  );
}
