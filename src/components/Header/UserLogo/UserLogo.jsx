import React, { useEffect, useRef, useState } from 'react';
import { UseSelector } from 'react-redux';
import { selectUser } from '../../../redux/auth/selectors';
import {
  UserAvatar,
  UserName,
  UserLogoBtn,
  UserLogoText,
  UserLogoIcon,
  UserLogoContainer,
} from './UserLogo.styled';
import sprite from '../../../img/sprite.svg';
