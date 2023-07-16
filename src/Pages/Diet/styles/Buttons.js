import styled from 'styled-components';
//router
import { Link } from 'react-router-dom';

export const CalcButton = styled(Link)`
border: 1px solid;
border-color: ${(props) => props.color === '1' ? '#82C0BD' : '#F592A3'};
background-color: ${(props) => props.color === '1' ? '#82C0BD' : '#F592A3'};
color: white;
font-size: 18px;
font-weight:600;
text-align: ;
padding: 8px 10px;
border-radius: 0.375rem;
margin-top: 10px;
letter-spacing: 2px;
box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
&:hover {
  color: ${(props) => props.color === '1' ? '#82C0BD' : '#F592A3'};
  background-color: white;
}
`

export const DietButton = styled.button`
border: 1px solid #8B6F89;
background-color: #8B6F89;
color: white;
font-size: 18px;
font-weight:600;
padding: 5px 10px;
border-radius: 0.375rem;
margin-top: 20px;
letter-spacing: 2px;
box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
&:hover {
  color: #8B6F89;
  background-color: white;
}
`

export const BmiTypeBox = styled.div`
background-color: ${(props) => props.bgColor};
color: ${(props) => props.color};
font-size: 18px;
font-weight:600;
padding: 10px 15px;
margin: 15px auto;
border-radius: 0.375rem;
letter-spacing: 2px;
box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
`

export const BmiDesc = styled.p`
color: midnightblue;
font-size: 18px;
font-weight:700;
letter-spacing: 2px;
margin-top: 15px;
`;

export const InfoText = styled.p`
color: gray;
font-size: 16px;
font-weight:700;
letter-spacing: 2px;
margin-top: 15px;
text-align: ${(props) => props.align};
`;