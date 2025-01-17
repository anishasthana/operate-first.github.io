import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  Page,
  PageSection,
  PageSectionVariants,
  TextContent,
  Button,
} from '@patternfly/react-core';
import { Header, NavSidebar, Footer } from './';

import '@patternfly/patternfly/patternfly.css';
import './Layout.scss';

export const Layout = ({ location, srcLink, children }) => {
  const [isNavOpen, setIsNavOpen] = useState(true);

  const onNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <Page
      header={<Header isNavOpen={isNavOpen} onNavToggle={onNavToggle} location={location} />}
      sidebar={<NavSidebar isNavOpen={isNavOpen} location={location} />}
      isManagedSidebar
      className="layout"
    >
      {children}
      <PageSection className="ofc-text-center" variant={PageSectionVariants.dark}>
        <TextContent>
          <Button variant="primary" isLarge component="a" href={srcLink} target="_contribute">
            Contribute to this page
          </Button>
        </TextContent>
      </PageSection>
      <PageSection sticky="bottom" padding={{ default: 'noPadding' }}>
        <Footer />
      </PageSection>
    </Page>
  );
};

Layout.propTypes = {
  srcLink: PropTypes.string,
  children: PropTypes.node,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
};

export default Layout;
