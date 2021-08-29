import React from 'react'


export default function ItemView({ items, header }) {
    const itemContent = items.map(item => <li>{item}</li>);
    const itemComponent = <div>
        <h3>{header}</h3>
        <ul>
            {itemContent}
        </ul>
    </div>

    return itemComponent;

}
