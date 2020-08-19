import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import LanguageIcon from "@material-ui/icons/Language";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import PersonIcon from "@material-ui/icons/Person";

// core components
import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer.js";
import GridContainer from "./components/Grid/GridContainer.js";
import GridItem from "./components/Grid/GridItem.js";
import HeaderLinks from "./components/Header/HeaderLinks.js";
import NavPills from "./components/NavPills/NavPills.js";
import Parallax from "./components/Parallax/Parallax.js";

import profile from "./assets/img/faces/radouane.JPG";

import park_plaza_motors from "./assets/img/examples/park_plaza_motors.jpg";
import baby_names from "./assets/img/examples/baby_names.jpeg";
import marketplace from "./assets/img/examples/marketplace.png";
import carpool from "./assets/img/examples/carpool.jpeg";
import puppy from "./assets/img/examples/puppy.jpg";
import lunch from "./assets/img/examples/lunch.png";
import forum from "./assets/img/examples/forum.jpeg";
import list from "./assets/img/examples/list.jpeg";
import blog from "./assets/img/examples/blog.jpeg";

import styles from "./assets/jss/material-kit-react/views/profilePage.js";

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
        color="transparent"
        brand="Radouane Chihaby"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white",
        }}
        {...rest}
      />
      <Parallax small filter image={require("./assets/img/profile-bg.jpg")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img src={profile} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>Radouane Chihaby</h3>
                    <h6>Web Developer</h6>
                    {/* <Button
                      // social-media buttons hidden
                      // style={{ backgroundColor: "red" }}
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
                have professional experience working with Node and React{" "}
              </p>
            </div>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                <NavPills
                  alignCenter
                  color="primary"
                  tabs={[
                    {
                      tabButton: "Business",
                      tabIcon: BusinessCenterIcon,

                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <h6>Auto Dealership</h6>
                            <a
                              target="_blank"
                              rel="noopener noreferrer"
                              href="https://ppmmotors.com/"
                            >
                              <img
                                alt="car"
                                src={park_plaza_motors}
                                className={navImageClasses}
                              />
                            </a>

                            <h6>Baby Names</h6>
                            <a
                              target="_blank"
                              rel="noopener noreferrer"
                              href="https://littlepeanut.net/"
                            >
                              <img
                                alt="names"
                                src={baby_names}
                                className={navImageClasses}
                              />
                            </a>
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <h6>Carpool UI/UX</h6>
                            <a
                              target="_blank"
                              rel="noopener noreferrer"
                              href="https://www.youtube.com/watch?v=SUr68YFo_rI"
                            >
                              <img
                                alt="carpool"
                                src={carpool}
                                className={navImageClasses}
                              />
                            </a>
                            <h6>Marketplace</h6>
                            <a
                              target="_blank"
                              rel="noopener noreferrer"
                              href="https://onlinestore-next-prod.herokuapp.com/"
                            >
                              <img
                                alt="marketplace"
                                src={marketplace}
                                className={navImageClasses}
                              />
                            </a>
                            <h6>All Dogs</h6>
                            <a
                              target="_blank"
                              rel="noopener noreferrer"
                              href="https://chihaby.github.io/puppy-finder/"
                            >
                              <img
                                alt="puppy"
                                src={puppy}
                                className={navImageClasses}
                              />
                            </a>
                          </GridItem>
                        </GridContainer>
                      ),
                    },
                    {
                      tabButton: "Social",
                      tabIcon: LanguageIcon,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <h6>Forum</h6>
                            <a
                              target="_blank"
                              rel="noopener noreferrer"
                              href="https://think-piece-live-dc187.web.app/"
                            >
                              <img
                                alt="forum"
                                src={forum}
                                className={navImageClasses}
                              />
                            </a>

                            {/* <a
                              target="_blank"
                              rel="noopener noreferrer"
                              href="https://think-piece-live-dc187.web.app/"
                            >
                              <img
                                alt="..."
                                src={work3}
                                className={navImageClasses}
                              />
                            </a> */}
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <h6>Lunch Vote</h6>
                            <a
                              target="_blank"
                              rel="noopener noreferrer"
                              href="https://lunch-rush-4d021.web.app/"
                            >
                              <img
                                alt="lunch"
                                src={lunch}
                                className={navImageClasses}
                              />
                            </a>
                          </GridItem>
                        </GridContainer>
                      ),
                    },
                    {
                      tabButton: "Personal",
                      tabIcon: PersonIcon,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <h6>Personal Blog</h6>
                            <a
                              target="_blank"
                              rel="noopener noreferrer"
                              href="https://finesly.com/"
                            >
                              <img
                                alt="blog"
                                src={blog}
                                className={navImageClasses}
                              />
                            </a>
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <h6>Shopping List</h6>
                            <a
                              target="_blank"
                              rel="noopener noreferrer"
                              href="https://intense-ocean-86370.herokuapp.com/"
                            >
                              <img
                                alt="shopping-list"
                                src={list}
                                className={navImageClasses}
                              />
                            </a>
                            {/* <img
                              alt="..."
                              src={work1}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={studio1}
                              className={navImageClasses}
                            /> */}
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
