import React from "react";

import {Container2 as Container} from './styles'

function Container2({children, isBlur}){

    return <Container isBlur={isBlur}>{children}</Container>
}

export default Container2