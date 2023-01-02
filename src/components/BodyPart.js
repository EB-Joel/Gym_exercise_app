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
console.log({item})
  let img = all_Icon
   if ({item}.toString() === 'back') { img = back_Icon}
    else{img =cardio_Icon};

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
        <img src={img} alt={item} style={{width:'40px', height:'40px'}} />
        <Typography fontSize="24px" fontWeight='bold' color="#3A1212" textTransform='capitalize'>{item}</Typography>
    </Stack>
    
  )
}

export default BodyPart