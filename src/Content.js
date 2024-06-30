import { useState } from "react";

const Content = () => {

    const [items, setItems] = useState([
        {
            id: 1,
            checked: false,
            item: "One half pound bag of Cocoa Covered Almonds Unsalted"
        },
        {
            id: 2,
            checked: false,
            item: "Item 2"
        },
        {
            id: 3,
            checked: false,
            item: "Item 3"
        }
    ]);

    return (
        <main>
            <ul>
                {items.map((item) => (
                    <li className="item" key={item.id}>
                        <input
                            type="checkbox"
                            checked={item.checked}
                        />
                        <label>{item.item}</label>
                        <button>Delete</button>
                    </li>
                ))}
            </ul>
        </main>
    )
}

export default Content