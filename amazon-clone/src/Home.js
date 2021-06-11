import React from 'react';
import "./Home.css";
import Product from "./Product";
// import { MDBMask, MDBView, MDBContainer, MDBRow, MDBCol } from "mdbreact";

function Home() {
    return (
        <div className='home'>
            
            <div className='home__container'>
                <img className='home__image'
                src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/YmM4ZGRiNGQt/YmM4ZGRiNGQt-MmY2NWM1MzMt-w3000._CB669575617_.jpg" alt=""/>

                
        {/* <MDBView hover> */}
                <div className='home__row'>
                    <Product 
                    id="12345"
                    title='TurboCharger'
                    price={120.99}
                    image='https://static.mitchellandness.com/media/catalog/product/cache/faecf306f19cfddfc0fac775879e801e/7/2/7226_318_96pewi_1_1.jpg'
                    rating={4}
                    />

                    <Product
                    id="6789"
                    title='Intercooler'
                    price={345.99}
                    image="https://dny9h0eqgytzl.cloudfront.net/wp-content/uploads/2017/01/intercooler.jpg"
                    rating={4}
                    />
                </div>

                <div className='home__row'>
                    <Product
                    id="1011"
                    title='Jordans'
                    price={250.99}
                    image="https://image.goat.com/crop/1250/attachments/product_template_additional_pictures/images/052/891/412/original/724738_01.jpg.jpeg?1617807822https://dny9h0eqgytzl.cloudfront.net/wp-content/uploads/2017/01/intercooler.jpg"
                    rating={4}
                    />
                    <Product
                    id="1213"
                    title='Hayabusa swingarm extension kit'
                    price={303.99}
                    image="https://i.ebayimg.com/images/g/UUoAAOSwcABeJj54/s-l1600.jpg"
                    rating={4}
                    />
                    <Product
                    id="1415"
                    title='Ninja Foodi'
                    price={219.99}
                    image="https://s7d2.scene7.com/is/image/BedBathandBeyond/377641368572501p?$460$&wid=515&hei=515"
                    rating={3}
                    />
                </div>
            
                <div className='home__row'>
                    <Product
                    id="1617"
                    title='Double vanity'
                    price={1589.00}
                    image="https://secure.img1-fg.wfcdn.com/im/14912301/resize-h800%5Ecompr-r85/5445/54453452/Minnetrista+72%2522+Double+Bathroom+Vanity+Set.jpg"
                    rating={4}
                    />
                </div>
                {/* </MDBView> */}
            </div>
            
        </div>
    )
}

export default Home
