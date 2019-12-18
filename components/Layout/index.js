import 'semantic-ui-css/semantic.min.css'

import Head from '../Head'
import Nav from '../Nav'

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

const Layout = props => (
  <div style={layoutStyle}>
    <Head title="Home" />
    <Nav />

    {props.children}
  </div>
);

export default Layout;
