import '../App.css';
import React, {useEffect, useState} from "react";

function App() {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [messages, setMessage] = useState([]);

    function handleSubmit(event) {
        event.preventDefault();
        const target = event.target;
    }

    const addMessage = () => {
        let id = Math.random();

        setMessage([...messages, {
            title: title,
            text: text,
            id: id
        }])

    };

    useEffect(() => {
        setTimeout(() => {
            if (messages.length > 0) {
                alert('Сообщение отправлено');
            }
        }, 1500)
    },[messages]);

    return (
        <div>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
            <button onClick={addMessage}>Отправить сообщение</button>

            {
                messages.map((item) => {
                    return (
                        <div key={item.id} style={{marginBottom: '10px', borderBottom: '1px solid black'}}>
                            <div>
                                {item.title}
                            </div>
                            <div>
                                {item.text}
                            </div>
                        </div>
                    )
                })
            }
        </div>

    )
}

export default App;