
import img1 from "./Rectangle 6973.png";
import img2 from "./Rectangle 6977.png";
import {
    MainConatiner,
    SmallPattern,
    PatternCon,
    ListHeading,
    Container,
    Img,
    Details,
    Name,
    TextDts,
    ApplyButton,

} from "./styled"

const EventsApplySection = () => {
    const eventsList = [
        {
            ImgOf: img1,
            name: "Graphic Designer  event",
            place: "Banglore",
            time: "5:00 pm",
            fee: "Rs.500"
        },
        {
            ImgOf: img2,
            name: "Digital Marketing event",
            place: "Banglore",
            time: "5:00 pm",
            fee: "Rs.500"
        },
    ];
    const workshopList = [
        {
            ImgOf: img1,
            name: "Graphic Designer  event",
            place: "Banglore",
            time: "5:00 pm",
            fee: "Rs.500"
        },
        {
            ImgOf: img2,
            name: " Designer  event",
            place: "Banglore",
            time: "5:00 pm",
            fee: "Rs.500"
        },
    ]

    return(
         <>
           <MainConatiner>
             <PatternCon>
                <SmallPattern></SmallPattern>
                <ListHeading>Events</ListHeading>
              </PatternCon>
              
              {eventsList.map((items) => (
                <Container>
                    <Img  src={items.ImgOf}/>
                    <Details>
                        <Name>{items.name}</Name>
                        <TextDts>Place : {items.place}</TextDts>
                        <TextDts>Time : {items.time}</TextDts> 
                        <TextDts>Registration fee -{items.fee}</TextDts>    
                    </Details>
                    <ApplyButton>Apply</ApplyButton>
                </Container>
              ))}

              <PatternCon>
                <SmallPattern></SmallPattern>
                <ListHeading>Workshops</ListHeading>
              </PatternCon>

              {workshopList.map((items) => (
                <Container>
                    <Img  src={items.ImgOf}/>
                    <Details>
                        <Name>{items.name}</Name>
                        <TextDts>Place : {items.place}</TextDts>
                        <TextDts>Time : {items.time}</TextDts> 
                        <TextDts>Registration fee -{items.fee}</TextDts>    
                    </Details>
                    <ApplyButton>Apply</ApplyButton>
                </Container>
              ))}
           </MainConatiner>
         </>
    )
}

export default EventsApplySection;