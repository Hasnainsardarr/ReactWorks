import { Grid, GridItem } from "@chakra-ui/react"
import DashboardLayout from "../../components/DashBoardLayout.jsx"
import Sidenav from "../../components/Sidenav"
import TopNav from "../../components/TopNav"
import PortfolioSection from "./components/PortfolioSection"
import PriceSection from "./components/PriceSection.jsx"
import Transections from "./components/Transections.jsx"
import InfoCard from "./components/InfoCard.jsx"

const Dashboard = () => {
  return (
     
   
         
        
        <DashboardLayout title="Dashboard" >
          <Grid 
          gridTemplateColumns={{
          base: "repeat(1, 1fr)",
          xl: "repeat(2, 1fr)",
        }}
        gap="6">
            <GridItem colSpan={2}>
            <PortfolioSection />


            </GridItem>

            <GridItem colSpan={1}>
            <PriceSection />

            </GridItem>

            <GridItem colSpan={1}>
            <Transections />

            </GridItem>
            <GridItem colSpan={1}>
          <InfoCard
            imgUrl="/dot_bg.svg"
            text=" Learn more about Loans – Keep your Bitcoin, access it’s value without
          selling it"
            tagText="Loan"
            inverted={false}
          />
        </GridItem>

        <GridItem colSpan={1}>
          <InfoCard
            inverted={true}
            tagText="Contact"
            imgUrl="/grid_bg.svg"
            text="Learn more about our real estate, mortgage, and  corporate account services"
          />
        </GridItem>
        

           </Grid>


             
            
            </DashboardLayout> 

        
     
  )
}

export default Dashboard
