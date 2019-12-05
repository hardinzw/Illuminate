import styled from 'styled-components';
import { TextField } from './textField';

const StyledTextField = styled(TextField)`
  border-width: 2px;
  border-style: dashed;
  border-color: #1166ff;
  box-shadow: 0 4px 4px #1166ff;
  outline: none;
`

const Text = styled.p`
  margin: 8px auto;
`
const Error = styled(Text)`
  font-size: 12px;
  color: red;
`
const StyledInput = styled.input`
  width: 100%;
  font-size: 14px;
  padding: 6px 8px;
  border-width: 1px;
  border-style: solid;
  border-color: ${props => props.error ? 'red' : 'black'};
  margin: 0;
`
const FormRow = styled.div`
  width: 500px;
  margin: 20px auto;
`
export {
  Text,
  Error,
  StyledInput,
  StyledTextField,
  FormRow
};