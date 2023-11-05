import { TextInfo, StyledLink } from 'components/Layout';

export const NotFoundPage = ({ notFound }) => {
  return (
    <div>
      <TextInfo>Page not found!</TextInfo>
      <StyledLink to="/">Please go to home page</StyledLink>
    </div>
  );
};
export default NotFoundPage;
