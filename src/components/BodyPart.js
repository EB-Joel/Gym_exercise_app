import React from 'react'
import {Stack, Typography} from '@mui/material';

import all_Icon from '../assets/icons/all.png';
import back_Icon from '../assets/icons/back.png';
import cardio_Icon from '../assets/icons/cardio.png';
import chest_Icon from '../assets/icons/chest.png';
import lower_arms_Icon from '../assets/icons/lower arms.png';
import lower_legs_Icon from '../assets/icons/lower legs.png';
import neck_Icon from '../assets/icons/neck.png';
import waist_Icon from '../assets/icons/waist.png';
import upper_arms_Icon from '../assets/icons/upper arms.png';
import upper_legs_Icon from '../assets/icons/upper legs.png';
import shoulders_Icon from '../assets/icons/shoulders.png';

const BodyPart = ({item, setBodyPart, bodyPart}) => {

  let img = all_Icon
  if (item === "all") { img = all_Icon}
  else if(item === "back") { img = back_Icon} 
  else if(item === "cardio") { img = cardio_Icon}
  else if(item === "chest") { img = chest_Icon}
  else if(item === "neck") { img = neck_Icon}
  else if(item === "shoulders") { img = shoulders_Icon}
  else if(item === "lower arms") { img = lower_arms_Icon}
  else if(item === "upper arms") { img = upper_arms_Icon}
  else if(item === "lower legs") { img = lower_legs_Icon}
  else if(item === "upper legs") { img = upper_legs_Icon}
  else if(item === "waist") { img = waist_Icon};

  return (
    <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
    sx={{
        borderTop: bodyPart === item ? '4px solid #ff2625':'',
        backgroundColor: '#fff',
        borderBottomLeftRadius: '20px',
        width: '270px',
        height: '280px',
        cursor: 'pointer',
        gap: '47px'
            }
        }  
      onClick={() =>{
        setBodyPart(item);
        window.scrollTo({top: 1800, left: 100, behavior:'smooth'})
      }}
    >
        <img src={img} alt={item} style={{width:'90px', height:'90px'}} />
        <Typography fontSize="24px" fontWeight='bold' color="#3A1212" textTransform='capitalize'>{item}</Typography>
    </Stack>
    
  )
}

export default BodyPart