import { useEffect, useState } from "react";

const createActionName = actionName => `app/typing/${actionName}`;
const TYPING_OPTION = createActionName('TYPING_OPTION');
const DELETING_OPTION = createActionName('DELETING_OPTION');
const PAUSING_OPTION = createActionName('PAUSING_OPTION');

const TYPING_INTERVAL = 200;
const PAUSING_TIME = 1000;
const DELETING_INTERVAL = 50;

export const useTyping = typingTexts => {
  
    const [index, setIndex] = useState(0)
    const [typing, setTyping] = useState('');
    const [phase, setPhase] = useState(TYPING_OPTION)

    useEffect(() => {
      switch(phase) {
        case TYPING_OPTION: {
          const nextTyping = typingTexts[index].slice(0, typing.length + 1);
      
          if (nextTyping === typing) {
            setPhase(PAUSING_OPTION)
            return
          }
      
          const timing = setTimeout(() => {
            setTyping(nextTyping)
          }, TYPING_INTERVAL)
      
          return () => clearTimeout(timing) 
        }

        case DELETING_OPTION: {
      
          if (!typing) {

            const nextIndex = index + 1
            setIndex(typingTexts[nextIndex] ? nextIndex : 0)
            setPhase(TYPING_OPTION)
            return
          }
          
          const nextRemaining = typingTexts[index].slice(0, typing.length - 1);
      
          const timing = setTimeout(() => {
            setTyping(nextRemaining)
          }, DELETING_INTERVAL)
      
          return () => clearTimeout(timing) 
        }

        case PAUSING_OPTION: 
        default:
          const timing = setTimeout(() => {
            setPhase(DELETING_OPTION)
          }, PAUSING_TIME)
      
          return () => clearTimeout(timing)
      }
    }, [typingTexts, typing, phase, index]);
  
    return typing;
  }