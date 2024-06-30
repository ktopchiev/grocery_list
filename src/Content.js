import { useState } from "react";

const Content = () => {

    const [name, setName] = useState('Karol');

    const handleNameChange = () => {
        const names = ['Karol', 'Petar', 'Michael'];
        const int = Math.floor(Math.random() * 3);
        setName(names[int]);
      }

    const handleClick = () => {
        console.log('You clicked it')
    }
    
    const handleClick2 = (n) => {
        console.log(`${n} was clicked`)
    }
    
    const handleClick3 = (e) => {
        console.log(e.target.innerText)
    }

    return (
        <main>
            <p>
                {/* We can use expression like arrow function to show some results */}
                Hello {name}!
            </p>
            <button onClick={handleNameChange}>Change name</button>
            <button onClick={() => handleClick2('Dave')}>Click it</button>
            <button onClick={(e) => handleClick3(e)}>Click it</button>
        </main>
    )
}

export default Content