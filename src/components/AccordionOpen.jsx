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
  return function Accordion() {
    return (
      <div className="accordion">
        {data.map((item) => (
          <AccordionItem key={item.id} item={item} />
        ))}
      </div>
    );
  };
}

export default AccordionOpen;

function AccordionItem({ item }) {
  return (
    <div className="accordion-item">
      <div className="accordion-item__header">
        {item.title}
        <ChevronDownIcon className="accordion-item__chevron" />
      </div>
      <div className="accordion-item__content">{item.content}</div>
    </div>
  );
}
