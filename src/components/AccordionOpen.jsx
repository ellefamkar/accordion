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

  return (
    <div className="accordion one-open-accordion">
      {data.map((item) => (
        <AccordionItem
          key={item.id}
          item={item}
          setOpen={setOpen}
          open={open}
        />
      ))}
    </div>
  );
}

export default AccordionOpen;

function AccordionItem({ item, setOpen, open }) {
  const isOpen = item.id === open;

  return (
    <div className={`accordion-item ${isOpen ? "accordion__expanded" : ""}`}>
      <div
        className="accordion-item__header"
        onClick={() => setOpen(isOpen ? null : item.id)}
      >
        {item.title}
        <ChevronDownIcon className="accordion-item__chevron" />
      </div>
      <div className="accordion-item__content">{item.content}</div>
      {/* {isOpen && <div className="accordion-item__content">{item.content}</div>} */}
    </div>
  );
}
