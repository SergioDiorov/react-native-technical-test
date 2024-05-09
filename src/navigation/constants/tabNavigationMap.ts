import { ETabNavigation } from "../enums/tabNavigation";

const heartImg = require('src/assets/bottom-navigation/heart-navigation.png');
const commentImg = require('src/assets/bottom-navigation/comment-dots-navigationpng.png');
const profilePic = require('src/assets/bottom-navigation/profilePic.jpg');

export const IconNavigationMap = {
  [ETabNavigation.MAIN]: heartImg,
  [ETabNavigation.MESSAGE]: commentImg,
  [ETabNavigation.PROFILE]: profilePic,
}
