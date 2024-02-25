import { HomeStyledContainer, Title, LinkContainer, LinkButton } from "./Home.styled";
import { NavLink } from "react-router-dom";


const HomePage = () => {
    
  return (
    <>
    <HomeStyledContainer />
        <Title>Welcome to Rental Car</Title>
        <LinkContainer >
            <NavLink to="/catalog">
                <LinkButton>to catalog</LinkButton>
                  
            </NavLink>              
        </LinkContainer>
    </>
  );
};

export default HomePage;