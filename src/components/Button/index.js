import React from "react";

import { Button as ButtonAdd } from "./styles";

function Button({children, ...props }){

    return <ButtonAdd {...props}>{children}</ButtonAdd>
}

export default Button