import { Grid, GridItem } from '@chakra-ui/react'
import Navbar from './Navbar.Component'
import Footer from './Footer.Component'

type Props = {
    children: React.ReactNode
}

const Layout = ({children}: Props) => {
    return (
        <Grid>
            <GridItem>
                <Navbar/>
            </GridItem>
            <GridItem>
                {children}
            </GridItem>
            <GridItem>
                <Footer/>
            </GridItem>
        </Grid>
    )
}

export default Layout