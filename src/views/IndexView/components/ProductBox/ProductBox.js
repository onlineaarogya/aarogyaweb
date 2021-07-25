import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  useMediaQuery,
  colors,
  Grid,
  Typography,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
} from '@material-ui/core';
import { SectionHeader } from 'components/molecules';

const useStyles = makeStyles(theme => ({
  gridItem: {
    border: 0,
    [theme.breakpoints.up('sm')]: {
      borderRight: `1px solid ${colors.blueGrey[100]}`,
      '&:nth-child(2n)': {
        borderRight: 0,
      },
      '&:nth-child(-n+4)': {
        borderBottom: `1px solid ${colors.blueGrey[100]}`,
      },
    },
    [theme.breakpoints.up('md')]: {
      borderRight: `1px solid ${colors.blueGrey[100]}`,
      '&:nth-child(2n)': {
        borderRight: `1px solid ${colors.blueGrey[100]}`,
      },
      '&:nth-child(-n+4)': {
        borderBottom: 0,
      },
      '&:nth-child(3n)': {
        borderRight: 0,
      },
      '&:nth-child(-n+3)': {
        borderBottom: `1px solid ${colors.blueGrey[100]}`,
      },
    },
  },
  large: {
    width: theme.spacing(11),
    height: theme.spacing(11),
    marginRight: '10px',
    // background: 'green',
    borderRadius: '8px',
    // border: 1px solid #ed3833;
  },
}));

const ProductBox = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const data = [
    {
      authorPhoto: {
        src: process.env.NEXT_PUBLIC_BASE_URL + '/assets/onlineConsult.png',
        srcSet:
          process.env.NEXT_PUBLIC_BASE_URL + '/assets/onlineConsult@2x.png 2x',
      },
      authorName: 'Online Aarogya',
      authorOccupation: 'Growth Marketer, Crealytics',
      feedback:
        'Online Aarogya is medical consultation platform, which empowers patients to take consultation through the choice of their doctors, without geographical limitations. It also allows the patients to download and share their prescriptions with anyone. For the doctors, it leverages technology to improve the quality of consultation, using less time and effort.',
    },
    {
      authorPhoto: {
        src: process.env.NEXT_PUBLIC_BASE_URL + '/assets/pet-Consultation.png',
        srcSet:
          process.env.NEXT_PUBLIC_BASE_URL +
          '/assets/pet-Consultation@2x.png 2x',
      },
      authorName: 'Pet Aarogya',
      authorOccupation: 'Lead Generation, Alternative Capital',
      feedback:
        'A digital veterinary platform that offers online consultations to pet owners to offer advice and prescribe medications depending on their pets health. It connects with a verified Veterinarians in a minute, to keep your pets safe and healthy.',
    },
    {
      authorPhoto: {
        src: process.env.NEXT_PUBLIC_BASE_URL + '/assets/MEDI-FILE.png',
        srcSet: process.env.NEXT_PUBLIC_BASE_URL + '/assets/MEDI-FILE@2x.ng 2x',
      },
      authorName: 'MediFiles',
      authorOccupation: 'Head of Operations, Parkfield Commerce',
      feedback:
        'Your personal secure online locker to keep all your medical records digitally, which can be shared at your finger tip. The artificial intelligence combined with statistical analytics to provide the predictive health and medical conditions for lifestyle corrections.',
    },
    {
      authorPhoto: {
        src: process.env.NEXT_PUBLIC_BASE_URL + '/assets/yoga.png',
        srcSet: process.env.NEXT_PUBLIC_BASE_URL + '/assets/yoga@2x.png 2x',
      },
      authorName: 'ShapeItUp',
      authorOccupation: 'Growth Marketer, Crealytics',
      feedback:
        'We believe every individual is unique in terms of metabolism, routine and hobbies. Combining technology and artificial intelligence to manage above factors can make your fitness journey more fun and sustainable.',
    },
    {
      authorPhoto: {
        src: process.env.NEXT_PUBLIC_BASE_URL + '/assets/mall.png',
        srcSet: process.env.NEXT_PUBLIC_BASE_URL + '/assets/mall@2x.png 2x',
      },
      authorName: 'Aarogya Mall',
      authorOccupation: 'Lead Generation, Alternative Capital',
      feedback:
        'Besides catering to the supply for lets talk, Pet aarogya, shapeitup and online aarogya, it provides various medical services to your door step including leasing out medical equipment and nursing services at the comfort of your home.',
    },
    {
      authorPhoto: {
        src: process.env.NEXT_PUBLIC_BASE_URL + '/assets/LETS-tALK.png',
        srcSet:
          process.env.NEXT_PUBLIC_BASE_URL + '/assets/LETS-tALK@2x.png 2x',
      },
      authorName: "Let's Talk",
      authorOccupation: 'Head of Operations, Parkfield Commerce',
      feedback:
        'At some point we all experience disturbing thoughts that holds us back, with online let’s talk aarogya, one can get help to discover and overcome these hindrance with the support of a licensed counsellor. The counselling sessions are 100% secure and private.',
    },
  ];

  return (
    <div className={className} {...rest}>
      <SectionHeader
        title="Our Brands"
        // subtitle="We dont' like to brag, but we don't mind letting our customers do it for us. Here are a few nice things folks have said about our themes over the years."
        align="center"
        data-aos="fade-up"
      />
      <Grid container spacing={isMd ? 4 : 2}>
        {data.map((item, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={index}
            className={classes.gridItem}
            data-aos="fade-up"
          >
            <Grid container spacing={0}>
              <Grid item xs={12}>
                <ListItem disableGutters key={index}>
                  <ListItemAvatar>
                    <Avatar
                      variant="square"
                      className={classes.large}
                      {...item.authorPhoto}
                    />
                  </ListItemAvatar>
                  <ListItemText
                    // primary={item.authorName}
                    // secondary={item.authorOccupation}
                    primary={
                      <Typography
                        type="body1"
                        variant="h6"
                        style={{ fontWeight: 'bold' }}
                      >
                        {item.authorName}
                      </Typography>
                    }
                    // primaryTypographyProps={{
                    //   variant: 'h6',
                    // }}
                    secondaryTypographyProps={{
                      variant: 'body1',
                      noWrap: true,
                    }}
                  />
                </ListItem>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle1">{item.feedback}</Typography>
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

ProductBox.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  // data: PropTypes.array.isRequired,
};

export default ProductBox;
