interface AccordionProps {
  question: string;
  answer: string;
  visible: string;
  setVisible: (name: string) => void;
}
const Accordion = ({
  question,
  answer,
  visible,
  setVisible,
}: AccordionProps) => {
  const handleClick = (question: string) => {
    if (visible === question) {
      setVisible('');
    } else {
      setVisible(question);
    }
  };

  return (
    <div className="mt-5 bg-zinc-900 py-7 px-12 rounded-lg border border-zinc-800">
      <div
        onClick={() => handleClick(question)}
        className="flex flex-row items-center gap-x-8 cursor-pointer justify-between "
      >
        <h2 className="text-white text-lg">{question}</h2>

        {visible === question ? (
          <span className="text-2xl">-</span>
        ) : (
          <span className="text-2xl">+</span>
        )}
      </div>
      {visible === question ? (
        <p className="text-sm duration-700 delay-150 mt-3 text-primary">
          {answer}
        </p>
      ) : null}
    </div>
  );
};

export default Accordion;
