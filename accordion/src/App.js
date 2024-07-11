import { useState } from 'react';
import './styles.css';

const Questions = [
  {
    question: "What is the difference between props and state in React?",
    answer:
      "Props (short for properties) are used to pass data from a parent component to a child component. State, on the other hand, is a local data storage specific to a component that can be modified within that component using the useState hook in functional components."
  },
  {
    question: "How do you update the state in a React component?",
    answer:
      "In a class component, you use this.setState() to update the state. In a functional component, you use the useState hook which provides a state variable and a function to update it."
  },
  {
    question: "Can a child component modify its props?",
    answer:
      "No, a child component cannot modify its props directly. Props are read-only in the child component. If a child component needs to modify data that it received as props, it should invoke a callback function passed down from the parent component to make the changes in the parent component's state. "
  }
];

function App() {
  return (
    <div>
      <Accordion data={Questions} />
    </div>
  );
}

export default App;

function Accordion({data}){
  const[curOpen, setCurOpen] = useState(null)
  return <div className='accordion'>
    {
      data.map((item, index)=> <AccordionItem curOpen={curOpen} onOpen={setCurOpen} answer={item.answer} num={index + 1} key={item.question}>{item.question}</AccordionItem>)
    }
  </div>
}

function AccordionItem({children, answer, num, curOpen, onOpen}){
  const isOpen = num === curOpen
  
  function handleToggle(){
    onOpen(isOpen? null : num)
    

  }

  return (

    <div className={`item ${isOpen? "open" : ""}`} onClick={handleToggle}>
      <p className='number'>{num < 9 ? `0${num}`: `${num}`}</p>
      <p className='question'>{children}</p>
      <p className='icon'>{isOpen? "-":"+"}</p>
     {isOpen && <div className='content-box'>
        {answer}
      </div>}
    </div>

    
    
  )
}

