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
    <div className="mt-5 bg-zinc-900 py-7 px-12 rounded-lg">
      <div
        onClick={() => handleClick(question)}
        className="flex flex-row items-center gap-x-8 cursor-pointer justify-between "
      >
        <h2 className="text-white text-lg">{question}</h2>

        {visible === question ? (
          <span>
            {/* <Image src={Arrow} alt="" className="rotate-180 duration-500" /> */}
            +
          </span>
        ) : (
          <span>{/* <Image src={Arrow} alt="" /> */}-</span>
        )}
      </div>
      {visible === question ? (
        <p className="text-sm duration-700 delay-150 mt-3">{answer}</p>
      ) : null}
    </div>
  );
};

export default Accordion;
