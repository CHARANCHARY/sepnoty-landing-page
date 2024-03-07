// import React, { PureComponent } from 'react';
import styled from "styled-components";
import { BarChart, Bar,Text  } from 'recharts';
import MobSectionOne from './MobSectionOne/MobSectionOne';
// Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,Text, ResponsiveContainer

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
} from "./styled"







const AnalyticsAndReporting = () => {

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
        padding: 30px 10px 0px 30px;
        margin: 0px 10px 10px auto; /* Adjust the margin for spacing and align to the right */
        color: black;
        width:auto;
        height:auto;
        border-radius: 10px;
        
    `;
    return(
        <AnalyticsPage>
            
        <GdPageTitle>Resource Center &gt;<ServiceSpan>Learning Paths and Road Maps</ServiceSpan></GdPageTitle>
        <GdHeading>Resources</GdHeading>
        <MobSectionOne />
         
             <MobSection1>
            {/* <GraphsContainer> */}
                    <CustomResponsiveContainer width="15%" height="5%">
                        <BarChart width={400} height={300} data={ActivityData}  
                          //  margin={{
                          //   top: 20,
                          //   right: 10,
                          //   left: 50,
                          //   bottom: 5,
                          // }}
                        >
                        {/* <XAxis dataKey="name" /> */}
                          
                            <defs>
                                <linearGradient id="grad" x1="0" y1="" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#FFF854" />
                                    <stop offset="100%" stopColor="#FFF85400" />
                                </linearGradient>
                            </defs>
                            <Bar dataKey="uv" label={{ position: 'top' }}   shape={<CustomBarShape />} />
                        </BarChart>
                    </CustomResponsiveContainer>
                    <CustomResponsiveContainer width="15%" height="12%">
                        <BarChart width={550} height={590} data={projectsData}
                          
                        >
                            <defs>
                                <linearGradient id="grad2" x1="0" y1="" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#545BFF" />
                                    <stop offset="100%" stopColor="#FFF85400" />
                                </linearGradient>
                            </defs>                  
                            <Bar dataKey="uv" label={{ position: 'top' }}  shape={<CustomBarShape2 />} />
                        </BarChart>
                    </CustomResponsiveContainer>
                  <PercentageContainer>
                      <div>
                        <div style={{ border: '0px solid #ccc', width: '300px', borderRadius: '10px', overflow: 'hidden' }}>
                            <div style={{ backgroundColor: '#007bff', height: '200px', width: `${progress}%`,borderRadius: '10px',margin:'5px' }} />
                        </div>
                        <div style={{ border: '0px solid #ccc', width: '300px', borderRadius: '10px', overflow: 'hidden' }}>
                            <div style={{ backgroundColor: '#007bff', height: '200px', width: `${progress}%`,borderRadius: '10px', }} />
                        </div>
                      </div>
                  </PercentageContainer>
                    <CirclesContainer>
                        <CircleOne>4%</CircleOne>
                        <CircleTwo>86%</CircleTwo>
                        <CircleThree>4%;</CircleThree>
                    </CirclesContainer>
            {/* </GraphsContainer> */}
            </MobSection1>    
        </AnalyticsPage>
    )
};
export default AnalyticsAndReporting;