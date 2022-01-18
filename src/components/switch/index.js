import React, { useState } from "react";
import { CheckBox, CheckBoxLabel, Card, Pembungkus } from "./SwitchElements";

const Switch = ({ id, color, value }) => {
    const [checkValue, setCheckValue] = useState(value || false);

    const onChangeValue = () => {
        setCheckValue(!checkValue);
    };

    return (
        <>
            {checkValue ? (
                <Card color={color}>
                    {checkValue ? (
                        <p
                            className="warnanya"
                            style={{
                                textTransform: "capitalize",
                                fontSize: "13px",
                                fontWeight: 500,
                            }}
                        >
                            {id}
                        </p>
                    ) : (
                        <p
                            className="bisa"
                            style={{
                                color: "#bebebe",
                                textTransform: "capitalize",
                                fontSize: "13px",
                                fontWeight: 500,
                            }}
                        >
                            [{id}
                        </p>
                    )}
                    <Pembungkus>
                        <CheckBox
                            id={id}
                            type="checkbox"
                            color={color}
                            checked={checkValue}
                            onChange={onChangeValue}
                        />
                        <CheckBoxLabel htmlFor={id} />
                    </Pembungkus>
                </Card>
            ) : (
                <Card color="#bebebe">
                    {checkValue ? (
                        <p
                            style={{
                                color: color,
                                textTransform: "capitalize",
                                fontSize: "13px",
                            }}
                        >
                            {id}
                        </p>
                    ) : (
                        <p
                            style={{
                                color: "#bebebe",
                                textTransform: "capitalize",
                                fontSize: "13px",
                            }}
                        >
                            {id}
                        </p>
                    )}
                    <Pembungkus>
                        <CheckBox
                            id={id}
                            type="checkbox"
                            color={color}
                            checked={checkValue}
                            onChange={onChangeValue}
                        />
                        <CheckBoxLabel htmlFor={id} />
                    </Pembungkus>
                </Card>
            )}
        </>
    );
};

export default Switch;
