import React from 'react'
import {
    ServiceCardCon,
    ServiceImgName,
    ServiceImg,
    ServiceName,
    ServiceDescription,
    Forward,
    
} from './styled';


const ServiceCard = (props) => {
  const { details } = props;
  const {imgUrl,domainName,description} = details;

  return (

    <ServiceCardCon>
    <ServiceImgName>
    <ServiceImg src={imgUrl} />
    <ServiceName>{domainName}</ServiceName>
    </ServiceImgName>
    <ServiceDescription>{description}</ServiceDescription>
    <Forward>&rarr;</Forward>
    </ServiceCardCon>
  );
};

export default ServiceCard
