import { Heading } from "."
import { renderTheme } from "../../styles/renderTheme"

describe('<Heading/>', () => {
    it('should render with default values', () => {
      const {debug} =  renderTheme(<Heading>Texto</Heading>);
    // eslint-disable-next-line testing-library/no-debugging-utils
    debug();
    });
})