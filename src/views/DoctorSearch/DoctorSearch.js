import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Divider } from '@material-ui/core';
import { Section, SectionAlternate } from 'components/organisms';
import { Main } from './components';

import { doctor } from './data';

const useStyles = makeStyles(theme => ({
  pagePaddingTop: {
    paddingTop: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(5),
    },
  },
}));

const DoctorSearch = () => {
  const classes = useStyles();

  return (
    <div>
      <Section className={classes.pagePaddingTop}>
        <Main data={doctor} />
      </Section>
    </div>
  );
};

export default DoctorSearch;
