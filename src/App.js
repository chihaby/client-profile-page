import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// @material-ui/icons
import LanguageIcon from '@material-ui/icons/Language';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
// import Button from "@material-ui/core/Button";

// import PersonIcon from '@material-ui/icons/Person';

// core components
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import GridContainer from './components/Grid/GridContainer.js';
import GridItem from './components/Grid/GridItem.js';
import HeaderLinks from './components/Header/HeaderLinks.js';
import NavPills from './components/NavPills/NavPills.js';
import Parallax from './components/Parallax/Parallax.js';

import profile from './assets/img/faces/radouane.jpg';

import flyingcarpet from './assets/img/examples/flying-carpet.jpg';
import onlinestore from './assets/img/examples/online-store.jpg';
import carpool from './assets/img/examples/carpool.jpg';
import puppy from './assets/img/examples/puppy.jpg';
import lunch from './assets/img/examples/lunch.jpg';
import forum from './assets/img/examples/forum.jpg';
import blog from './assets/img/examples/blog.jpg';
import mechanic from './assets/img/examples/mechanic.jpg';
import education from './assets/img/examples/education.jpg';
import baby_names from './assets/img/examples/baby_names.jpeg';

import styles from './assets/jss/material-kit-react/views/profilePage.js';

const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div>
      <Header
        color='transparent'
        brand='Radouane Chihaby'
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: 'white',
        }}
        {...rest}
      />
      <Parallax small filter image={require('./assets/img/profile-bg.jpg')} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify='center'>
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img src={profile} alt='...' className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>Radouane Chihaby</h3>
                    <h6>Web Developer</h6>
                    {/* <Button
                      social-media buttons hidden
                      style={{ backgroundColor: "red" }}
                      justIcon
                      link
                      className={classes.margin5}
                    >
                      <i className={"fab fa-twitter"} />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-instagram"} />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-facebook"} />
                    </Button> */}
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <p>
                I am a Frontend developer with industry experience in building
                websites and web applications. I specialize in JavaScript and
                have professional experience working with Node and React{' '}
              </p>
            </div>
            <GridContainer justify='center'>
              <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                <NavPills
                  alignCenter
                  color='primary'
                  tabs={[
                    {
                      tabButton: 'Business',
                      tabIcon: BusinessCenterIcon,

                      tabContent: (
                        <GridContainer justify='center'>
                          <GridItem xs={12} sm={12} md={4}>
                              <h6>Rug Store</h6>
                            <a
                              target='_blank'
                              rel='noopener noreferrer'
                              href='https://flyingcarpet.herokuapp.com/'
                            >
                              <img
                                alt='marketplace'
                                src={flyingcarpet}
                                className={navImageClasses}
                              />
                            </a>

                              
                           <h6>Forum</h6>
                            <a
                              target='_blank'
                              rel='noopener noreferrer'
                              href='https://think-piece-live-dc187.web.app/'
                            >
                              <img
                                alt='forum'
                                src={forum}
                                className={navImageClasses}
                              />
                            </a>

                           

                      
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                         <h6>Online Store</h6>
                            <a
                              target='_blank'
                              rel='noopener noreferrer'
                              href='https://onlinestore-next-prod.herokuapp.com/'
                            >
                              <img
                                alt='marketplace'
                                src={onlinestore}
                                className={navImageClasses}
                              />
                            </a>
                         <h6>Carpool UI Video</h6>
                            <a
                              target='_blank'
                              rel='noopener noreferrer'
                              href='https://www.youtube.com/watch?v=SUr68YFo_rI'
                            >
                              <img
                                alt='carpool'
                                src={carpool}
                                className={navImageClasses}
                              />
                            </a>

                            <h6>Lunch Vote</h6>
                            <a
                              target='_blank'
                              rel='noopener noreferrer'
                              href='https://lunch-rush-4d021.web.app/'
                            >
                              <img
                                alt='lunch'
                                src={lunch}
                                className={navImageClasses}
                              />
                            </a>
                         
                          </GridItem>
                        </GridContainer>
                      ),
                    },
                    {
                      tabButton: 'Client',
                      tabIcon: LanguageIcon,
                      tabContent: (
                        <GridContainer justify='center'>             
                          <GridItem xs={12} sm={12} md={4}>

                            <h6>Dog Breeds</h6>
                            <a
                              target='_blank'
                              rel='noopener noreferrer'
                              href='https://chihaby.github.io/puppy-finder/'
                            >
                              <img
                                alt='puppy'
                                src={puppy}
                                className={navImageClasses}
                              />
                            </a>
                       
                            <h6>Mechanic</h6>
                            <a
                              target='_blank'
                              rel='noopener noreferrer'
                              href='http://autodarb.ma/'
                            >
                              <img
                                alt='mechanic'
                                src={mechanic}
                                className={navImageClasses}
                              />
                            </a>    
            
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                           <h6>Blog</h6>
                            <a
                              target='_blank'
                              rel='noopener noreferrer'
                              href='https://finesly.com/'
                            >
                              <img
                                alt='blog'
                                src={blog}
                                className={navImageClasses}
                              />
                            </a>
                     
                           <h6>Education</h6>
                            <a
                              target='_blank'
                              rel='noopener noreferrer'
                              href='http://maharatkids.ma/'
                            >
                              <img
                                alt='education'
                                src={education}
                                className={navImageClasses}
                              />
                            </a>      
                            
                          <h6>Baby Names</h6>
                            <a
                              target='_blank'
                              rel='noopener noreferrer'
                              href='https://littlepeanut.net/'
                            >
                              <img
                                alt='names'
                                src={baby_names}
                                className={navImageClasses}
                              />
                            </a> 
                          </GridItem>
                        </GridContainer>
                      ),
                    },
                  ]}
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
