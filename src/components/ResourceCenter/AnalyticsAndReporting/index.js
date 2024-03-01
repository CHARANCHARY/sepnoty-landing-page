import React, { PureComponent } from 'react';
import styled from "styled-components";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


import MobSectionOne from "./MobSectionOne/MobSectionOne"
import {
    Header,
    MobSection,
    Span,
    CirclesContainer,
    CircleOne,
    CircleTwo,
    CircleThree,
    CardSection,
    GraphsContainer,
} from "./styled"







const AnalyticsAndReporting = () => {

    const ActivityData = [
        {
          name: 'Page A',
          uv: 2000,
          pv: 2400,
          amt: 1400,
        },
        {
          name: 'Page B',
          uv: 1800,
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
          uv: 1680,
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



    
      const CustomBarShape = ({ x, y, width, height }) => (
        <>
        <rect x={x} y={y} fill={"url(#grad)"} width={width} height={height} rx={5} ry={5} />
        {/* <text x={x + width / 2} y={y + height / 2} fill={textColor} fontSize={12} textAnchor="middle" alignmentBaseline="middle">
        </text> */}
        </>
      );
      
      const CustomBarShape2 = ({ x, y, width, height }) => (
        <rect x={x} y={y} fill={"url(#grad2)"} width={width} height={height} rx={5} ry={5} />
      );
     const progress = "50";
     const CustomResponsiveContainer = styled(ResponsiveContainer)`
        background-color: #C1CAE7;
        padding: 30px 0px 10px 30px;
        color: black;
      `;
  

    return(
        <>
             <MobSection>
             <Header> Resource centre &gt; <Span>Learning Paths and Roadmaps</Span> </Header>

            <MobSectionOne />


            {/* <GraphsContainer> */}
                    <CustomResponsiveContainer width="25%" height="15%" >
                        <BarChart width={150} height={40} data={ActivityData}>
                            <defs>
                                <linearGradient id="grad" x1="0" y1="" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#FFF854" />
                                    <stop offset="100%" stopColor="#FFF85400" />
                                </linearGradient>
                            </defs>
                            <Bar dataKey="uv"  shape={<CustomBarShape />} label="mon"/>
                        </BarChart>
                    </CustomResponsiveContainer>


                    <ResponsiveContainer width="10%" height="10%">
                        <BarChart width={150} height={40} data={projectsData}>
                            <defs>
                                <linearGradient id="grad2" x1="0" y1="" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#545BFF" />
                                    <stop offset="100%" stopColor="#FFF85400" />
                                </linearGradient>
                            </defs>
                            <Bar dataKey="uv"  shape={<CustomBarShape2 />} />
                        </BarChart>
                    </ResponsiveContainer>

                  <div>
                    <div style={{ border: '0px solid #ccc', width: '300px', borderRadius: '10px', overflow: 'hidden' }}>
                        <div style={{ backgroundColor: '#007bff', height: '20px', width: `${progress}%`,borderRadius: '10px', }} />
                    </div>
                    <div style={{ border: '0px solid #ccc', width: '300px', borderRadius: '10px', overflow: 'hidden' }}>
                        <div style={{ backgroundColor: '#007bff', height: '20px', width: `${progress}%`,borderRadius: '10px', }} />
                    </div>
                  </div>


                    <CirclesContainer>
                        <CircleOne>23%</CircleOne>
                        <CircleTwo>87%</CircleTwo>
                        <CircleThree></CircleThree>
                    </CirclesContainer>
            {/* </GraphsContainer> */}










            </MobSection>
           
           
        </>
    )
};


export default AnalyticsAndReporting;