import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useSelector} from "react-redux"
import Markdown from 'react-markdown';
import DeletePromptModal from './DeletePromptModal';

const AnimatedItem = ({ children, delay = 0, index, onMouseEnter, onClick,}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.5, triggerOnce: false });
  return (
    <motion.div
      ref={ref}
      data-index={index}
      onMouseEnter={onMouseEnter}
      onClick={onClick}
      initial={{ scale: 0.7, opacity: 0 }}
      animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.7, opacity: 0 }}
      transition={{ duration: 0.2, delay }}
      className="mb-4 cursor-pointer"
    >
      {children}
    </motion.div>
  );
};

const AnimatedList = ({
  items = [],
  onItemSelect,
  showGradients = true,
  enableArrowNavigation = true,
  className = '',
  itemClassName = '',
  displayScrollbar = true,
  initialSelectedIndex = -1,
  darkMode,
  showPromptDeleteModal,
  setShowPromptDeleteModal,
  handleDeletePrompt,
  promptToDelete,
  setPromptToDelete
}) => {
  const { prompts } = useSelector((state) => state.prompt)

  const listRef = useRef(null);
  const [selectedIndex, setSelectedIndex] = useState(initialSelectedIndex);
  const [keyboardNav, setKeyboardNav] = useState(false);
  const [topGradientOpacity, setTopGradientOpacity] = useState(0);
  const [bottomGradientOpacity, setBottomGradientOpacity] = useState(1);

  useEffect(() => {
    const historyEnd = document.getElementById("historyEnd")
    if (historyEnd) {
      historyEnd.scrollIntoView({ behavior: "smooth" })
    }
  }, [prompts])

  const handleScroll = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    setTopGradientOpacity(Math.min(scrollTop / 50, 1));
    const bottomDistance = scrollHeight - (scrollTop + clientHeight);
    setBottomGradientOpacity(
      scrollHeight <= clientHeight ? 0 : Math.min(bottomDistance / 50, 1)
    );
  };

  // Keyboard navigation: arrow keys, tab, and enter selection
  useEffect(() => {
    if (!enableArrowNavigation) return;
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowDown' || (e.key === 'Tab' && !e.shiftKey)) {
        e.preventDefault();
        setKeyboardNav(true);
        setSelectedIndex((prev) => Math.min(prev + 1, items.length - 1));
      } else if (e.key === 'ArrowUp' || (e.key === 'Tab' && e.shiftKey)) {
        e.preventDefault();
        setKeyboardNav(true);
        setSelectedIndex((prev) => Math.max(prev - 1, 0));
      } else if (e.key === 'Enter') {
        if (selectedIndex >= 0 && selectedIndex < items.length) {
          e.preventDefault();
          if (onItemSelect) {
            onItemSelect(items[selectedIndex], selectedIndex);
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [items, selectedIndex, onItemSelect, enableArrowNavigation]);

  // Scroll the selected item into view if needed
  useEffect(() => {
    if (!keyboardNav || selectedIndex < 0 || !listRef.current) return;
    const container = listRef.current;
    const selectedItem = container.querySelector(`[data-index="${selectedIndex}"]`);
    if (selectedItem) {
      const extraMargin = 50;
      const containerScrollTop = container.scrollTop;
      const containerHeight = container.clientHeight;
      const itemTop = selectedItem.offsetTop;
      const itemBottom = itemTop + selectedItem.offsetHeight;
      if (itemTop < containerScrollTop + extraMargin) {
        container.scrollTo({ top: itemTop - extraMargin, behavior: 'smooth' });
      } else if (itemBottom > containerScrollTop + containerHeight - extraMargin) {
        container.scrollTo({
          top: itemBottom - containerHeight + extraMargin,
          behavior: 'smooth',
        });
      }
    }
    setKeyboardNav(false);
  }, [selectedIndex, keyboardNav]);

  return (
    <div className={`relative w-full ${className}`}>
      <div
        ref={listRef}
        className={`max-h-[86.4vh] overflow-y-auto p-4 ${
          displayScrollbar && darkMode 
            ? "[&::-webkit-scrollbar]:w-[8px] [&::-webkit-scrollbar-track]:bg-[#060606] [&::-webkit-scrollbar-thumb]:bg-[#222] [&::-webkit-scrollbar-thumb]:rounded-[4px]"
            : displayScrollbar && !darkMode ? "[&::-webkit-scrollbar]:w-[8px] [&::-webkit-scrollbar-track]:bg-gray-400 [&::-webkit-scrollbar-thumb]:bg-gray-200 [&::-webkit-scrollbar-thumb]:rounded-[4px]" : "scrollbar-hide"
        }`}
        onScroll={handleScroll}
        // style={{
        //   scrollbarWidth: 'thin',
        //   scrollbarColor: '#222 #060606',
        // }}
      >
        {prompts.map((prompt, index) => (
          <AnimatedItem
            key={index}
            delay={0.1}
            index={index}
            onMouseEnter={() => setSelectedIndex(index)}
            onClick={() => {
              setSelectedIndex(index);
              if (onItemSelect) {
                onItemSelect(item, index);
              }
            }}
          >
            <div className={`${darkMode ? "bg-gray-950 hover:bg-gray-800" : "bg-gray-100 hover:bg-gray-200"} rounded-lg drop-shadow-md ${itemClassName} transition duration-300 ease-in-out`}>
              <div className={`px-3 py-2`}>
                <p className='font-montserrat'>{new Date(prompt.date).toLocaleString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "numeric",
                  minute: "numeric",
                  // second: "numeric"
                })}
                </p>
              </div>
              <div className={`flex justify-between px-3 py-1 ${darkMode ? "bg-gray-700" : "bg-gray-300"}`}>
                <p className={`${darkMode ? "text-white" : "text-gray-800"} m-0 font-palanquin tracking-wider font-bold text-lg`}>{prompt.prompt}</p>
                <span className={`font-encode text-lg font-bold ${darkMode ? "text-white" : "text-gray-700"} min-w-[105px]`}>
                  {prompt.model}
                  <button
                    onClick={() => {setPromptToDelete(prompt); setShowPromptDeleteModal(true)}}
                    id="delete-contact-message"
                    className="mx-4 cursor-pointer inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
                    type="button"
                  >
                    Delete
                  </button>
                </span>
                
              </div>
              <div className='p-3'>
                <p className={`font-instrument text-lg line-clamp-[20]`}>{prompt.answer.length > 0 && <Markdown>{prompt.answer}</Markdown>}</p>
              </div>
            </div>
          </AnimatedItem>
        ))}
         <div id="historyEnd" />
      </div>
      {showGradients && (
        <>
          <div
            className="absolute top-0 left-0 right-0 h-[50px] bg-gradient-to-b from-[#060606] to-transparent pointer-events-none transition-opacity duration-300 ease"
            style={{ opacity: topGradientOpacity }}
          ></div>
          <div
            className="absolute bottom-0 left-0 right-0 h-[100px] bg-gradient-to-t from-[#060606] to-transparent pointer-events-none transition-opacity duration-300 ease"
            style={{ opacity: bottomGradientOpacity }}
          ></div>
        </>
      )}

    {showPromptDeleteModal && <DeletePromptModal darkMode={darkMode} setShowPromptDeleteModal={setShowPromptDeleteModal} handleDeletePrompt={handleDeletePrompt} promptToDelete={promptToDelete}/>}
    </div>
  );
};

export default AnimatedList;


// bg-[#111] hover:bg-[#222]
// bg-gray-800 hover:bg-gray-950