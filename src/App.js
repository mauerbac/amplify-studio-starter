import './App.css';
import { MarketingFooter, BathroomCardCollection, HeroGeorge} from "./ui-components";
import { withAuthenticator } from '@aws-amplify/ui-react';
import { View, Card, Grid, Divider, Heading } from '@aws-amplify/ui-react';


function App() {
  return (
    <div className="App">
      <Card
      columnStart="5"
      columnEnd="-1"
      >
        <HeroGeorge 
        width="100%"
        marginBottom="15px"
        overrides={{image: {objectFit: "contain" }} }
        />
         <Divider
            orientation="horizontal" />
         <Heading 
         margin="30px"
         level={2}>Recently Rated Bathrooms</Heading>
        <BathroomCardCollection 
        gap="20px"
        margin="0 auto"
        />
      </Card>
      <MarketingFooter
      width="100%" />
    </div>
  );
}

//export default withAuthenticator(App);
export default App;