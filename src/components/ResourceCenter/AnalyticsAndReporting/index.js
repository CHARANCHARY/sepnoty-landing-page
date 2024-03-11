// import React, { PureComponent } from 'react';
import styled from "styled-components";
// import { BarChart, Bar  } from 'recharts';
import MobSectionOne from './MobSectionOne/MobSectionOne';
import FooterSection from "../../Footer/FooterSection";
import { CiSearch } from "react-icons/ci";
import { BsSortDownAlt } from "react-icons/bs";
import { IoClose } from "react-icons/io5";

import React, {useState} from "react";



// Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,Text, ResponsiveContainer
import DaimondImg from "./image 22.png";
import Vector from "./Vector.png";
import GraphPro from "./Rectangle 6232.png";

import grp1 from "./Group 1261153426.png";
import grp2 from "./Group 1261153427.png";
import grp3 from './Group 1261153428.png';
import grp4 from './Group 1261153429.png';


import {
    // Header,
    // MobSection,
    // Span,
    CirclesContainer,
    CircleOne,
    CircleTwo,
    CircleThree,
    // CardSection,
    // GraphsContainer,
    PercentageContainer,
    MobSection1,
    
    AnalyticsPage,
    GdPageTitle,
    ServiceSpan,
    GdHeading,
    ProMainDiv,
    ProTop,
    ProBottom,
    ProTopHead,
    ProTopImg,
    ProBtn,
    VectorImg,
    GraphImg,
    BtnLearn,
    PatternCon,
    SmallPattern,
    ListHeading,
    HeadingSection,
    SearchSection,
    HeadingSearch,
    ElementsSection,
    SearchSectionBtn,
    GraphImageItem,

} from "./styled"







const AnalyticsAndReporting = () => {

    const [date, setDate]=useState();
    console.log("Date", date);

    const ActivityData = [
        {
          name: 'Page A',
          uv: 2000,
     
        },
        {
          name: 'Page B',
          uv: 1800,
       
        },
        {
          name: 'Page C',
          uv: 2000,
       
        },
        {
          name: 'Page D',
          uv: 1680,
         
        },
        {
          name: 'Page E',
          uv: 1890,
         
        },
        {
          name: 'Page F',
          uv: 2390,
     
        },
        {
          name: 'Page G',
          uv: 3490,

        },
      ];


      const projectsData = [
        {
          name: 'Page A',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Page D',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];


      // const textColor = "#ffffff";
    
      const CustomBarShape = ({ x, y, width, height }) => (
        <>
        <rect x={x} y={y} fill={"url(#grad)"} width={width} height={height} rx={5} ry={5} />

        {/* {ActivityData.map((entry, index) => (
                // <Text
                //   key={`label-${index}`}
                //   // x={(index + 0.5) * 250 / ActivityData.length} // Position text in the middle of each bar
                //   y={220} // Adjust the y-coordinate as needed
                //   textAnchor="middle"
                //   fill="black"
                // >
                //   {entry.name}
                // </Text>
          ))} */}
       
        </>
      );
      
      const CustomBarShape2 = ({ x, y, width, height }) => (
        <rect x={x} y={y} fill={"url(#grad2)"} width={width} height={height} rx={5} ry={5} />
      );
     const progress = "50";
     const CustomResponsiveContainer = styled.div`
        background-color: #C1CAE7;
        padding: 100px 10px 0px 30px;
        margin: 0px 30px 10px 0px; /* Adjust the margin for spacing and align to the right */
        color: black;
        width: auto;
        height:auto;
        border-radius: 10px; 
    `;
    return(
        <AnalyticsPage>
            
        <GdPageTitle>Resource Center &gt;<ServiceSpan> Analytics and Reporting</ServiceSpan></GdPageTitle>
        <GdHeading>Resources</GdHeading>
        
        <MobSectionOne />
        <HeadingSection>
              <PatternCon>
                <SmallPattern></SmallPattern>
                <ListHeading>Case Studies</ListHeading>
              </PatternCon>
              <SearchSection>
                  <HeadingSearch>Search here what you're looking for</HeadingSearch>
                  <ElementsSection>
                     <CiSearch
                      style={{
                        color: 'white', // Change outline color to white
                        fontSize: '2.2em', // Increase size (adjust as needed)
                        fontWeight: 'none',
                        border: '1px solid',
                        padding: '5px',
                        borderRadius: '30px',
                        margin: '0px 0px 0px 10px'
                      }}
                      />

                      <BsSortDownAlt
                           style={{
                            color: 'white', // Change outline color to white
                            fontSize: '2.2em', // Increase size (adjust as needed)
                            fontWeight: 'none',
                            border: '1px solid',
                            padding: '5px',
                            borderRadius: '30px',
                            margin: '0px 0px 0px 10px'
                          }}

                       />

                  <input type="date" onChange={e=>setDate(e.target.value)}  
                       style={{
                        backgroundColor: 'transparent',
                        color: '#fff', // Change outline color to white
                        border: '1px solid',
                        width: '150px',
                        height: '36px',
                        borderRadius: '3px',
                        textAlign: 'center',
                        fontSize: '18px',
                        margin: '0px 0px 0px 10px',
                        fill: '#fff',
                        cursor: 'pointer',
                      }}
                   />

                  <SearchSectionBtn>Download Report</SearchSectionBtn>
                  
                   

                  </ElementsSection>
                 
              </SearchSection>
        </HeadingSection>
              <ProMainDiv>
                  
                 <ProTop>
                
                      <ProBtn> <VectorImg src={Vector} alt="Vector"/> 15 Days</ProBtn>
                      <IoClose 
                   style={{
                    color: 'white', // Change outline color to white
                    fontSize: '2.2em', // Increase size (adjust as needed)
                    fontWeight: 'none',
                    margin: '0px 0px 0px 440px'
                  }}
                 />
                      <ProTopHead>
                        Pro Version
                      </ProTopHead>
                      
                      <ProTopImg src={DaimondImg} alt=" Pro version Get" /> 
                 </ProTop>
                 <ProBottom>
                    <GraphImg src={GraphPro} alt="Graph set"/>
                    <BtnLearn type="button">Learn More</BtnLearn>
                 </ProBottom>
             </ProMainDiv>
             <MobSection1>
                    <GraphImageItem src={grp3} alt="graph reports"  />  
                    <GraphImageItem src={grp1} alt="graph reports"  />
                    <GraphImageItem src={grp4} alt="graph reports"  />
                    <GraphImageItem src={grp2} alt="graph reports"  />
            </MobSection1>    
            <FooterSection />
        </AnalyticsPage>
    )
};
export default AnalyticsAndReporting;