import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
} from '@material-ui/core';
import { SectionHeader } from 'components/molecules';
import { Section, Parallax } from 'components/organisms';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '100%',
    position: 'relative',
    background: 'white',
    overflow: 'hidden',
  },
  sectionWrapper: {
    height: 239,
    background:
      'url(http://localhost:3000/assets/img/banner.png) no-repeat left #ed4550',
  },
  textWhite: {
    color: '#2d3748',
  },
  title: {
    fontWeight: 'bold',
    position: 'relative',
    top: 24,
  },
  section: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    paddingTop: 0,
    paddingBottom: 0,
  },
  listItemAvatar: {
    marginRight: theme.spacing(2),
  },
  avatar: {
    height: 60,
    width: 60,
  },
}));

const Hero = props => {
  const { className, title, author, ...rest } = props;
  const classes = useStyles();
  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Parallax backgroundImage="assets/img/blogArticle.jpeg">
        <div className={classes.sectionWrapper}>
          <Section className={classes.section}>
            <>
              <SectionHeader
                title={props.title}
                align="left"
                data-aos="fade-up"
                titleProps={{
                  className: clsx(classes.title, classes.textWhite),
                  variant: 'h3',
                }}
                subtitleProps={{
                  className: classes.textWhite,
                }}
              />
              <List disablePadding>
                <ListItem disableGutters>
                  <ListItemAvatar className={classes.listItemAvatar}>
                    <Avatar
                      {...author.photo}
                      alt={author.name}
                      className={classes.avatar}
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary={`Published by ${author.name}`}
                    secondary={`on ${author.date}`}
                    primaryTypographyProps={{
                      className: classes.textWhite,
                      variant: 'subtitle1',
                    }}
                    secondaryTypographyProps={{
                      className: classes.textWhite,
                      variant: 'subtitle1',
                    }}
                  />
                </ListItem>
              </List>
            </>
          </Section>
        </div>
      </Parallax>
    </div>
  );
};

Hero.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /*
   * Title of the hero
   */
  title: PropTypes.string.isRequired,
  /*
   * Author of the post
   */
  author: PropTypes.object.isRequired,
};

export default Hero;
