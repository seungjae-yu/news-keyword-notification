import styled from "styled-components";
import { styled as materialStyled } from '@material-ui/core/styles';
import { IconButton } from "@material-ui/core";

export const FlexDiv = styled.div`
    display : flex;
`;

export const RightAlignDiv = styled.div`
    display : flex;
    justify-content : flex-end;
`;

export const MaterialButton = materialStyled(IconButton)({

});