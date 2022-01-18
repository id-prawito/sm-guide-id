import React, { useState, useReducer } from "react";

const formReducer = (state, event) => {
    return {
        ...state,
        bisa: event.value,
    };
};

const Dashboard = () => {
    // const [title, setTitle] = useState("");
    const [formData, setFormData] = useReducer(formReducer, {});
    const [submitting, setSubmitting] = useState(false);
    const [random, setRandom] = useState(0);

    const handleClick = () => {
        setRandom(Math.floor(Math.random() * (1 - 0 + 1)) + 0);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitting(true);

        setTimeout(() => {
            setSubmitting(false);
        }, 3000);
    };

    const handleChange = (event) => {
        setFormData({
            value: event.target.value,
        });
    };

    console.log(Object.entries(formData));

    return (
        <div>
            <button onClick={handleClick}>Click Me {random}</button>

            {random === 1 ? (
                <div style={{ color: "#000", marginTop: "20px" }}>
                    <p>
                        Anda berhasil menangkap Pokomen, tampilkan modal input
                        name
                    </p>
                    <form onSubmit={handleSubmit}>
                        <label>
                            <input name="name" onChange={handleChange} />
                        </label>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            ) : (
                <div style={{ color: "#000", marginTop: "20px" }}>
                    <p>
                        Sorry, anda tidak berhasil mengangkap pokemon ini, mau
                        coba lagi, button close.
                    </p>
                </div>
            )}

            {submitting && (
                <div style={{ color: "#000", marginTop: "20px" }}>
                    You are submitting the following:
                    <ul>
                        {Object.entries(formData).map(([name, value]) => (
                            <li key={name}>
                                <strong>{name}</strong>:{value.toString()}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Dashboard;
